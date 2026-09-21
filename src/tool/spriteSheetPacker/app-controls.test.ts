import { describe, expect, it, vi } from "vitest";
import { setTabSelected } from "./app-controls";

function createTabDouble() {
  return {
    classList: { toggle: vi.fn() },
    setAttribute: vi.fn(),
  };
}

describe("sprite sheet packer controls", () => {
  it("keeps visual and accessible tab selection aligned", () => {
    const tab = createTabDouble();

    setTabSelected(tab, true);
    setTabSelected(tab, false);

    expect(tab.classList.toggle).toHaveBeenNthCalledWith(1, "active", true);
    expect(tab.setAttribute).toHaveBeenNthCalledWith(
      1,
      "aria-selected",
      "true",
    );
    expect(tab.classList.toggle).toHaveBeenNthCalledWith(2, "active", false);
    expect(tab.setAttribute).toHaveBeenNthCalledWith(
      2,
      "aria-selected",
      "false",
    );
  });
});
