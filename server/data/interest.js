const dayjs = require('dayjs');

const remainPoint = {
    c: 0,
    m: '',
    d: 13000
}

const ponitRecordList = {
    c: 0,
    m: '',
    d: [
        {
            id: '2232341',
            title: '兑换奖品',
            type: 1,
            value: 300,
            date: dayjs('2019-02-03').valueOf()
        },
        {
            id: '2242341',
            title: '完成任务1',
            type: 2,
            value: 1300,
            date: dayjs('2019-07-03').valueOf()
        },
        {
            id: '2236541',
            title: '完成任务1',
            type: 2,
            value: 4300,
            date: dayjs('2019-04-03').valueOf()
        },
        {
            id: '223421',
            title: '完成任务1',
            type: 2,
            value: 300,
            date: dayjs('2012-08-03').valueOf()
        },
        {
            id: '22343',
            title: '兑换奖品消耗',
            type: 1,
            value: 300,
            date: dayjs('2019-07-03').valueOf()
        },
    ]
}

const pointGiftList = {
    c: 0,
    m: '',
    d: [
        {
            id: '234',
            name: '礼d品111',
            type: 3,
            value: 1322,
            pic: '//qhstaticssl.kujiale.com/newt/35/image/jpeg/1561970467170/ADA31EAB0FA04012298BA9388189350A.jpg',
            position: 242,
            count: 3,
        },
        {
            id: '43234',
            name: '礼品ds111',
            type: 2,
            value: 1322,
            pic: '//qhstaticssl.kujiale.com/newt/35/image/jpeg/1561970467170/ADA31EAB0FA04012298BA9388189350A.jpg',
            position: 242,
            count: 123,
        },
        {
            id: '24334',
            name: 's礼品111',
            type: 3,
            value: 1322,
            pic: '//qhstaticssl.kujiale.com/newt/35/image/jpeg/1561970467170/ADA31EAB0FA04012298BA9388189350A.jpg',
            position: 242,
            count: 0,
        },
        {
            id: '245634',
            name: 'df礼品111',
            type: 1,
            value: 1322,
            pic: '//qhstaticssl.kujiale.com/newt/35/image/jpeg/1561970467170/ADA31EAB0FA04012298BA9388189350A.jpg',
            position: 242,
            count: 123,
        },
    ]
}

module.exports = {
    remainPoint,
    ponitRecordList,
    pointGiftList
}