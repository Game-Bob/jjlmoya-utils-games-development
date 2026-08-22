import type { FormulaVariables } from "./logic";

type Token =
  | { kind: "number"; value: number }
  | { kind: "name"; value: string }
  | { kind: "symbol"; value: string };

const FUNCTIONS: Record<string, (...values: number[]) => number> = {
  abs: Math.abs,
  ceil: Math.ceil,
  clamp: (value, min, max) => Math.min(Math.max(value, min), max),
  floor: Math.floor,
  max: Math.max,
  min: Math.min,
  pow: Math.pow,
  round: Math.round,
  sqrt: Math.sqrt,
};

const PRECEDENCE: Record<string, number> = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
  "^": 3,
  neg: 3,
};

function readNumber(expression: string, start: number): [Token, number] {
  const match = expression
    .slice(start)
    .match(/^(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?/i);
  if (!match) throw new Error(`Invalid number at position ${start + 1}`);
  return [{ kind: "number", value: Number(match[0]) }, start + match[0].length];
}

function readName(expression: string, start: number): [Token, number] {
  const match = expression.slice(start).match(/^[a-z][a-z0-9_]*/i);
  if (!match) throw new Error(`Invalid name at position ${start + 1}`);
  return [{ kind: "name", value: match[0] }, start + match[0].length];
}

export function tokenize(expression: string): Token[] {
  const tokens: Token[] = [];
  let index = 0;
  while (index < expression.length) {
    const character = expression[index] ?? "";
    if (/\s/.test(character)) index += 1;
    else if (/[\d.]/.test(character)) {
      const [token, next] = readNumber(expression, index);
      tokens.push(token);
      index = next;
    } else if (/[a-z_]/i.test(character)) {
      const [token, next] = readName(expression, index);
      tokens.push(token);
      index = next;
    } else if ("+-*/^(),".includes(character)) {
      tokens.push({ kind: "symbol", value: character });
      index += 1;
    } else throw new Error(`Unsupported character at position ${index + 1}`);
  }
  if (tokens.length === 0) throw new Error("Enter a damage formula");
  return tokens;
}

class Parser {
  private index = 0;
  constructor(
    private readonly tokens: Token[],
    private readonly variables: FormulaVariables,
  ) {}

  parse(): number {
    const value = this.expression(0);
    if (this.index !== this.tokens.length) throw new Error("Unexpected token");
    return value;
  }

  private expression(minimum: number): number {
    let left = this.prefix();
    while (this.isBinary() && this.precedence() >= minimum) {
      const operator = this.takeSymbol();
      const nextMinimum =
        (PRECEDENCE[operator] ?? 0) + (operator === "^" ? 0 : 1);
      left = calculate(operator, left, this.expression(nextMinimum));
    }
    return left;
  }

  private prefix(): number {
    const token = this.tokens[this.index];
    if (!token) throw new Error("Formula ended unexpectedly");
    if (token.kind === "number") {
      this.index += 1;
      return token.value;
    }
    if (token.kind === "name") return this.nameValue(token.value);
    if (token.kind === "symbol") return this.symbolValue(token.value);
    throw new Error("Expected a number, variable, function, or group");
  }

  private symbolValue(symbol: string): number {
    if (symbol === "-") {
      this.index += 1;
      return -this.expression(PRECEDENCE.neg ?? 3);
    }
    if (symbol === "(") return this.group();
    throw new Error("Expected a number, variable, function, or group");
  }

  private nameValue(name: string): number {
    this.index += 1;
    const next = this.tokens[this.index];
    if (next?.kind === "symbol" && next.value === "(")
      return this.callFunction(name);
    if (!(name in this.variables)) throw new Error(`Unknown variable: ${name}`);
    return this.variables[name as keyof FormulaVariables];
  }

  private callFunction(name: string): number {
    const callable = FUNCTIONS[name];
    if (!callable) throw new Error(`Unknown function: ${name}`);
    this.index += 1;
    const values: number[] = [];
    if (!this.isSymbol(")")) {
      values.push(this.expression(0));
      while (this.isSymbol(",")) {
        this.index += 1;
        values.push(this.expression(0));
      }
    }
    this.expect(")");
    return callable(...values);
  }

  private group(): number {
    this.index += 1;
    const value = this.expression(0);
    this.expect(")");
    return value;
  }

  private expect(symbol: string): void {
    if (!this.isSymbol(symbol)) throw new Error(`Expected ${symbol}`);
    this.index += 1;
  }

  private takeSymbol(): string {
    const token = this.tokens[this.index];
    if (token?.kind !== "symbol") throw new Error("Expected an operator");
    this.index += 1;
    return token.value;
  }

  private isSymbol(symbol: string): boolean {
    const token = this.tokens[this.index];
    return token?.kind === "symbol" && token.value === symbol;
  }

  private isBinary(): boolean {
    const token = this.tokens[this.index];
    return (
      token?.kind === "symbol" &&
      token.value in PRECEDENCE &&
      token.value !== "neg"
    );
  }

  private precedence(): number {
    const token = this.tokens[this.index];
    return token?.kind === "symbol" ? (PRECEDENCE[token.value] ?? -1) : -1;
  }
}

function calculate(operator: string, left: number, right: number): number {
  if (operator === "+") return left + right;
  if (operator === "-") return left - right;
  if (operator === "*") return left * right;
  if (operator === "/") return left / right;
  return left ** right;
}

export function evaluateExpression(
  expression: string,
  variables: FormulaVariables,
): number {
  const result = new Parser(tokenize(expression), variables).parse();
  if (!Number.isFinite(result))
    throw new Error("Formula produced a non-finite value");
  return result;
}
