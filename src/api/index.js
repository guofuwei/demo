import request from '../utils/request';

export const fetchData = (query) => {
    return request({
        url: query,
        method: 'get',
        params: ''
    });
};
