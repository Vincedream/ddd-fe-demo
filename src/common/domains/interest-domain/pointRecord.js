/**
 * 积分记录类
 */
import dayjs from 'dayjs';
import { SPEND_POINT_TYPE } from '@constants/interest';

class PointRecord {
    constructor(record={}) {
        this.id = record.id
        this.description = record.description
        this.type = record.type
        this.spendPointValue = record.spendPointValue
        this.date = record.date
    }

    // 获取记录时间距离今天的天数
    getDaysFromNow() {
      return dayjs(new Date()).diff(this.date, 'day')
    }

    // 是否为获得积分，否则为消耗积分
    isSpendPoint() {
        return this.type === SPEND_POINT_TYPE
    }
}

export default PointRecord