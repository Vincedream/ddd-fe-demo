import axios from '@common/util/http';

export function getUserPointCount() {
    return axios('/interest/point')
}

export function getUserPointRecord() {
    return axios('/interest/pointRecord')
}

export function getInterestGift() {
    return axios('/interest/gift')
}