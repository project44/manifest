import { CompilerOptions, ProjectReference } from 'typescript';

export type PackageDeps = Record<string, string>;

export interface PackageJSON {
  engines?: { node?: string };
  dependencies?: PackageDeps;
  devDependencies?: PackageDeps;
  peerDependencies?: PackageDeps;
}

export interface TSConfigJSON {
  compilerOptions?: CompilerOptions;
  references?: ProjectReference[];
}
