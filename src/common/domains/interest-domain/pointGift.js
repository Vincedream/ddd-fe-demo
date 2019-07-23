/**
 * 积分奖品类
 */

import { IS_NEED_VIP_GIFT_TYPE } from '@constants/interest';

class PointGift {
    constructor(gift = {}) {
        this.id = gift.id
        this.name = gift.name
        this.type = gift.type
        this.needPointValue = gift.needPointValue
        this.mainPicUrl = gift.mainPicUrl
        this.remainCount = gift.remainCount
    }

    // 是否为 vip
    isNeedVip() {
        return this.type === IS_NEED_VIP_GIFT_TYPE
    }

    // 是否缺货
    isOutStock() {
        return this.remainCount <= 0;
    }
}

export default PointGift;