const esbuild = require('esbuild');

esbuild.buildSync({
    entryPoints: ['./src/server.ts'],
    bundle: true,
    platform: 'node',
    external: ['node_modules/*'],
    outfile: './build/bundle.js',
})
