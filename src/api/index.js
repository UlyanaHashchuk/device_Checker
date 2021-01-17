import { BASE_PATH } from '../constants'

const request = ({ url, method, token, ...restProps }) =>
  new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        ...(token
          ? {
              'Auth-Token': token,
            }
          : {}),
        'Content-Type': 'application/json',
      },
      ...restProps,
    })
      .then((response) =>
        response
          .json()
          .then((data) => (data.error ? reject(data) : resolve(data)))
          .catch(reject)
      )
      .catch(reject)
  })

export const verifyTokenRequest = ({ id, token }) =>
  request({
    url: `${BASE_PATH}/users/${id}`,
    method: 'GET',
    token,
  })

export const loginRequest = (data) =>
  request({
    url: `${BASE_PATH}/login`,
    method: 'POST',
    body: JSON.stringify(data),
  })

export const getAllDevicesRequest = ({ token }) =>
  request({
    url: `${BASE_PATH}/phones`,
    method: 'GET',
    token,
  })

export const addPhoneRequest = ({ token, formData }) =>
  request({
    url: `${BASE_PATH}/phones`,
    method: 'POST',
    token,
    body: JSON.stringify(formData),
  })

export const borrowPhoneRequest = ({ token, id }) =>
  request({
    url: `${BASE_PATH}/phones/${id}/borrow`,
    method: 'POST',
    token,
  })

export const returnPhoneRequest = ({ token, id }) =>
  request({
    url: `${BASE_PATH}/phones/${id}/return`,
    method: 'POST',
    token,
  })
