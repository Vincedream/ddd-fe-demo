import {
    getLotteryDetail,
    getPrizeList,
    playLottery,
    savePrizeAddress
} from '@data-source/lottery/requestApis';

import Prize from './prize';
import Lottery from './lottery';


class LotteryService {
    /**
     * 
     * @param {string} id 活动id
     */
    static getLotteryDetail(id) {
        return getLotteryDetail(id).then(lottery => new Lottery(lottery))
    }

    static getPrizeList(id) {
        return getPrizeList(id).then(list => {
            return list.map(item => new Prize(item));
        })
    }

    /**
     * 
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
     * 
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