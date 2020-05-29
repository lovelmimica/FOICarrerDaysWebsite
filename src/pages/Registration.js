import React, { useState } from 'react';
import {registerUser} from '../api/register';


//Components
import FormSection from '../components/FormSection/FormSection';
import { useHistory } from 'react-router-dom';

const Registration = () => {
    let history = useHistory();

    const [error, setError] = useState(0);

    const handleSubmit = (data) => {
        registerUser(data).then(res => {
            console.log(res);
            if(res.username) history.push('/login');
            else {
                setError('Korisničko ime već postoji');
            }
        });
    }

    return(
        <FormSection 
            submitText='REGISTRIRAJ SE' 
            title='Registracija'
            message='Već ste registrirani? Klikni ovdje za prijavu'
            messageLink='login'
            usernameMinLength='5'
            errorUsername='Korisničko ime mora imati barem 5 znakova'
            passwordMinLength='8'
            errorPassword='Lozinka mora imati barem 8 znakova'
            submitHandler={registerUser}
            responseError={error}
            
        >
        </FormSection>
    )
}   

export default Registration;