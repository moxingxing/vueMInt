const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
    baseUrl: isPro ? 'http://www.vnshop.cn/api/' : 'http://192.168.5.243:8090/pms-server'
}