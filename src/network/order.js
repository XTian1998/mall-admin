import {request} from '@/network/request'

export function getOrderList(queryInfo) {
    return request({
        url:'/orders',
        method: 'get',
        params: queryInfo
    })
}

export function getProgress() {
    return request({
        url:'/kuaidi/1106975712662',
        method: 'get',
    })
}