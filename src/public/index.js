import axios from 'axios'
import qs from 'qs'
import {sourceUrl} from './config'

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
        fn(response.data)
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

export const calculatePx = (x) => {
    // 计算750，下面对应的px
    let rootFontsize = parseInt($('html').css('fontSize'))
    let fontSizt750 = (750 / 320) * 12
    return x * rootFontsize / fontSizt750
}

export const setImg = (imgPath) => {
    return `${sourceUrl}/${imgPath}`
}

// 格式化时间
const zero = (m) => {
    return m < 10 ? '0' + m : m
}
export const formatDateToDay = (date, str) => {
    let _str = !str ? '-' : str
    let time = new Date(date)
    let year = time.getFullYear()
    let m = time.getMonth() + 1
    let d = time.getDate()
    if (date) {
        return `${year}${_str}${zero(m)}${_str}${zero(d)}`
    } else {
        return ''
    }
}
export const formatDateToDayNotYear = (date, str) => {
    let _str = !str ? '-' : str
    let time = new Date(date)
    // let year = time.getFullYear()
    let m = time.getMonth() + 1
    let d = time.getDate()
    if (date) {
        return `${zero(m)}${_str}${zero(d)}`
    } else {
        return ''
    }
}

export const formatDateRagge = (start, end, str) => {
    let currDate = new Date()
    let endDate = new Date(end)
    if (endDate.getFullYear() > currDate.getFullYear()) {
        return `${formatDateToDay(start, str)}-${formatDateToDay(end, str)}`
    } else {
        return `${formatDateToDayNotYear(start, str)}-${formatDateToDayNotYear(end, str)}`
    }
}
