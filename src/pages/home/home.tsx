
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { HomeProps, HomeState } from './home.interface'
import './home.scss'
import MySwiper from '../../components/MySwiper'
import GoodList from '../../components/GoodList/index';

@connect(({ home, common }) => ({
  ...home,
  ...common
}))
class Home extends Component<HomeProps, HomeState> {
  config: Config = {
    navigationBarTitleText: '首页'
  }
  constructor(props: HomeProps) {
    super(props)
  }

  // 生命周期函数

  componentDidMount = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'home/load',
      payload: {}
    })
    dispatch({
      type: 'home/product',
      payload: {}
    })

    // 设置小红点
    Taro.setTabBarBadge({
      index: 0,
      text: '1'
    })
  }

  //到达独步触发的函数
  onReachBottom = () => {
    // 先更改state中的page
    const {dispatch} = this.props
    dispatch({
      type: 'home/save',
      payload: {
        // 从props中取出值 mapStateToProps
        page : this.props.page + 1
      }
    })
    // 再调用异步方法
    dispatch({
      type: 'home/product',
      payload: {}
    })
  }

  onPullDownRefresh = () => {
    
  }

  // 右上角的转发按钮
  onShareAppMessage () {
    return {
      title: '基于Taro框架开发的时装衣橱',
      path: '/page/home/home'
    }
  }

  render() {
    const { banner, products_list } = this.props
    return (
      <View className='home-page'>
        <MySwiper banner={banner}></MySwiper>
        <View className="nav-list">
        </View>
        <Text className='recommend'>为你推荐</Text>
        <GoodList productList={products_list}></GoodList>
      </View>
    )
  }
}

export default Home
