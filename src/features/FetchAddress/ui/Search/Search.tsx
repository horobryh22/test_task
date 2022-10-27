import { ReactElement, useState } from 'react';

import { useAddress } from '../../model/hooks/useAddress/useAddress';
import { ItemList } from '../ItemList/ItemList';

import classes from './Search.module.scss';

import SearchIcon from 'shared/assets/img/search.svg';
import { classNames } from 'shared/lib';
import { Button, Input, Loader } from 'shared/ui';

interface SearchProps {
    className?: string;
}

export const Search = ({ className }: SearchProps): ReactElement => {
    const [valueError, setValueError] = useState<null | string>(null);
    const [address, setAddress] = useState('');
    const { refetch, isError, data, isLoading, isFetched } = useAddress(address);

    const dataSuccess = isFetched && !isError && !isLoading;

    const handleClick = (): void => {
        if (address.length < 3) {
            setValueError('Минимальное количество символов 3');

            return;
        }
        refetch();
        setValueError(null);
    };

    return (
        <div className={classNames(classes.wrapper, {}, [className])}>
            <div className={classes.search}>
                <Input
                    placeholder="Введите интересующий вас адрес"
                    value={address}
                    onChange={setAddress}
                />
                <Button Icon={SearchIcon} onClick={handleClick}>
                    Поиск
                </Button>
            </div>
            {valueError && <h3 className={classes.error}>{valueError}</h3>}
            {isLoading && (
                <div className={classes.loader}>
                    <Loader />
                </div>
            )}
            {isError && (
                <h3 className={classes.error}>Произошла ошибка при получении данных</h3>
            )}
            {dataSuccess && <ItemList items={data} />}
        </div>
    );
};
