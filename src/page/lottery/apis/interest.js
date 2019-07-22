import axios from '@common/util/http';

export function getUserPointCount() {
    return axios('/interest/point')
}