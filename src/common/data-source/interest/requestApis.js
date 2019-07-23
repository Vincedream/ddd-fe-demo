import axios from '@common/util/http';

import { pointRecordTranslator, pointGiftTranslator } from './translators'

export function getUserPointCount() {
    return axios('/interest/point')
}

export function getUserPointRecordList() {
    return axios('/interest/pointRecord').then(data => {
        return data.map(item => pointRecordTranslator(item));
    })
}

export function getInterestGiftList() {
    return axios('/interest/gift').then(data => {
        return data.map(item => pointGiftTranslator(item))
    })
}