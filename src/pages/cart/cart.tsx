
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Map, Button } from '@tarojs/components';
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { CartProps, CartState } from './cart.interface'
import './cart.scss'
import address from '../../images/user/address.png'
// import { } from '../../components'

// @connect(({ cart }) => ({
//     ...cart,
// }))

class Cart extends Component<CartProps, CartState> {
  config: Config = {
    navigationBarTitleText: '标题'
  }
  constructor(props: CartProps) {
    super(props)
    this.state = {
      latitude: 23.099994,
      longitude: 113.324520
    }
  }

  componentDidMount() {

  }

  getCurLocation = () => {
    Taro.getLocation({
      type: 'wgs84',
      success: function (res) {
        this.setState({
          latitude:  res.latitude,
          longitude: res.longitude
        })
        // var latitude = res.latitude
        // var longitude = res.longitude
        // var speed = res.speed
        // var accuracy = res.accuracy
      }
    })
  }

  render() {
    let markers = [{
      iconPath: address,
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50,
      title: 'cy'
    }]

    let polyline = [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }]
    const {longitude, latitude} = this.state

    return (
      <View className='cart-wrap'>
        <Map
          latitude={latitude}
          longitude={longitude}
          markers={markers}
          polyline={polyline}
          show-location
          key='ENOBZ-ZY36Q-4JK5Q-GB2BU-T534S-NQB4O'
        ></Map>
        <Button onClick={this.getCurLocation}>获取当前位置</Button>
      </View>
    )
  }
}

export default Cart
