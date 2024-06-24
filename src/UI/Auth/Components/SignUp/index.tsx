import {Modal} from 'antd';
import {FC, useEffect, useState} from 'react';

import SignUpForm from './Form';

const SignUp: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setIsModalOpen(true);
    }, []);

    return (
        <Modal open={isModalOpen} footer={null} closeIcon={null}>
            <SignUpForm />
        </Modal>
    );
};

export default SignUp;
