import React from 'react';
import { getUserPointCount, getUserPointRecord, getInterestGift } from './apis/interest';
import { getUserInfo } from './apis/user';
import PointRecordItem from './components/PointRecordItem';
import GiftItem from './components/GiftItem';

import "./App.scss";

class App extends React.Component {
  state = {
    remainPoint: null,
    pointRecordList: [],
    interestGiftList: [],
    userInfo: {}
  }
  componentDidMount() {
    this.getUserPointCount();
    this.getUserPointRecordList();
    this.getInterestGiftList();
    this.getUserInfo();
  }
  getUserPointCount() {
    getUserPointCount().then(count => {
      this.setState({
        remainPoint: count
      })
    })
  }
  getUserInfo() {
    getUserInfo().then(data=>{
      this.setState({
        userInfo: data
      })
    })
  }
  getUserPointRecordList() {
    getUserPointRecord().then(data => {
      this.setState({
        pointRecordList: data
      });
    })
  }
  getInterestGiftList() {
    getInterestGift().then(data => {
      this.setState({
        interestGiftList: data
      })
    })
  }
  render() {
    const { remainPoint, pointRecordList, interestGiftList, userInfo } = this.state;
    return (
      <div className="interest-page">
       <h3>积分中心</h3>
       <div>{userInfo.userType === 2 ? '尊敬的签约客户：' : null}{userInfo.userName}</div>
        <div>剩余积分： {remainPoint}</div>
        <h3>积分记录</h3>
        <div className="point-record">
          {pointRecordList.map(v=>(
            <PointRecordItem data={v} />
          ))}
        </div>
        <h3>积分兑换</h3>
        <div className="point-exchange">
          {interestGiftList.map(v=>(
            <GiftItem data={v} />
          ))}
        </div>
        <div className="lottery-tips">
          <a href="/lottery.html">积分抽大奖></a>
        </div>
      </div>
    );
  }
}

export default App;
