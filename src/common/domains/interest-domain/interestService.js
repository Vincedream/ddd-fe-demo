import {
    getUserPointCount,
    getUserPointRecordList,
    getInterestGiftList
} from '@data-source/interest/requestApis';

import PrizeRecord from './entities/pointRecord';
import PointGift from './entities/pointGift';

class InterestService {
    /**
     * 获取用户剩余积分
     */
    static getUserPointCount() {
        return getUserPointCount()
    }

    /**
     * 获取积分记录列表
     */
    static getPointRecordList() {
        return getUserPointRecordList().then(list=>{
            return list.map(item => new PrizeRecord(item))
        })
    }

    /**
     * 获取积分兑换的奖品
     */
    static getInterestGiftList() {
        return getInterestGiftList().then(list => {
            return list.map(item => new PointGift(item))
        })
    }
}

export default InterestService;