import axios from 'axios'
import qs from 'qs'

export const axiosPost = (url, params, fn) => {
    axios.post(url, qs.stringify(params)).then(function (response) {
        console.log(response)
    }).catch(function (error) {
        console.log(error)
    })
}
export const axiosAjax2 = (type, url, params, fn, headers) => {
    let opt = {method: type, url: url}
    if (type.toUpperCase() === 'POST') {
        opt = {...opt, data: qs.stringify(params), headers: {'content-type': 'application/json'}}
    } else {
        opt = {...opt, params: params}
    }
    if (headers) {
        opt = {...opt, data: params, headers: {headers}}
    }
    axios({...opt}).then(function (response) {
        console.log(response)
        fn(response)
    }).catch(function (error) {
        console.log(error)
    })
}

export const axiosAjax = (type, url, params, fn) => {
    let opt = {method: type, url: url}
    if (type.toUpperCase() === 'POST') {
        opt = {...opt, data: params, headers: {'content-type': 'application/json'}}
    } else {
        opt = {...opt, params: params}
    }
    axios({
        ...opt
    }).then(function (response) {
        console.log(response)
        fn(response)
    }).catch(function (error) {
        console.log(error)
    })
}

export const axiosFormData = (type, url, params, fn) => {
    axios({
        method: type,
        url: url,
        data: params,
        headers: {'Content-Type': 'multipart/form-data'}
    }).then(function (response) {
        console.log(response)
    }).catch(function (error) {
        console.log(error)
    })
}
