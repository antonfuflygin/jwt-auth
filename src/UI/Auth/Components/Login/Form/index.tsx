import {Button, Form, Input, Row, Typography} from 'antd';
import {ROUTES} from 'Core/Const/routes.ts';
import {FC} from 'react';
import {Link} from 'react-router-dom';

const LoginForm: FC = () => {
    const [form] = Form.useForm();

    const validateMessages = {
        required: '${label} не может быть пустым',
    };

    return (
        <Form
            form={form}
            requiredMark={false}
            layout="vertical"
            validateMessages={validateMessages}
        >
            <Form.Item className="no-margin">
                <Row justify="center">
                    <Typography.Title className="no-margin" level={5}>
                        Вход
                    </Typography.Title>
                </Row>
            </Form.Item>

            <Form.Item
                name="username"
                label="Логин или email"
                rules={[{required: true}]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Пароль"
                rules={[{required: true}]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item className="submit-btn-wrap">
                <Button type="primary" htmlType="submit" className="w100">
                    Войти
                </Button>
            </Form.Item>
            <Row justify="center">
                <Link to={ROUTES.UNAUTHORIZED.SIGNUP.PATH}>Регистрация</Link>
            </Row>
        </Form>
    );
};

export default LoginForm;
