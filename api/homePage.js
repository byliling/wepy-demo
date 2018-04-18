import axios from 'axios'
import adapter from './adapter'

var instance = axios.create({
    adapter: adapter,
    timeout: 20000,
    params: {
        categoryIds: 182,
        pageSize: 20
    }
})
const paramsInit = (param, options = {}) => Object.assign({}, param, options)

export const fetchHomePageLists = options => instance.get('https://kong-https.baidao.com/hxg-cms/articles', { params: paramsInit(options) }).then(res => res.data.data)


// export const fetchHomePageLists = async (options) => {

//    const res = await instance.get('https://kong-https.baidao.com/hxg-cms/articles', { params: paramsInit(options) })
//    return res.data.data
// }

// export const fetchHomePageLists = options => {
//     return instance.get('https://kong-https.baidao.com/hxg-cms/articles', { params: paramsInit(options) }).then(res => res.data.data)
// }