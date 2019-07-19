import React from 'react';
import "./GoodsItem.scss";

const GoodsItem = (props) => {
    const {
        goodsName,
        price,
        status,
        activityType,
        mainPic,
        tag // 该字段为后端返回的数组，tag容易被视为单个tag，数组应该是tags
    } = props.detail || {}
    // 数据处理不应该放在视图层
    const filterTag = tag.filter(v=> v.type !== 2);
    // dom 展示层不应该书写大量逻辑判断，逻辑代码与dom代码混在一起结构不清晰
    return(
        <div className="goods-item">
            <div className="main-info">
                <img className="goods-img" src={mainPic} alt=""/>            
                <div className="goods-name">{goodsName}</div>
                {/* 当 status 为2时，表示无货 */}
                {status === 2
                ? <span className="out-stock">已无货</span>
                : null}
            </div>
            <div className="detail-info">
                {/* 当 activityType 为 3 表示该商品正在参与活动，为特价商品 */}
                {activityType === 3
                ? <span className="price discount">特价：{price / 100} 元</span>
                : <span className="price">价格：{price / 100} 元</span>}
                <div className="tag-wrap">
                    {filterTag.map(v=>{
                        return (
                            <span className="tag">{v.title}</span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default GoodsItem;