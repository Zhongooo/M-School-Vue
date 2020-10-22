import api from '../index'
import urls from './urls'
export default {
  userinfo(params){
    return api.post(urls.userinfo,params)
}
}

