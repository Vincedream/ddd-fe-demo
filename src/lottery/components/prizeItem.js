import React from 'react';
import "./prizeItem.scss";

const PrizeItem = (props) => {
    const { prizeName, pic, type } = props.data;
    return (
        <div className="prize-item">
            <div className="img-wrap">
                <img src={pic} alt=""/>
            </div>
            <div className="prize-detail">
                <div className="name">
                    {type === 2 ? <span className="super-prize">超级大奖</span> :''}{prizeName}
                </div>
            </div>
        </div>
    )
}

export default PrizeItem;