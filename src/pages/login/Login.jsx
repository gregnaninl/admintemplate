import React from 'react'
import { useForm } from 'react-hook-form';
import FormGroup from '../../components/form/FormGoup';
import styled from '@emotion/styled';
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import './login.css';
import  logo from '../../img/Logo-1.png';


const TextoHeader = styled.h3`
font-weight: 500;
margin: 0;
text-align: center;
`;

const Textop = styled.p`
font-weight:600;
margin: 0;
text-align: center;
color:gray;
`;

const Login = (props) => {

  const { register, handleSubmit,formState:{errors} } = useForm();

  const onSubmit = data => {
    console.log(data);
    props.loguear(true);
  }    

  return (
    
    <div className="login">

        <div className='d-flex flex-center mb-15 login-img'>
          <img src={logo} className="mx-auto d-block" id="login-img" alt='logo-LN' />
        </div>

        <div className='pt-10'>
          <TextoHeader>Ingresar a la administracion</TextoHeader>
          <Textop>Cargue los datos para autenticar su cuenta:</Textop>        
        </div>
       

        <form  className='form pt-5' onSubmit={handleSubmit(onSubmit)}  >                          
                <div className="form-group mb-4">
                    <input type="text" placeholder="Email" className="form-control"  name="email"
                    {...register("email", { required: true, minLength: 3 })} />
                     {errors.email?.type==="required" && <span className='login-span'>El campo es obligatorio!</span>}
                     {errors.email?.type==="minLength" && <span className='login-span'>Debe completar al menos 3 caracteres!!</span>} 
                </div>
                <div className="form-group mb-4">
                    <input type="password" placeholder="Password" className="form-control" 
                    {...register("password", { required: true , minLength: 3 })} name="password" />
                    
                    {errors.password?.type==="required" && <span className='login-span'>El campo es obligatorio</span>}
                    {errors.password?.type==="minLength" && <span className='login-span'>Debe completar al menos 6 caracteres</span>} 
                </div>
            
                <div className='d-flex justify-content-between'>           
                  <Link to="/" className='link-login'><Textop>Recordarme</Textop></Link>
                  <Link to="/" className='link-login'>  <Textop>Olvido su clave?</Textop></Link>          
                </div>

                <div className='text-center'>
                  <Button type="submit"  id='boton-login' className='btn-lg' >Ingresar</Button>
                </div>
            
        </form>
            
    </div>

  )
}

export default Login;
 /*
  <input type="email" placeholder="Email" className="form-control"  name="email"
                    {...register("email", { required: true })} ></input>
                     {errors.email && <span>El campo es obligatorio</span>} */