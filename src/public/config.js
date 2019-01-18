/**
 * Author：tantingting
 * Time：2018/11/5
 * Description：Description
 */
const sourceUrl = 'http://188.131.179.44'
// 导航
const navData = [
    {key: 'home', label: '首页', path: '/', icon: 'icon-home'},
    {key: 'activity', label: '活动汇总', path: '/activity', icon: 'icon-activity'},
    {key: 'leader', label: '领队招募', path: '/leader', icon: 'icon-recruit'},
    {key: 'user', label: '个人中心', path: '/user', icon: 'icon-user'}
]

// 首页活动导航
const activityNavData = [
    {key: 'shengdan', label: '圣诞', path: '/activity/yd', icon: 'icon-shengdan'},
    {key: 'yuandan', label: '元旦', path: '/activity/sd', icon: 'icon-yuandan'},
    {key: 'chunjie', label: '春节', path: '/activity/cj', icon: 'icon-chunjie'},
    {key: 'wuyi', label: '五一', path: '/activity/wy', icon: 'icon-wuyi'},
    {key: 'guoqing', label: '国庆', path: '/activity/gq', icon: 'icon-guoqin'}
]

export {
    sourceUrl,
    navData,
    activityNavData
}
