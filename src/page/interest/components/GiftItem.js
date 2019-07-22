import React from 'react'
import "./GiftItem.scss"

export default function GiftItem(props) {
    const { name, type, value, pic, count } = props.data;
    return (
        <div className="gift-item">
            <div className="img-wrap">
                <img src={pic} alt=""/>
                {type === 3 && <span className="vip-exchange">会员可兑换</span> }
            </div>
            <div className="gift-detail">
                <div>{name}</div>
                <div>消耗{value}积分</div>
                {count > 0
                ? <div>{count < 5 && '最后'}剩余{count}件</div>
                : <div>等待补货</div>
                }
            </div>
        </div>
    )
}