import dev from '../index'

export default {
  input: './foo.js',
  output: { file: './bar.js', format: 'esm' },
  plugins: [
    dev({
      host: '0.0.0.0',
      spa: true,
      proxy: {
        '/v3/*': ['polyfill.io', { https: true, filter: (ctx) => ctx.method === 'GET' }],
        '/posts*': ['https://jsonplaceholder.typicode.com/posts', { https: true }]
      }
    })
  ]
}
