import axios from '@common/util/http';

export function getLotteryDetail(id) {
    return axios(`/lottery/detail?id=${id}`)
}

export function getPrizeList(id) {
    return axios(`/lottery/prizeList?id=${id}`)
}

export function lotteryPlay(id) {
    return axios({
        method: 'post',
        url: '/lottery/play',
        data: {
            lotteryId: id
        }
    })
}

export function saveAdress(data) {
    console.log(data);
    return axios({
        method: 'post',
        url: '/lottery/address',
        data
    })
}