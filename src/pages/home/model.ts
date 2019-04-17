import * as indexApi from './service';

export default {
  namespace: 'home',
  state: {
    banner: [],
    brands: [],
    page: 1
  },

  effects: {
    // * load({ payload }, {select, call, put}){
    //   // 从state中获取state
    //   const { page } = yield select(state => state.home)
    //   const { status, data } = yield call(indexApi.load,{
    //     ...payload
    //   })
    //   if(status === 'ok'){
    //     yield put({
    //       type: 'save',
    //       payload: {
    //         banner: data.banner,
    //         brands: data.brands,
    //       }
    //     })
    //   }
    // },

    * getLists({ payload }, { select, call, put }) {
      const { key, v } = yield select(state => state.home)
      const { error, result } = yield call(indexApi.getLists, {
        key,
        v,
        ...payload
      }) 
      if (!error) {
        yield put({
          type: 'updateState',
          payload: {
            data: result
          }
        })
      }
    }
  },

  reducers: {
    // save(state, { payload }){
    //   return{
    //     ...state,
    //     ...payload
    //   }
    // },
    updateState(state, { payload: data }) {
      return { ...state, ...data }
    }
  }

}