export interface IFeatureConfig {
  url: string;
  loadModule: () => Promise<any>;
}
