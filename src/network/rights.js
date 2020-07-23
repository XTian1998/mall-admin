import {request} from '@/network/request'

export function getRightsList() {
    return request({
        url:'/rights/list',
        method: 'get'
    })
}