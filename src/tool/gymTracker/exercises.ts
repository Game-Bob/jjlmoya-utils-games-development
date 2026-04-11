export interface Exercise {
  id: string;
  nameKey: string;
  categoryKey: 'push' | 'pull' | 'glute';
}

export const defaultExercises: Exercise[] = [
  { id: 'bench-press', nameKey: 'benchPress', categoryKey: 'push' },
  { id: 'overhead-press', nameKey: 'overheadPress', categoryKey: 'push' },
  { id: 'push-press', nameKey: 'pushPress', categoryKey: 'push' },
  { id: 'incline-db-press', nameKey: 'inclineDbPress', categoryKey: 'push' },
  { id: 'dips-triceps', nameKey: 'dipsTriceps', categoryKey: 'push' },
  { id: 'triceps-extensions', nameKey: 'tricepsExtensions', categoryKey: 'push' },

  { id: 'pull-up', nameKey: 'pullUp', categoryKey: 'pull' },
  { id: 'barbell-row', nameKey: 'barbellRow', categoryKey: 'pull' },
  { id: 'lat-pulldown', nameKey: 'latPulldown', categoryKey: 'pull' },
  { id: 'db-row', nameKey: 'dbRow', categoryKey: 'pull' },
  { id: 'face-pulls', nameKey: 'facePulls', categoryKey: 'pull' },
  { id: 'biceps-curl', nameKey: 'bicepsCurl', categoryKey: 'pull' },

  { id: 'hip-thrust', nameKey: 'hipThrust', categoryKey: 'glute' },
  { id: 'rdl', nameKey: 'rdl', categoryKey: 'glute' },
  { id: 'lunges', nameKey: 'lunges', categoryKey: 'glute' },
  { id: 'glute-kick', nameKey: 'gluteKick', categoryKey: 'glute' },
  { id: 'hip-abduction', nameKey: 'hipAbduction', categoryKey: 'glute' },
  { id: 'step-up', nameKey: 'stepUp', categoryKey: 'glute' },
];
