
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const isDev = process.env.NODE_ENV === 'development';
const minify = process.env.MINIFY;

const config = {
  input: 'src/index.js',
  output: {
    file: 'release/js-range.js',
    format: 'umd',
    name: 'jsRange'
  },
  plugins: []
};

if (isDev) {
  config.plugins.push(
    serve({
      port: 8080,
      open: true,
      contentBase: './',
      historyApiFallback: true,
      host: '0.0.0.0'
    }),
  );

  config.plugins.push(
    livereload()
  );
  
} else {
  if (minify === 'true') {
    config.output.file = 'release/js-range.min.js';
    config.plugins.push(uglify.uglify());
  } else {
    config.output.file = 'release/js-range.js';
  }

  config.plugins.push(
    babel()
  )
}

export default config;
