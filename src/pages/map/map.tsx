
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Map, Button } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { MapProps, MapState } from './map.interface'
import address from '../../images/user/address.png'
import './map.scss'
// import { } from '../../components'

// @connect(({ map }) => ({
//     ...map,
// }))

class MapTem extends Component<MapProps, MapState> {
  config: Config = {
    navigationBarTitleText: '标题'
  }
  constructor(props: MapProps) {
    super(props)
    this.state = {
      latitude: 23.099994,
      longitude: 113.324520
    }
  }

  getCurLocation = () => {
    Taro.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setState({
          latitude: res.latitude,
          longitude: res.longitude
        })

        Taro.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 28
        })
        // var latitude = res.latitude
        // var longitude = res.longitude
        // var speed = res.speed
        // var accuracy = res.accuracy
      }
    })
  }

  componentDidMount() {

  }

  render() {
    let markers = [{
      iconPath: address,
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50,
      title: 'cy',
      callout: {
        content: 'hello cy',
        fontSize: 20,
        borderRadius: 5
      }
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
    const { longitude, latitude } = this.state

    return (
      <View>
        <Map
          className='map-wrap'
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

export default MapTem
