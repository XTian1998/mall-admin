import { request } from '@/network/request'

export function getCateList() {
    return request({
        url: '/categories',
        method: 'get',
    })
}

export function getParams(cateId, sel) {
    return request({
        url: `/categories/${cateId}/attributes`,
        method: 'get',
        params: {
            sel
        }
    })
}

export function postParams(cateId, attr_name, attr_sel) {
    return request({
        url: `/categories/${cateId}/attributes`,
        method: 'post',
        data: {
            attr_name,
            attr_sel
        }
    })
}

export function putParams(cateId, attr_id, attr_name, attr_sel, attr_vals) {
    return request({
        url: `/categories/${cateId}/attributes/${attr_id}`,
        method: 'put',
        data: {
            attr_name,
            attr_sel,
            attr_vals
        }
    })
}