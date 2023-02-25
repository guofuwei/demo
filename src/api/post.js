import request from '../utils/request';

export const postData = (theUrl, theData) => {
  return request({
    url: theUrl,
    method: 'post',
    data: theData
  });
};
