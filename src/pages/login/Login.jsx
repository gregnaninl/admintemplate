import React from 'react'
import { useForm } from 'react-hook-form';
import FormGroup from '../../components/form/FormGoup';
import styled from '@emotion/styled';
import './login.css';


const TextoHeader = styled.h1`
font-size: 2rem;
margin: 0;
font-family: "Open Sans", sans-serif;
text-align: center;
`;

const Login = () => {

  const { register, handleSubmit,formState:{errors} } = useForm();

  return (
    
    <div className="login">
        <TextoHeader>Iniciar Sesión</TextoHeader>

        <form   >
            <FormGroup label="usuario" type="text" placeholder="ingrese su usuario"              
            register={{...register("usuario",{required:true})}}  />
            {errors.legajo && <span>El campo es obligatorio</span>}
            <FormGroup label="Contraseña" type="password" placeholder="ingrese la contraseña" 
            register={{...register("password",{required:true,minLength:6})}}  />
            {errors.password?.type==="required" && <span>El campo es obligatorio</span>}
            {errors.password?.type==="minLength" && <span>Debe completar al menos 6 caracteres</span>} 

            <button type="submit" className="w-100 btn btn-secondary btn-lg"  >Ingresar</button>
        </form>
            
    </div>

  )
}

export default Login;
