import axios from '@common/util/http';

export function getUserInfo() {
    return axios('/user/detail');
}