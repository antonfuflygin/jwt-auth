import {FC} from 'react';
import {Route} from 'react-router';
import {Routes} from 'react-router-dom';

import LoginPage from '../UI/Auth/Pages/Login';
import SignUpPage from '../UI/Auth/Pages/SignUp';

import {ROUTES} from './Const/routes.ts';

const AppRouter: FC = () => (
    <Routes>
        <Route
            path={ROUTES.UNAUTHORIZED.SIGNUP.PATH}
            element={<SignUpPage />}
        />
        <Route path={ROUTES.UNAUTHORIZED.LOGIN.PATH} element={<LoginPage />} />
        <Route path={ROUTES.APP.PATH} element={<></>} />
    </Routes>
);

export default AppRouter;
