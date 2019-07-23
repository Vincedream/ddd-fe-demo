import React from 'react';
import "./prizeItem.scss";

const PrizeItem = (props) => {
    const { prize } = props;
    return (
        <div className="prize-item">
            <div className="img-wrap">
                <img src={prize.mainPicUrl} alt=""/>
            </div>
            <div className="prize-detail">
                <div className="name">
                    {prize.isSuperPrize() ? <span className="super-prize">超级大奖</span> :''}{prize.name}
                </div>
            </div>
        </div>
    )
}

export default PrizeItem;