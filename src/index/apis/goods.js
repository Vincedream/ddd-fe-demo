import axios from '@common/util/http';

export function getGoodsList() {
    return axios('/goods/list');
}