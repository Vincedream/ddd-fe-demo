import axios from '@common/util/http';

import { userTranslator } from './translators'

export function getUserDetail() {
    return axios('/user/detail').then(data => userTranslator(data));
}