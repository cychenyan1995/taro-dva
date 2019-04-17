
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { HomeProps, HomeState } from './home.interface'
import './home.scss'
import MySwiper from '../../components/MySwiper'

@connect(({ home }) => ({
    ...home,
}))
class Home extends Component<HomeProps,HomeState > {
  config:Config = {
    navigationBarTitleText: '首页'
  }
  constructor(props: HomeProps) {
    super(props)
  }


  componentDidMount() {
    // const { dispatch } = this.props
    // dispatch({
    //   type: 'home/load',
    //   payload: ''
    // })
  }

  render() {
    const { banner } = this.props
    return (
      <View className='home-page'> 
          <MySwiper banner={banner}></MySwiper>
          <View className="nav-list">
  sss
          </View>
      </View>
    )
  }
}

export default Home
