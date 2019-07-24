import React from 'react'
import "./PointRecordItem.scss"

export default function PointRecordItem(props) {
    const { record } = props
    return (
        <div className="point-record-item">
            <span>{record.getDaysFromNow()} 天前：</span>
            <span>{record.description}</span>
            <span>{record.isSpendPoint() ? '消耗' : '获得'}</span>
            <span>{record.spendPointValue}积分</span>
        </div>
    )
}