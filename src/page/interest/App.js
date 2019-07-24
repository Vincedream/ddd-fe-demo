import React from 'react';

import { UserService, InterestService } from './services'
import User from '@domain/user-domain/entities/user';
import { SIGN_USER_TYPE } from '@constants/user';

import PointRecordItem from './components/PointRecordItem';
import GiftItem from './components/GiftItem';

import "./App.scss";

class App extends React.Component {
  state = {
    remainPoint: null, // 剩余积分
    pointRecordList: [], // 积分记录列表
    interestGiftList: [], // 积分礼品列表
    user: new User() // 个人信息
  }
  componentDidMount() {
    this.getUserPointCount();
    this.getUserPointRecordList();
    this.getInterestGiftList();
    this.getUserInfo();
  }

  // 获取剩余积分
  getUserPointCount() {
    InterestService.getUserPointCount().then(count => {
      this.setState({
        remainPoint: count
      })
    })
  }

  // 获取个人信息
  getUserInfo() {
    UserService.getUserDetail().then(user => {
      this.setState({
        user
      })
    });
  }

  // 获取积分记录列表
  getUserPointRecordList() {
    InterestService.getPointRecordList().then(list => {
      this.setState({
        pointRecordList: list
      });
    })
  }

  // 获取权益积分列表
  getInterestGiftList() {
    InterestService.getInterestGiftList().then(list => {
      this.setState({
        interestGiftList: list
      })
    })
  }
  render() {
    const { user, remainPoint, pointRecordList, interestGiftList } = this.state;
    return (
      <div className="interest-page">
       <h3>积分中心</h3>
       <div>{user.type === SIGN_USER_TYPE ? `尊敬的${user.getUserTypeTitle()}：` : null}{user.name}</div>
        <div>剩余积分： {remainPoint}</div>
        <h3>积分记录</h3>
        <div className="point-record">
          {pointRecordList.map(v=>(
            <PointRecordItem record={v} />
          ))}
        </div>
        <h3>积分兑换</h3>
        <div className="point-exchange">
          {interestGiftList.map(v=>(
            <GiftItem gift={v} />
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
