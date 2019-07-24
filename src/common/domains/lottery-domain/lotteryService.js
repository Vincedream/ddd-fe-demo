import {
    getLotteryDetail,
    getPrizeList,
    playLottery,
    savePrizeAddress
} from '@data-source/lottery/requestApis';

import Prize from './entities/prize';
import Lottery from './entities/lottery';


class LotteryService {
    /**
     * 获取本次抽奖活动详情
     * @param {string} id 活动id
     */
    static getLotteryDetail(id) {
        return getLotteryDetail(id).then(lottery => new Lottery(lottery))
    }

    /**
     * 获取本次抽奖活动的奖品列表
     * @param {string} id 抽奖活动id
     */
    static getPrizeList(id) {
        return getPrizeList(id).then(list => {
            return list.map(item => new Prize(item));
        })
    }

    /**
     * 进行抽奖
     * @param {string} id 抽奖活动id
     */
    static playLottery(id) {
        return playLottery(id).then(result => {
            const { recordId, prize } = result;
            return {
                recordId,
                prize: new Prize(prize)
            }
        })
    }

    /**
     * 填写中奖的收货地址信息
     * @param {Object} param0 中奖记录id以及地址信息
     */
    static savePrizeAddress({ recordId, name, phoneNumber, address }) {
        const data = {
            recordId,
            name,
            phoneNumber,
            address
        }
        return savePrizeAddress(data)
    }
}

export default LotteryService