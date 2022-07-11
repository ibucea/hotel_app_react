import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';
import { login } from '../redux/actions/UserActions';
import { IUserLogin } from '../interfaces/IUser';
// import { RootState, AppDispatch } from '../redux/store';

const LoginScreen: React.FC = () => {

    // let navigate = useNavigate();
    // const dispatch: AppDispatch = useDispatch()

    const [email, setEmail] = useState<IUserLogin['email']>("");
    const [password, setPassword] = useState<IUserLogin['password']>("");

    // const userInfo = useSelector((state: RootState) => state.userLogin);


    const handleSubmit = (e: React.FormEvent) => {
        // e.preventDefault();
        console.log('login');
        login({ email, password });
    }

    // useEffect(() => {
    //     if(userInfo) {
    //         navigate("/");
    //     }
    // }, [userInfo, dispatch, navigate]);
    

  return (
      <Container>
   
                <h2 className="mb-4">Login</h2>
                   
                        <div>E-Mail</div>
                        <input
                            type="email" 
                            value={email} 
                            placeholder="E-Mail" 
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </input>
            
                        <div>Password</div>
                        <input 
                            type="password" 
                            value={password} 
                            placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}
                        >
                        </input>
               
                  
                        <button type="submit" onSubmit={handleSubmit}>
                            {`Login`}
                        </button>
      
    </Container>
  );
};

export default LoginScreen;
