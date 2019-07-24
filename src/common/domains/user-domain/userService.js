import { getUserDetail } from '@data-source/user/requestApis';
import User from './entities/user';

class UserService {
    /**
     * 获取用户信息详情
     */
    static getUserDetail() {
        return getUserDetail().then(user => {
            return new User(user);
        })
    }
}

export default UserService;