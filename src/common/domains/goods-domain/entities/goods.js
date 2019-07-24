/**
 * 商品类
 */
import { OUT_STACK_STATUS, SHOW_IN_LIST_TAG_TYPE, DISCOUNT_ACTIVITY_TYPE } from '@constants/goods';

export default class Goods {
    constructor(goods = {}) {
        this.id = goods.id
        this.name = goods.name
        this.price = goods.price
        this.status = goods.status
        this.activityType = goods.activityType
        this.description = goods.description
        this.brandName = goods.brandName
        this.mainPicUrl = goods.mainPicUrl
        this.tags = goods.tags
    }

    isOutStock() {
        return this.status && this.status === OUT_STACK_STATUS;
    }

    isDiscountGoods() {
        return this.activityType === DISCOUNT_ACTIVITY_TYPE;
    }

    getShowInListTags() {
        return this.tags.filter(v=> v.type === SHOW_IN_LIST_TAG_TYPE);
    }
}