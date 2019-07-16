const { goodsListData } = require('./data/goods');
const { userInfo } = require('./data/user');
const { remainPoint, ponitRecordList, pointGiftList } = require('./data/point');
const { lotteryDetail, lotteryPrizeList, playLotteryResult, saveAddressResult } = require('./data/lottery');

module.exports = {
    'GET /goods/list'(req, res) { return res.json({ goodsListData }) },

    // user API
    'GET /user/detail'(req, res) { return res.json({ userInfo }) },

    // ponit API
    'GET /point/remain'(req, res) { return res.json({ remainPoint }) },
    'GET /point/list'(req, res) { return res.json({ ponitRecordList }) },
    'GET /point/gift'(req, res) { return res.json({ pointGiftList }) },
    
    // lottery API
    'GET /lottery/detail'(req, res) { return res.json({ lotteryDetail }) },
    'GET /lottery/prizeList'(req, res) { return res.json({ lotteryPrizeList }) },
    'POST /lottery/play'(req, res) { return res.json({ playLotteryResult }) },
    'POST /lottery/address'(req, res) { return res.json({ saveAddressResult }) }
};