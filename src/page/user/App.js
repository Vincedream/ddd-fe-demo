import React from 'react';

import { UserService, InterestService } from './services';
import User from '@domain/user-domain/entities/user';
import { SIGN_USER_TYPE } from '@constants/user';

import "./App.scss"

class App extends React.Component {
  state = {
    pointCount: null,
    user: new User()
  }
  componentDidMount() {
    this.getUserInfo();
    this.getUserPonitCount();
  }
  // 获取用户信息
  getUserInfo = () => {
    UserService.getUserDetail().then(user => {
      this.setState({
        user
      })
    });
  }
  // 获取用户积分
  getUserPonitCount = () => {
    InterestService.getUserPointCount().then(count => {
      this.setState({
        pointCount: count
      })
    })
  }
  render() {
    const { pointCount, user } = this.state;
    return (
      <div className="user-page">
        <h3>个人中心</h3>
        <div className="user">
          <div className="info">
            <div>{user.type === SIGN_USER_TYPE ? `尊敬的${user.getUserTypeTitle()}：` : null}{user.name}</div>
            <div>绑定手机号： {user.phoneNumber}</div>
            <div>绑定email： {user.email}</div>
          </div>
          <div className="avatar">
            <img className={`${user.isVip ? 'vip' : ''}`} src={user.avatarUrl} alt=""/>
            { user.isNeedRemindUserVipLack() && user.isVip
              ? <div>会员还有{user.getVipRemainDays()}天</div>
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
