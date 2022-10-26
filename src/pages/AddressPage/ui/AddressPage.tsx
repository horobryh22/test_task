import { ReactElement } from 'react';

import SearchIcon from 'shared/assets/img/search.svg';
import { Button } from 'shared/ui';

const AddressPage = (): ReactElement => {
    return (
        <div>
            <Button Icon={SearchIcon}>Поиск</Button>
        </div>
    );
};

export default AddressPage;
