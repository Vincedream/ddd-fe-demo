import React, { Component } from 'react'
import { UserService } from '../services';
import User from '@domain/user-domain/entities/user';
import { SIGN_USER_TYPE } from '@constants/user';
import "./Nav.scss";

export default class Nav extends Component {
    state = {
        user: new User()
    }
    componentDidMount() {
        UserService.getUserDetail().then(user => {
            this.setState({
                user
            })
        });
    }
    render() {
        const { user } = this.state;
        return (
            <div className="nav">
                <div>DDD 商城</div>
                <div className="user">
                    <img className={`${user.isVip ? 'vip' : ''}`} src={user.avatarUrl} alt=""/>
                    <span>{user.type === SIGN_USER_TYPE ? `尊敬的${user.getUserTypeTitle()}：` : null}{user.name}</span>
                </div>
            </div>
        )
    }
}
