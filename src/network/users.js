import {request} from '@/network/request'

export function getUserList(params) {
    return request({
        url:'/users',
        method: 'get',
        params,
    })
}

export function changeUserState(id, state) {
    return request({
        url:`users/${id}/state/${state}`,
        method: 'put',
    })
}

export function addUserList(addForm) {
    return request({
        url: '/users',
        method: 'post',
        data: addForm
    })
}

export function getUserById(id) {
    return request({
        url: '/users/'+id,
        method: 'get'
    })
}

export function editUserById(id, email, mobile) {
    return request({
        url: '/users/'+id,
        method: 'put',
        data: {
            email,
            mobile
        }
    })
}

export function deleteUserById(id) {
    return request({
        url: '/users/'+id,
        method: 'delete'
    })
}

export function getRoles() {
    return request({
        url: '/roles',
        method: 'get'
    })
}

export function updateRolesById(id, rid) {
    return request({
        url: `/users/${id}/role`,
        method: 'put',
        data: {
            rid
        }
    })
}