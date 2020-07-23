import {request} from '@/network/request'

export function getCateList(queryInfo) {
    return request({
        url:'/categories',
        method: 'get',
        params: queryInfo
    })
}

export function getParentCateList() {
    return request({
        url:'/categories',
        method: 'get',
        params: {
            type: 2
        }
    })
}

export function addCateList(addCateForm) {
    return request({
        url:'/categories',
        method: 'post',
        data: addCateForm
    })
}