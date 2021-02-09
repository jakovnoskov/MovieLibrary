import { Alert } from 'react-native'

const _l = '----------------------'

export const defaultApiActionFire = (errorData:any) => {
  //console.log(errorData)
  return Alert.alert(
    'Error!',
    typeof errorData.message === "string" ? errorData.message : null,
  )
}

const getParamsForGetRequest = ( url:string, data: any) => {
  const _url = new URL(url)
  Object.keys(data).forEach(key => _url.searchParams.append(key, data[key]))
  return _url.href
}

export const fetchApi = ({ data, params, callbacks = {} }: any) => {
  return async (dispatch) => {

    /*const url = params.method === "GET" ?
      getParamsForGetRequest({ url: params.url, data: data }) : params.url */

    //console.log(params.url)
    //console.log(data)
    //console.log(params)
    //console.log(params.method)

    const result = await fetch(params.url, {
      method: params.method || 'POST',
      headers: {
        'Content-Type': 'application/json',
        //'Cache-Control': 'no-store',
      },
      body: params.method === "POST" ||
        params.method === "PUT" ? JSON.stringify(data) : null
    })
      //обработка в понятный вид
      .then(response => {
        //console.log(response)
        return applyres(response)
      })
      .catch(err => {
        //console.log(`\n fetchApi fail \n ${err}\n`)
        return { status: 0, response: null }
      })
    return fetchApiCallback({ result, callbacks, url: params.url, dispatch })
  }
}

const fetchApiCallback = async ({ result, callbacks, url, dispatch }:any) => {
  // console.log('fetchApiCallback')
  // console.log(result)
  // console.log(typeof result.response.error)

  //!success custom
  if (typeof result.response.error === "object") {
    if (callbacks['fail']) {
      return callbacks['fail'](result)
    } else {
      return defaultApiActionFire(result.response.error)
    }
  }

  if (callbacks[result.status]) {
    return callbacks[result.status](result)
  }

  // default
  switch (result.status) {
    case 0:
      console.log(`${_l}\nunexpected response\n${_l}`)
      break
    case 200:
      console.log(`${_l}\nrequest success\n${JSON.stringify(result.response)}\n${_l}`)
      break
    case 401:
      console.log('LEAVE')
      break
    case 400:
      console.log('bad params')
      break
    case 403:
      console.log('bad params')
      break
    case 404:
      console.log('method not found')
      break
    case 500:
      console.log(`
        ${_l}\nrequest out with error\nparams.url ${url}\nresponse: 
        \n${JSON.stringify(result)}\n${_l}
        `)
      break
    default:
      break
  }

}



//преобразование response
const applyres = async (response: any) => {
  //console.log('обработчик response')
  //console.log(response)
  let result = {}
  let status = 0
  if (response) {
    status = response ? response.status : 0
    try {
      result = status === 200 && typeof response === 'object' ?
        await response.json() : null
    }
    catch (e) {
      if (process.env.NODE_ENV === 'development') {
        console.log(`\n api handler error get result:\n${e}\n`)
      }
      return {
        status: 0,
        response: null
      }
    }
  }

  return {
    response: result,
    status: status
  }
}