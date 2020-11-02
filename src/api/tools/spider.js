import request from '@/utils/request'

export function getSource() {
  return request({
    url: 'api/hot/findSource',
    method: 'get'
  })
}

export default { getSource }
