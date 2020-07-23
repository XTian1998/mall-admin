import { request } from '@/network/request'

export function getRolesList() {
    return request({
        url: '/roles',
        method: 'get',
    })
}

export function deleteRightsByid(role, right) {
    return request({
        url: `roles/${role}/rights/${right}`,
        method: 'delete'
    })
}

export function getRightsTree() {
    return request({
        url: '/rights/tree',
        method: 'get'
    })
}

export function setRightsById(id, rids) {
    return request({
        url: `roles/${id}/rights`,
        method: 'post',
        data: {
            rids
        }
    })
}