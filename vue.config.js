module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/travis-demo/' : '/',
    parallel: require('os').cpus().length > 1,
    devServer: {
        port: 8084,
        disableHostCheck: true,
    },
    transpileDependencies: ['vuex-composition-helpers', 'vux'],
};
