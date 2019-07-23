import React from 'react';
import "./GoodsItem.scss";

const GoodsItem = (props) => {
    const { goods } = props;
    return(
        <div className="goods-item">
            <div className="main-info">
                <img className="goods-img" src={goods.mainPicUrl} alt=""/>            
                <div className="goods-name">{goods.name}</div>
                {goods.isOutStock() && <span className="out-stock">已无货</span>}
            </div>
            <div className="detail-info">
                {goods.isDiscountGoods()
                ? <span className="price discount">特价：{goods.price} 元</span>
                : <span className="price">价格：{goods.price} 元</span>}
                <div className="tag-wrap">
                    {goods.getShowInListTags().map(v=>{
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