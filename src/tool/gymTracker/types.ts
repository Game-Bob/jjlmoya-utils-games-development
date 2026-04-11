export interface LogEntry { 
  date: string; 
  weight: number; 
}

export type HistoryData = Record<string, LogEntry[]>;

export interface CustomExercise { 
  id: string; 
  name: string; 
}
