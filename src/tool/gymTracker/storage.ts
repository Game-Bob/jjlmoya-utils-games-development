import type { HistoryData, CustomExercise } from "./types";

const STORAGE_KEY = 'jjlmoya-gym-tracker-data';
const CUSTOM_EXERCISES_KEY = 'jjlmoya-gym-tracker-custom';

export function getHistory(): HistoryData {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
}

export function saveLog(exerciseId: string, weight: number) {
  const history = getHistory();
  if (!history[exerciseId]) history[exerciseId] = [];
  history[exerciseId].push({ date: new Date().toISOString(), weight });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function deleteLog(exerciseId: string, index: number) {
  const history = getHistory();
  if (history[exerciseId]) {
    history[exerciseId].splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }
}

export function deleteExerciseHistory(exerciseId: string) {
  const history = getHistory();
  delete history[exerciseId];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function getCustomExercises(): CustomExercise[] {
  const data = localStorage.getItem(CUSTOM_EXERCISES_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveCustomExercise(name: string): string {
  const custom = getCustomExercises();
  const id = `custom-${Date.now()}`;
  custom.push({ id, name });
  localStorage.setItem(CUSTOM_EXERCISES_KEY, JSON.stringify(custom));
  return id;
}
