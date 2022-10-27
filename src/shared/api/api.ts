import axios from 'axios';

const token = '1f2e2b992869da19b24fbb93436ad2990172a8d9';

export const instance = axios.create({
    baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest',
    headers: {
        Authorization: 'Token ' + token,
    },
});
