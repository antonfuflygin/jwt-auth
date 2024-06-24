import {Button, Form, FormRule, Input, Row, Typography} from 'antd';
import {ROUTES} from 'Core/Const/routes.ts';
import {FC} from 'react';
import {Link} from 'react-router-dom';

const SignUpForm: FC = () => {
    const [form] = Form.useForm();

    const validateMessages = {
        required: '${label} не может быть пустым',
        types: {
            email: 'Неверный формат email',
        },
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
                        Регистрация
                    </Typography.Title>
                </Row>
            </Form.Item>

            <Form.Item name="login" label="Логин" rules={[{required: true}]}>
                <Input />
            </Form.Item>

            <Form.Item
                name="email"
                label="Email"
                rules={[{type: 'email'}, {required: true}]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Пароль"
                rules={[{required: true}]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                dependencies={['password']}
                label="Подтверждение пароля"
                hasFeedback
                rules={[
                    {
                        required: true,
                    },
                    ({getFieldValue}) => ({
                        validator(_: FormRule, value: string) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('Пароли не совпадают');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item className="submit-btn-wrap">
                <Button type="primary" htmlType="submit" className="w100">
                    Регистрация
                </Button>
            </Form.Item>
            <Row justify="center">
                <Link to={ROUTES.UNAUTHORIZED.LOGIN.PATH}>Вход</Link>
            </Row>
        </Form>
    );
};

export default SignUpForm;
