import React from 'react';
import Nav from './components/Nav';
import GoodsItem from './components/GoodsItem';

import { GoodsService } from './services';

class App extends React.Component {
  state = {
    goodsList: [] // 商品列表
  }
  componentDidMount() {
    // 获取商品列表
    GoodsService.getGoodsList().then(list=>{
      this.setState({
        goodsList: list
      })
    })
  }
  render() {
    const { goodsList } = this.state;
    return (
      <div>
        <Nav />
        <h3>商品列表</h3>
        <div className="goods-list">
          {goodsList.map(data => {
            return (
              <GoodsItem goods={data} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;
