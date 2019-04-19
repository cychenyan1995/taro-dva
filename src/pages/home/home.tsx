
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { HomeProps, HomeState } from './home.interface'
import './home.scss'
import MySwiper from '../../components/MySwiper'
import GoodList from '../../components/GoodList/index';

@connect(({ home }) => ({
  ...home,
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
  }

  onReachBottom = () => {

  }

  onPullDownRefresh = () => {
    
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
