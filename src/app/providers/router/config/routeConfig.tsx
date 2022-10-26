export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found',
    ERROR = 'error',
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.PROFILE]: '/profile',
    [AppRoute.NOT_FOUND]: '/not_found',
    [AppRoute.ERROR]: '*',
};

// export const routeConfig: RouteObject[] = [
//     { path: RoutePath[AppRoute.MAIN], element: <MainPageAsync /> },
//     { path: RoutePath[AppRoute.ABOUT], element: <AboutPageAsync /> },
//     { path: RoutePath[AppRoute.PROFILE], element: <ProfilePageAsync /> },
//     { path: RoutePath[AppRoute.NOT_FOUND], element: <NotFoundPage /> },
//     {
//         path: RoutePath[AppRoute.ERROR],
//         element: <Navigate to={RoutePath[AppRoute.NOT_FOUND]} />,
//     },
// ];
