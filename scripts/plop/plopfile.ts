import type { NodePlopAPI } from 'node-plop';
import { componentGenerator } from './generators';

// eslint-disable-next-line import/no-default-export
export default function (plop: NodePlopAPI) {
	plop.setGenerator('component', componentGenerator);
}
