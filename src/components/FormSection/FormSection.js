import React from 'react';
import { useForm } from "react-hook-form";
import { Section, Form, Title, Message, Submit, Label, TextInput, Password, ErrorMessage } from './FormSectionStyle';
import { Link, useHistory } from 'react-router-dom';


const FormSection = (props) => {
    let history = useHistory();
    const {register, errors, setError, handleSubmit} = useForm();

    const onSubmit = (data) => {
        props.submitHandler(data).then(res => {
            if(res.token) {
                localStorage.setItem('bearerToken', res.token);
                history.push('/events');
            }else if(res.username){
                history.push('login');
            }else if(res.message){
                console.log(res);
                setError('response', 'registration', res.message);
            }
        });
    }

    return(
        <Section>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Title>{props.title}</Title>
                <Message to={props.messageLink}>{props.message}</Message>
                <Label>Korisničko ime</Label>
                <TextInput name='username' ref={register({minLength: props.usernameMinLength, required: true})} />
                <ErrorMessage>{errors.username && props.errorUsername}</ErrorMessage>
                <Label>Lozinka</Label>
                <Password name='password' ref={register({minLength: props.passwordMinLength, required: true})} />
                <ErrorMessage>{errors.password && props.errorPassword}</ErrorMessage>
                <Submit value={props.submitText} />
                <ErrorMessage>{errors.response && errors.response.message}</ErrorMessage>
            </Form>
        </Section>
    )
}

export default FormSection;