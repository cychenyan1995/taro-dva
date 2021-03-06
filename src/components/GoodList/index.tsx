import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import PropTypes from 'prop-types';
import './index.scss'

interface IGoodListProps {
    productList: any[]
}
class GoodList extends Component<IGoodListProps, {}>{

    static PropTypes = {
        productList: PropTypes.array
    }
    static defaultProps = {
        productList: []
    }

    toDetail = (e) => {
        Taro.navigateTo({
            url: `/pages/detail/index?id=${e.currentTarget.dataset.id}`
        })
    }

    render() {
        const { productList } = this.props
        return (
            <View className='good-list-container'>
                <View className='good-ul'>
                    {
                        productList.length > 0 ? productList.map((item, index) => (
                            <View key={index}
                                className='good-li'
                                data-id={item.id}
                                onClick={this.toDetail}
                            >
                                <View className='pos'>
                                    <View className='good-image-container'>
                                        <Image src={
                                            item.cover_image ?
                                                `${item.cover_image}!w750` :
                                                'http://static-r.msparis.com/uploads/d/1/d1ca37e902e5550ad2c82c721bc216ce.png'
                                        }></Image>
                                    </View>
                                    <View className='desc'>
                                        <View className='desc-left'>
                                            VIP
                                        </View>
                                        {
                                            item.limit_tag && (
                                                <View className='desc-center'>
                                                    {item.limit_tag}
                                                </View>
                                            )
                                        }
                                        <View className='desc-right'>
                                            参考价¥
                                            {item.market_price / 100}
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ))
                            :
                            <View />
                    }

                </View>
            </View>
        )
    }
}

export default GoodList