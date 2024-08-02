import viteCompression from 'vite-plugin-compression'

export default () => {
  return {
    plugins: [viteCompression({
      algorithm: 'brotliCompress',
      filter: /\.(fontello|js|map|json|css|html|wasm|txt|xml)$/i,
      // deleteOriginFile: true,
    })],
  }
}
