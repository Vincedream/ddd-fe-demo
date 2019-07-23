import React from 'react'
import "./GiftItem.scss"

export default function GiftItem(props) {
    const { gift } = props;
    return (
        <div className="gift-item">
            <div className="img-wrap">
                <img src={gift.mainPicUrl} alt=""/>
                {gift.isNeedVip() && <span className="vip-exchange">会员可兑换</span> }
            </div>
            <div className="gift-detail">
                <div>{gift.name}</div>
                <div>消耗{gift.needPointValue}积分</div>
                {gift.isOutStock()
                ? <div>等待补货</div>
                : <div>{gift.remainCount < 5 && '最后'}剩余{gift.remainCount}件</div>
                }
            </div>
        </div>
    )
}