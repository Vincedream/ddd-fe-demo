import dayjs from 'dayjs';


export function LotteryTranslator({
    id,
    name,
    lotteryType,
    startDate,
    endDate
}) {
    return {
        id,
        name,
        type: lotteryType,
        startDate: dayjs(startDate),
        endDate: dayjs(endDate)
    }
}

export function prizeTranslator({
    id,
    prizeName,
    type,
    pic,
}) {
    return {
        id,
        name: prizeName,
        type,
        mainPicUrl: pic
    }
}
