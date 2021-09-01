import {useState} from 'react';
import axios from 'axios';

const initialRequestInfo = {
  loading: false,
  error: null,
  data: null
}

export default function useApi(config){
  const [ requestInfo, setRequestInfo] = useState(initialRequestInfo)

  async function call(localConfig){
    setRequestInfo({
      ...initialRequestInfo,
      loading: true
    })
    let response = null;
    try {
      response = await axios({
        baseURL: `http://localhost:3333`,
        ...config,
        ...localConfig
      });
      setRequestInfo({
        ...initialRequestInfo,
        data: response.data
      })

    } catch (error) {
      setRequestInfo({
        ...initialRequestInfo,
        error
      })
    } 
    if(config.onCompleted){
      config.onCompleted(response)
    }
  }

  return [
    call,
    requestInfo
  ]
}