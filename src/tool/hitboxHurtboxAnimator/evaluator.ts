import type { CollisionProject } from './logic';

export interface ProjectDiagnostics {
  frameCount: number;
  shapeCount: number;
  coveredFrames: number;
  coveragePercent: number;
}

export function evaluateProject(project: CollisionProject): ProjectDiagnostics {
  const shapeCount = project.frames.reduce((total, frame) => total + frame.shapes.length, 0);
  const coveredFrames = project.frames.filter((frame) => frame.shapes.length > 0).length;
  const coveragePercent = project.frames.length === 0 ? 0 : Math.round((coveredFrames / project.frames.length) * 100);
  return { frameCount: project.frames.length, shapeCount, coveredFrames, coveragePercent };
}
