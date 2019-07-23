export function goodsTranslator({
    id,
    goodsName,
    price,
    status,
    activityType,
    desc,
    brand,
    relatedModelId,
    mainPic,
    tag,
    relatedModelImg
}) {
    return {
        id,
        name: goodsName,
        price: (price / 100).toFixed(2),
        status,
        activityType,
        description: desc,
        brandName: brand,
        mainPicUrl: mainPic,
        tags: tag
    }
}