/**
 * 奖品实体
 */
import { SUPER_PRIZE_TYPE } from '@constants/lottery';

class Prize {
    constructor(prize={}) {
        this.id = prize.id
        this.name = prize.name
        this.type = prize.type
        this.mainPicUrl = prize.mainPicUrl
    }

    isSuperPrize() {
        return this.type === SUPER_PRIZE_TYPE;
    }

}


export default Prize