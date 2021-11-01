// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import googleImg from '../../../images/icons/google.png'
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <Container>
            <h2>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br />
            <Button onClick={signInUsingGoogle} variant="light"><img className="img-fluid" src={googleImg} alt="" /> Login With Google</Button>
        </Container>
    );
};

export default Login;