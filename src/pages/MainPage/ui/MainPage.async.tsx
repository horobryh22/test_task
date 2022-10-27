import React from 'react';

// имитация подгрузки страницы при первой загрузке
export const MainPageAsync = React.lazy(async () => {
    return await new Promise(resolve => setTimeout(resolve, 1000)).then(
        async () => await import('./MainPage'),
    );
});
