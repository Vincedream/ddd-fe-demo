import React, { Component } from 'react'
import * as api from '../apis/user';
import "./Nav.scss";

export default class Nav extends Component {
    state = {
        userInfo: {}
    }
    componentDidMount() {
        api.getUserInfo().then( data => {
            this.setState({
                userInfo: data
            })
        })
    }
    render() {
        const { userInfo } = this.state;
        // dom 展示层不应该书写大量逻辑判断，当无注释时，很难看清所以的判断条件
        return (
            <div className="nav">
                <div>DDD 商城</div>
                <div className="user">
                    <img className={`${userInfo.vip ? 'vip' : ''}`} src={userInfo.avatar} alt=""/>
                    <span>{userInfo.userType === 2 ? '尊敬的签约客户：' : null}{userInfo.userName}</span>
                </div>
            </div>
        )
    }
}
