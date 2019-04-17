import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import PropTypes from 'prop-types';

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
                            >
                                <View className='pos'>
                                    <View className='good-image-container'>
                                        <Image src={
                                            item.cover_image ? 
                                            `${item.cover_image}!w750` : 
                                            'http://static-r.msparis.com/uploads/d/1/d1ca37e902e5550ad2c82c721bc216ce.png'
                                        }></Image>
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