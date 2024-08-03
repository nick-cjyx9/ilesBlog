import viteCompression from 'vite-plugin-compression'
import webfontDownload from 'vite-plugin-webfont-dl'

export default () => {
  return {
    plugins: [
      viteCompression({
        algorithm: 'brotliCompress',
        filter: /\.(fontello|js|map|json|css|html|wasm|txt|xml)$/i,
      // deleteOriginFile: true,
      }),
      webfontDownload(['https://fonts.googleapis.com/css2?family=Noto+Serif+SC&family=Source+Code+Pro&display=swap']),
    ],
  }
}
