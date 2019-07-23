import axios from '@common/util/http';

import { LotteryTranslator, prizeTranslator } from './translators'
export function getLotteryDetail(id) {
    return axios(`/lottery/detail?id=${id}`).then(data => LotteryTranslator(data))
}

export function getPrizeList(id) {
    return axios(`/lottery/prizeList?id=${id}`).then(data => {
        return data.map(item => prizeTranslator(item))
    })
}

export function playLottery(id) {
    return axios({
        method: 'post',
        url: '/lottery/play',
        data: {
            lotteryId: id
        }
    }).then(result => {
        const { recordId, prize } = result;
        return {
            recordId,
            prize: prizeTranslator(prize) 
        }
    })
}

export function savePrizeAddress(data) {
    return axios({
        method: 'post',
        url: '/lottery/address',
        data: {
            obsRecord: data.recordId,
            name: data.name,
            mobile: data.phoneNumber,
            address: data.address
        }
    })
}