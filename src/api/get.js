import request from '../utils/request';

export const fetchData = (theUrl) => {
  return request({
    url: theUrl,
    method: 'get',
    params: ''
  });
};
