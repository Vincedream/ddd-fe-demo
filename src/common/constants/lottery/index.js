// lottery
export const DAYLY_LOTTERY_ID = 1;
export const HOLIDAY_LOTTERY_ID = 2;
export const POINT_LOTTERT_ID = 3;

export const lotteryTypeMap = {
    [DAYLY_LOTTERY_ID]: {
        title: '日常抽奖'
    },
    [HOLIDAY_LOTTERY_ID]: {
        title: '假日抽奖'
    },
    [POINT_LOTTERT_ID]: {
        title: '积分抽奖'
    }
}

// prize
export const SUPER_PRIZE_TYPE = 2; // 超级大奖type