/**
 * 抽奖活动实体
 */
import dayjs from 'dayjs'
import { lotteryTypeMap } from '@constants/lottery'
class Lottery {
    constructor(lottery={}) {
        this.id = lottery.id
        this.name = lottery.name
        this.type = lottery.type
        this.startDate = lottery.startDate
        this.endDate = lottery.endDate
    }
    // 获取活动时间范围
    getLotteryTimeScope() {
        return `${dayjs(this.startDate).format("M月D日")} - ${dayjs(this.endDate).format("M月D日")}`
    }

    // 获取活动类型描述
    getLotteryType() {
        return this.type && lotteryTypeMap[this.type].title
    }
}

export default Lottery