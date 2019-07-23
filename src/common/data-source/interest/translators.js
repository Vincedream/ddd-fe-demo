import dayjs from 'dayjs';

export function pointRecordTranslator({
    id,
    title,
    type,
    value,
    date
}) {
    return {
        id,
        description: title,
        type,
        spendPointValue: value,
        date: dayjs(date)
    }
}

export function pointGiftTranslator({
    id,
    name,
    type,
    value,
    pic,
    position,
    count
}) {
    return {
        id,
        name,
        type,
        needPointValue: value,
        mainPicUrl: pic,
        remainCount: count
    }
}