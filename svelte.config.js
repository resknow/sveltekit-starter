import adapter from '@sveltejs/adapter-auto';
import path from 'path';
import preprocess from 'svelte-preprocess';
import globImporter from 'node-sass-glob-importer';

const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					'@components': path.resolve('./src/components'),
					'@styles': path.resolve('./src/styles'),
					'@utils': path.resolve('./src/utils')
				}
			}
		}
	},
	preprocess: preprocess({
		scss: {
			importer: globImporter(),
			prependData: `@import './src/styles/setup.scss';`
		}
	})
};

export default config;
