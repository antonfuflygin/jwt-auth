import {Modal} from 'antd';
import {FC, useEffect, useState} from 'react';

import LoginForm from './Form';

const Login: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setIsModalOpen(true);
    }, []);

    return (
        <>
            <Modal open={isModalOpen} footer={null} closeIcon={null}>
                <LoginForm />
            </Modal>
        </>
    );
};

export default Login;
