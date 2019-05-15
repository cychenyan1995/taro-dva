import Taro from '@tarojs/taro';

export default {
    namespace: 'common',
    state:{
        access_token: Taro.getStorageSync('access_token'),
        mobile: Taro.getStorageSync('user_info')
        ? Taro.getStorageSync('user_info').mobile
        : ''
    },
    reducers: {
        save(state, { payload }){
            return { ...state, ...payload };
        }
    }
}