// user
export const NORMAL_USER_TYPE = 1; // 普通客户 type
export const SIGN_USER_TYPE = 2; // 签约客户 type

export const USER_TYPE_MAP = {
    [NORMAL_USER_TYPE]: {
        title: '普通用户'
    },
    [SIGN_USER_TYPE]: {
        title: '签约用户'
    }
}

// vip
export const NEED_REMIND_VIP_LACK_DAYS = 6; // 需要提醒充值剩余天数