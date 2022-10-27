import { Address } from '../../types';

import { instance } from 'shared/api/api';

export const fetchAddress = (address: string) => {
    return instance.post<{ suggestions: Address[] }>('/address', {
        query: address,
    });
};
