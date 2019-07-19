import React from 'react'
import dayjs from 'dayjs';
import "./PointRecordItem.scss"

export default function PointRecordItem(props) {
    const { title, type, value, date } = props.data
    console.log(props)
    return (
        <div className="point-record-item">
            <span>{dayjs(new Date()).diff(date, 'day')} 天前：</span>
            <span>{title}</span>
            <span>{type === 1 ? '消耗' : '获得'}</span>
            <span>{value}积分</span>
        </div>
    )
}