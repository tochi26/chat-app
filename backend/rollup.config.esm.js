// rollup.config.js
export default {
    input: 'backend/index.js', // Replace 'src/index.js' with the actual path to your entry JavaScript file
    output: {
      file: 'dist/bundle.js', // Replace 'dist/bundle.js' with the desired output file path
      format: 'umd' // Choose an appropriate output format (e.g., 'umd', 'es', 'cjs')
    },
    // ...other Rollup configuration options
  };