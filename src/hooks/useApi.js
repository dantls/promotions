import {useState} from 'react';
import axios from 'axios';
import useDebouncedPromise from './useDebouncePromise';

const initialRequestInfo = {
  loading: false,
  error: null,
  data: null
}

export default function useApi(config){
  const [ requestInfo, setRequestInfo] = useState(initialRequestInfo)
  const debouncedAxios = useDebouncedPromise(axios, config.debounceDelay)

  async function call(localConfig){
    setRequestInfo({
      ...initialRequestInfo,
      loading: true
    })
    let response = null;

    const finalConfig = {
      baseURL: `http://localhost:3333`,
      ...config,
      ...localConfig
    }

    const fn = finalConfig.debounced ? debouncedAxios : axios

    try {
      response = await fn(finalConfig);
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