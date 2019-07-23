/**
 * 用户类
 */
import { NEED_REMIND_VIP_LACK_DAYS, USER_TYPE_MAP } from '@constants/user';
import dayjs from 'dayjs'

class User {
    constructor(user = {}) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.phoneNumber = user.phoneNumber;
        this.type = user.type;
        this.isVip = user.isVip;
        this.vipValidityDate = dayjs(user.vipValidityDate);
        this.avatarUrl = user.avatarUrl;
    }

    // 获取剩余vip天数
    getVipRemainDays() {
        return this.vipValidityDate.diff(new Date(), 'day');
    }

    // 是否需要提醒用户vip天数不足
    isNeedRemindUserVipLack() {
        return this.getVipRemainDays() <= NEED_REMIND_VIP_LACK_DAYS;
    }

    // 获取用户title
    getUserTypeTitle() {
        return this.type && USER_TYPE_MAP[this.type].title;
    }
}

export default User