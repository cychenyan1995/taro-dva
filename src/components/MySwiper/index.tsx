import Taro, { Component, Config } from '@tarojs/taro'
import PropTypes from 'prop-types';
import { Swiper, SwiperItem, View, Image } from '@tarojs/components'
import './index.scss'

interface IMySwiperProps{
  banner: any[]
}
class MySwiper extends Component<IMySwiperProps, {}> {

  constructor(props) {
    super(props)
  }

  // 初始化
  static PropTypes = {
    banner: PropTypes.array
  }
  static defaultProps = {
    banner: []
  }

  render() {
    const { banner } = this.props
    return (
      <Swiper
        className='swiper'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
        {
          banner.map((item, index) => (
            <SwiperItem key={index}>
              <Image mode="widthFix" src={`${item.image_src}!w750`} />
            </SwiperItem>
          ))
        }
      </Swiper>
    )
  }
}

export default MySwiper