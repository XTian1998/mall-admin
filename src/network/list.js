import {request} from '@/network/request'

export function getGoodsList(queryInfo) {
    return request({
        url:'/goods',
        method: 'get',
        params: queryInfo
    })
}

export function deleteGoodsById(id) {
    return request({
        url: `/goods/${id}`,
        method: 'delete'
    })
}