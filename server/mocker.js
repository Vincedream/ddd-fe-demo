const { goodsListData } = require('./data/goods');
const { userInfo } = require('./data/user');
const { remainPoint, ponitRecordList, pointGiftList } = require('./data/interest');
const { lotteryDetail, lotteryPrizeList, playLotteryResult, saveAddressResult } = require('./data/lottery');

module.exports = {
    // goods API
    // 获取商品列表
    'GET /goods/list'(req, res) { return res.json(goodsListData) },

    // user API
    // 获取用户信息详情
    'GET /user/detail'(req, res) { return res.json( userInfo ) },

    // ponit API

    // 获取用户剩余积分
    'GET /interest/point'(req, res) { return res.json( remainPoint ) },
    // 获取用户积分记录数据
    'GET /interest/pointRecord'(req, res) { console.log(ponitRecordList); return res.json( ponitRecordList ) },
    // 获取积分兑换奖品
    'GET /interest/gift'(req, res) { return res.json( pointGiftList ) },
    
    // lottery API

    // 获取该抽奖活动的详情
    'GET /lottery/detail'(req, res) { return res.json( lotteryDetail ) },
    // 获取奖品列表
    'GET /lottery/prizeList'(req, res) { return res.json( lotteryPrizeList ) },
    // 触发抽奖
    'POST /lottery/play'(req, res) { return res.json( playLotteryResult ) },
    // 填写奖品收货地址
    'POST /lottery/address'(req, res) { return res.json( saveAddressResult ) }
};