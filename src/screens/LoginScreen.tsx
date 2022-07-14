/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, FormGroup, Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { login } from '../redux/actions/UserActions';
import { RootStateOrAny } from '../redux/store';
import { IUser } from '../interfaces/IUser';
import Loader from '../components/Loader'


const LoginScreen: React.FC = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch();


    const [email, setEmail] = useState<IUser['email']>("");
    const [password, setPassword] = useState<IUser['password']>("");

    const { userInfo, loading, success } = useSelector((state: RootStateOrAny) => state.userLogin);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(dispatch)({ email, password });
    }

    useEffect(() => {
        if (success || userInfo) {
            navigate("/");
        }
    }, [userInfo, success, navigate]);


    return (
        <Container maxWidth="sm">

            <h1>Login</h1>

            <FormControl >
                <FormControl>
                    <FormGroup aria-controls='email'>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="email" aria-describedby="my-helper-text" onChange={(e) => setEmail(e.target.value)} type="email" />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormGroup>
                </FormControl>


                <FormControl>
                    <FormGroup aria-controls='password'>
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input id="password" aria-describedby="my-helper-text" onChange={(e) => setPassword(e.target.value)} type="password" />
                        <FormHelperText id="my-helper-text">We'll never share your password.</FormHelperText>
                    </FormGroup>
                </FormControl>
             
                <FormGroup>
                    <Button type="submit" onClick={handleSubmit}>
                        {loading ? <Loader /> : `Login`}
                    </Button>
                </FormGroup>
            </FormControl>
        </Container>
    );
};

export default LoginScreen;

