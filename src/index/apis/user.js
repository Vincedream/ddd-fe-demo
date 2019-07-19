import axios from '@common/util/http';

// 这里存在的问题是，当用户中心页面也会用到这个接口，重复写，一是违反重复代码的规则，二是假设后续有变动，需要在多个地方更改
export function getUserInfo() {
    return axios('/user/detail');
}