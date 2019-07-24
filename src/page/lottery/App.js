import React from 'react';

import { UserService, InterestService, LotteryService } from './services';

import User from '@domain/user-domain/entities/user';
import Lottery from '@domain/lottery-domain/entities/lottery'
import Prize from '@domain/lottery-domain/entities/prize'

import { SIGN_USER_TYPE } from '@constants/user';

import PrizeItem from './components/prizeItem';

import "./App.scss"

// 本次活动id
const LotteryId = '8274';

class App extends React.Component {
  state = {
    user: new User(), // 个人信息
    pointCount: null, // 剩余积分
    lottery: new Lottery(), // 抽奖活动详情
    prizeList: [], // 奖品列表
    recordId: '', // 中奖记录的id
    gainPrize: new Prize(), // 抽奖获得的的奖品
    isShowSaveAddressModal: false, // 是否展示地址编写modal
    addressInfo: {}, // 用户input地址信息
  }
  componentDidMount() {
    this.initLottery();
    this.getUserInfo();
    this.getUserPointCount();
  }

  // 初始化抽奖
  initLottery() {
    // 获取活动详情
    LotteryService.getLotteryDetail(LotteryId).then(lottery => {
      this.setState({
        lottery
      })
    })

    // 获取奖品列表
    LotteryService.getPrizeList(LotteryId).then(list => {
      this.setState({
        prizeList: list
      })
    })
  }

  // 获取用户信息
  getUserInfo() {
    UserService.getUserDetail().then(user => {
      this.setState({
        user
      })
    });
  }

  // 获取用户积分
  getUserPointCount() {
    InterestService.getUserPointCount().then(count => {
      this.setState({
        pointCount: count
      })
    })
  }

  // 触发抽奖
  handlePlayLottery = () => {
    LotteryService.playLottery(LotteryId).then(result => {
      const { recordId, prize } = result;
      this.setState({
        recordId,
        gainPrize: prize,
        isShowSaveAddressModal: true
      })
      alert(`恭喜获得：${prize.name},请填写收货信息}`)
    })
  }

  // 监听输入变化
  handleInputChange = (e, key) => {
    const { addressInfo } = this.state;
    addressInfo[key] = e.target.value;
    this.setState({
      addressInfo
    })
  }

  // 提交地址信息
  handleSubmit = () => {
    const { addressInfo, recordId } = this.state;
    const data = {
      recordId,
      name: addressInfo.name,
      phoneNumber: addressInfo.phoneNumber,
      address: addressInfo.address
    }
    LotteryService.savePrizeAddress(data).then(() => {
      this.setState({
        isShowSaveAddressModal: false
      })
      alert('提交成功');
    })
  }

  render() {
    const { user, lottery, prizeList, pointCount, isShowSaveAddressModal } = this.state;
    return (
      <div className="lottery-page">
        <div className="lottery-detail">
          <h3>抽奖详情</h3>
          <div className="name">name: {lottery.name}</div>
          <div>抽奖类型：{lottery.getLotteryType()}</div>
          <div>time: {lottery.getLotteryTimeScope()}</div>
        </div>
        <div className="lottery-prize">
          <h3>奖品列表</h3>
          {prizeList.map(v => (
            <PrizeItem prize={v} />
          ))}
          <button onClick={this.handlePlayLottery}>点击抽奖</button>
          {isShowSaveAddressModal &&
            <div className="save-address-modal">
              <div>收货地址填写</div>
              姓名：<input onChange={(e)=>this.handleInputChange(e,'name')} type="text"/>
              手机：<input onChange={(e)=>this.handleInputChange(e,'phoneNumber')} type="text"/>
              地址：<input onChange={(e)=>this.handleInputChange(e,'address')} type="text"/>
              <button onClick={this.handleSubmit}>提交</button>
            </div>
          }
        </div>
        <div className="user-info">
          <span>{user.type === SIGN_USER_TYPE ? `尊敬的${user.getUserTypeTitle()}：` : null}{user.name}</span>
          <div>您还剩余: {pointCount} 分</div>
        </div>
      </div>
    )
  }
}

export default App;
