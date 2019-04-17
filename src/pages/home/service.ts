import Api from '../../utils/request'

export const getLists = (data) => {
  return Api.getLists(data)
}

export const load = (data) => {
  return Api.load(data)
}
export const product = (data) => {
  return Api.product(data)
}