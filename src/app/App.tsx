import React, { ReactElement, Suspense } from 'react';

import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';

const App = (): ReactElement => {
    return (
        <div className={classNames('app')}>
            <Suspense fallback="">
                <Navbar />
                <div className="app-content">
                    {/*<Sidebar />*/}
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
