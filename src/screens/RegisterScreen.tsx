import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootStateOrAny } from '../redux/store';
import { Container, Button, FormControl, FormGroup, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { register } from '../redux/actions/RegisterActions';
import Loader from '../components/Loader';
import { IUser } from '../interfaces/IUser';

const RegisterScreen: React.FC = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [username, setUsername] = useState<IUser['username']>("");
    const [email, setEmail] = useState<IUser['email']>("");
    const [password, setPassword] = useState<IUser['password']>("");

    const { loading, success } = useSelector((state: RootStateOrAny) => state.userRegister);
    const { userInfo } = useSelector((state: RootStateOrAny) => state.userLogin);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        register(dispatch)({ username, email, password });
    }


    useEffect(() => {
        if(userInfo) {
            navigate("/");
        }
    }, [dispatch, userInfo, success, navigate]);
    

  return (
      <Container>
      
                <h2>Register</h2>
                <FormControl >

                <FormControl>
                    <FormGroup aria-controls='email'>
                        <InputLabel htmlFor="my-input">Username</InputLabel>
                        <Input id="username" aria-describedby="my-helper-text" onChange={(e) => setUsername(e.target.value)} type="username" />
                    </FormGroup>
                </FormControl>

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

         
                    <FormControl>
                        <Button onSubmit={handleSubmit} type="submit">
                            {loading ? <Loader /> : `Register`}
                        </Button>
                    </FormControl>
                </FormControl >
    </Container>
  );
};

export default RegisterScreen;
