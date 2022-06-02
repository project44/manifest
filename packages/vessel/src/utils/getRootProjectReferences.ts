import { getRootTSConfig } from './getRootTSConfig';
import { ProjectReference } from 'typescript';

export function getRootProjectReferences(): ProjectReference[] | undefined {
  return getRootTSConfig().references;
}
