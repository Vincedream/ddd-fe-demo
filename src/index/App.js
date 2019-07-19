import React from 'react';
import { getGoodsList } from './apis/goods';
import Nav from './components/Nav';
import GoodsItem from './components/GoodsItem';

class App extends React.Component {
  state = {
    goodsList: []
  }
  componentDidMount() {
    getGoodsList().then(data => {
      console.log(data)
      this.setState({
        goodsList: data
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
          {goodsList.map(v => {
            return (
              <GoodsItem detail={v} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;
