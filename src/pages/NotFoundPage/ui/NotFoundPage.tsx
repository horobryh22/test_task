import { ReactElement } from 'react';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({}: NotFoundPageProps): ReactElement => {
    return <div>Page not found</div>;
};
