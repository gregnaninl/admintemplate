import React from "react"
import Form from 'react-bootstrap/Form'

function FormGroup ({label,type,register, placeholder,disabled, name}){    
        return(
            <>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{label}</Form.Label>
                    
                    {type === 'select'
                    ?
                        <>
                             <Form.Select  disabled = {disabled || false } {...register} name={name} >
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                </Form.Select>
                        </>

                    :
                        <>
                            <Form.Control type={type || "text"} {...register} name={name}
                            placeholder={placeholder || ""} disabled = {disabled || false }  />
                        </>
                    }
                    
                    
                </Form.Group>
                
            </>
        )
      
    
    
    
}
export default FormGroup