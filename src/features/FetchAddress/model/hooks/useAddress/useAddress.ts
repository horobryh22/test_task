import { RefetchOptions, RefetchQueryFilters, useQuery } from 'react-query';
import type { QueryObserverResult } from 'react-query/types/core/types';

import { fetchAddress } from '../../services/fetchAddress/fetchAddress';
import { Address } from '../../types';

interface UseAddressResult {
    data: Address[];
    refetch: <TPageData>(
        options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
    ) => Promise<QueryObserverResult<Address[], unknown>>;
    isLoading: boolean;
    isFetched: boolean;
    isError: boolean;
}

export const useAddress = (address: string): UseAddressResult => {
    const { data, refetch, isLoading, isFetched, isError } = useQuery(
        ['fetchAddress', address],
        () => fetchAddress(address),
        {
            enabled: false,
            select: data => {
                return data.data.suggestions || [];
            },
        },
    );

    return { data: data || [], refetch, isLoading, isFetched, isError };
};
