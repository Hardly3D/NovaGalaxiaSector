// THIS IS A NOVA SECTOR UI FILE
import { Feature, FeatureNumberInput } from '../../base';

export const tempintolerance_heat: Feature<number> = {
  name: 'Heat Damage Modifier',
  component: FeatureNumberInput,
};

export const tempintolerance_cold: Feature<number> = {
  name: 'Cold Damage Modifier',
  component: FeatureNumberInput,
};
