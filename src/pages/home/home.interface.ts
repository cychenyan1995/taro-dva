/**
 * index.state 参数类型
 *
 * @export
 * @interface HomeState
 */
export interface HomeState {
    month: number
    day: number
  }
  
  /**
   * index.props 参数类型
   *
   * @export
   * @interface HomeProps
   */
  export interface HomeProps {
    dispatch?: any,
    data?: Array<DataInterface>,
    banner: any[],
    products_list: any[]
    page: 1
  }
  
  export interface DataInterface {
    day: number
    des: string
    lunar: string
    month: number
    pic: string
    title: string
    year: number
    _id: string
  }