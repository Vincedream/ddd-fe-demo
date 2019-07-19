import React from 'react';
import dayjs from 'dayjs';
import { getUserInfo } from './apis/user';
import { getUserPointCount } from './apis/interest';

import "./App.scss"

class App extends React.Component {
  state = {
    userInfo: {},
    pointCount: null
  }
  componentDidMount() {
    this.getUserInfo();
    this.getUserPonitCount();
  }
  getUserInfo = () => {
    getUserInfo().then(data => {
      this.setState({
        userInfo: data
      })
    })
  }
  getUserPonitCount = () => {
    getUserPointCount().then(count => {
      this.setState({
        pointCount: count
      })
    })
  }
  render() {
    const { userInfo, pointCount } = this.state;
    const { avatar, userName, userType, tel, vip, email, vipValidityDate } = userInfo;
    // console.log()
    const remainDay = dayjs(vipValidityDate).diff(new Date(), 'day');
    return (
      <div className="user-page">
        <h3>个人中心</h3>
        <div className="user">
          <div className="info">
            <div>{userType === 2 ? '尊敬的签约客户：' : null}{userName}</div>
            <div>绑定手机号： {tel}</div>
            <div>绑定email： {email}</div>
          </div>
          <div className="avatar">
            <img className={`${vip ? 'vip' : ''}`} src={avatar} alt=""/>
            { remainDay < 6 && vip
            ? <div>会员还有{remainDay}天</div>
            : ''
            }
          </div>
        </div>

        <div className="lottery-tips">
          <div>剩余积分：{pointCount} 分</div>
          <a href="/interest.html">前往积分权益中心 ></a>
        </div>
      </div>
    );
  }
}

export default App;
