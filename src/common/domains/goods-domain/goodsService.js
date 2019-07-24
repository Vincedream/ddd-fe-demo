import { getGoodsList } from '@data-source/goods/requestApis';
import Goods from './entities/goods';

class GoodsService {

    /**
     * 获取商品列表
     */
    static getGoodsList() {
        return getGoodsList().then(list => {
            return list.map(item => new Goods(item))
        })
    }
}

export default GoodsService;