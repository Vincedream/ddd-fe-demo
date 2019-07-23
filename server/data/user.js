const dayjs = require('dayjs');

const userInfo = {
    c: 0,
    m: '',
    d: {
        userId: '2323',
        email: 'artistcoder@163.com',
        userName: 'huajinbo',
        tel: '13982837472',
        userType: 2,
        vip: true,
        vipValidityDate: dayjs('2019-07-27').valueOf(),
        avatar: 'https://qhyxpicoss.kujiale.com/avatars/58.jpg'
    }
}

module.exports = {
    userInfo
}