import { parseJSON } from './parseJSON';
import { TSCONFIG_JSON_PATH } from '../constants';
import { TSConfigJSON } from '../types';

let tsconfigJson: TSConfigJSON | undefined;

export function getRootTSConfig(): TSConfigJSON {
  if (tsconfigJson === undefined) {
    tsconfigJson = parseJSON(TSCONFIG_JSON_PATH);
  }

  return tsconfigJson!;
}
