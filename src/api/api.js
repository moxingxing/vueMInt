import axios from 'axios'

export const requestLogin = params => { return axios.post(`/login`, params).then(res => res.data) }

export const getUserList = params => { return axios.post(`/app/user/list`, { params: params }) }

export const getUserListPage = params => { return axios.get(`/user/listpage`, { params: params }) }

export const removeUser = params => { return axios.get(`/user/remove`, { params: params }) }

export const batchRemoveUser = params => { return axios.get(`/user/batchremove`, { params: params }) }

export const editUser = params => { return axios.get(`/user/edit`, { params: params }) }

export const addUser = params => { return axios.get(`/user/add`, { params: params }) }
