export interface Registry {
  'angular-module': () => Promise<unknown>;
}

export const registry: Registry = {
  'angular-module': () => import('angular-module/Module'),
};
