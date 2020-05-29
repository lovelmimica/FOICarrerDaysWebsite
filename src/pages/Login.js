import React from 'react';
import {loginUser} from '../api/login';

//Components
import FormSection from '../components/FormSection/FormSection';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    let history = useHistory();

    const handleSubmit = (data) => {
        loginUser(data).then(res => {
            if(res.token) {
                localStorage.setItem('bearerToken', res.token);
                history.push('/events');
            }
        });
    }

    return(
        <FormSection 
            submitText='PRIJAVI SE' 
            title='Prijava'
            message='Nemate korisnički račun? Klikni ovdje za registraciju'
            messageLink='registration'
            usernameMinLength='0'
            errorUsername='Korisničko ime ne može biti prazno'
            passwordMinLength='0'
            errorPassword='Lozinka ne može biti prazna'
            submitHandler={loginUser}
        >
        </FormSection>
    )
}   

export default Login;