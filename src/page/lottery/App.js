import React from 'react';
import dayjs from 'dayjs';
import { getLotteryDetail, getPrizeList, lotteryPlay, saveAdress } from './apis/lottery';
import { getUserInfo } from './apis/user';
import { getUserPointCount } from './apis/interest'

import { lotteryTypeMap } from './constants';

import PrizeItem from './components/prizeItem';

import "./App.scss"

// 
const LotteryId = '8274';

class App extends React.Component {
  state = {
    lotteryDetail: {},
    prizeList: [],
    userInfo: {},
    pointCount: null,
    prizeRecord: {},
    isShowSaveAddressModal: false,
    addressInfo: {}
  }
  componentDidMount() {
    this.initLottery();
    this.getUserInfo();
    this.getUserPointCount();
  }
  initLottery() {
    getLotteryDetail(LotteryId).then(data=>{
      this.setState({
        lotteryDetail: data
      })
    })

    getPrizeList(LotteryId).then(data => {
      this.setState({
        prizeList: data
      })
    })
  }
  getUserInfo() {
    getUserInfo().then(data => {
      this.setState({
        userInfo: data
      })
    })
  }
  getUserPointCount() {
    getUserPointCount().then(count => {
      this.setState({
        pointCount: count
      })
    })
  }
  handlePlayLottery = () => {
    lotteryPlay(LotteryId).then(data => {
      this.setState({
        prizeRecord: data,
        isShowSaveAddressModal: data.type === 2 ? true : false
      })
      alert(`恭喜获得：${data.prizeName}${data.type === 2 ? ',请填写收货信息' : ''}`)
    })
  }
  handleInputChange = (e, key) => {
    const { addressInfo } = this.state;
    addressInfo[key] = e.target.value;
    this.setState({
      addressInfo
    })
  }
  handleSubmit = () => {
    const { addressInfo, prizeRecord } = this.state;
    const data = {
      obsRecordId: prizeRecord.recordId,
      name: addressInfo.name,
      mobile: addressInfo.tel,
      address: addressInfo.address
    }
    saveAdress(data).then(() => {
      this.setState({
        isShowSaveAddressModal: false
      })
      alert('提交成功');
    })
  }
  render() {
    const { lotteryDetail, prizeList, pointCount, userInfo, isShowSaveAddressModal } = this.state;
    const { name, lotteryType, startDate, endDate, } = lotteryDetail;
    return (
      <div className="lottery-page">
        <div className="lottery-detail">
          <h3>抽奖详情</h3>
          <div className="name">name: {name}</div>
          <div>抽奖类型：{lotteryType && lotteryTypeMap[lotteryType].title}</div>
          <div>time: {dayjs(startDate).format("M月D日")} - {dayjs(endDate).format("M月D日")}</div>
        </div>
        <div className="lottery-prize">
          <h3>奖品列表</h3>
          {prizeList.map(v => (
            <PrizeItem data={v} />
          ))}
          <button onClick={this.handlePlayLottery}>点击抽奖</button>
          {isShowSaveAddressModal &&
            <div className="save-address-modal">
              <div>收货地址填写</div>
              姓名：<input onChange={(e)=>this.handleInputChange(e,'name')} type="text"/>
              手机：<input onChange={(e)=>this.handleInputChange(e,'tel')} type="text"/>
              地址：<input onChange={(e)=>this.handleInputChange(e,'address')} type="text"/>
              <button onClick={this.handleSubmit}>提交</button>
            </div>
          }
        </div>
        <div className="user-info">
          <span>{userInfo.userType === 2 ? '尊敬的签约客户：' : null}{userInfo.userName}</span>
          <div>您还剩余: {pointCount} 分</div>
        </div>
      </div>
    )
  }
}

export default App;
