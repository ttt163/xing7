/**
 * Author：tantingting
 * Time：2018/12/17
 * Description：Description
 */

module.exports = {
    host: '10.236.78.220',
    // host: '192.168.31.101',
    port: '3020',
    publicPath: './',
    // publicPath: 'http://www.huoxing24.com/static/',
    buildPath: 'distRecat',
    srcPath: 'src',
    templatePath: 'template',
    libsPath: 'libs',
    devVendors: ['babel-polyfill'],
    vendors: [
        'babel-polyfill',
        'axios',
        'react',
        'react-dom',
        'react-redux',
        'react-router',
        'react-router-redux',
        'redux',
        'redux-devtools-extension',
        'redux-thunk'
    ],
    html: {
        title: '活动汇总_星七Club',
        keywords: '户外，交友，桌游，派对，相亲，8090，旅游，狼人杀，唱歌，团建，年轻人，蹦床，滑雪，爬山，摄影聚会',
        description: '星七Club是一个集同城户外出行、同城交友、同城桌游、同城聚会以及全国长线旅游的年轻人社交活动平台，有星七就出发！'
    },
    proxy: {'/api': {
            // context: ['/*', '/*/*', '/*/*/*'],
            target: 'http://188.131.179.44:8080',
            changeOrigin: true,
            ws: true,
            secure: false
        }}
}
