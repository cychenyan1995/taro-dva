import * as indexApi from './service';

export default {
  namespace: 'home',
  state: {
    banner: [],
    brands: [],
    page: 1,
    products_list: []
  },

  effects: {
    * load({ payload }, {select, call, put}){
      // 从state中获取state
      const { page } = yield select(state => state.home)
      const { status, data } = yield call(indexApi.load,{
        ...payload
      })
      if(status === 'ok'){
        yield put({
          type: 'save',
          payload: {
            banner: data.stars,
            brands: data.brands,
          }
        })
      }
    },

    * product({payload}, {select, call, put}){
      const { page, products_list} = yield select(state => state.home)
      const { status, data } = yield call(indexApi.product, {
        ...payload,
        page,
        mode: 1,
        type: 0,
        filter: 'sort:recomm|c:330602',
      })
      if(status === 'ok'){
        yield put({
          type: 'save',
          payload: {
            products_list: page > 1 ? [...products_list, ...data.rows] : data.rows,
          }
        })
      }
    },

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
    save(state, { payload }){
      return{
        ...state,
        ...payload
      }
    },
    updateState(state, { payload: data }) {
      return { ...state, ...data }
    }
  }

}