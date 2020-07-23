import {request} from '@/network/request'

export function getCateList() {
    return request({
        url:'/categories',
        method: 'get'
    })
}

export function getAttr(id, sel) {
    return request({
        url: `/categories/${id}/attributes`,
        method: 'get',
        params: {
            sel
        }
    })
}

export function addGoods(form) {
    return request({
        url: '/goods',
        method: 'post',
        data: form
    })
}