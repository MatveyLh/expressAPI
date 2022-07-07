const esbuild = require('esbuild');

esbuild.buildSync({
    entryPoints: ['./src/server.ts'],
    bundle: true,
    platform: 'node',
    outfile: './build/bundle.js',
})
