import React, { useState } from 'react';
import { 
    Div, 
    Title, 
    DivForm,
    Input,
    Form,
    Button,
    ValidationH3
} from './TodoFormStyled.js';

function TodoForm(props) {
    const [inputText, setInputText] = useState('');
    const [validacion, setValidacion] = useState(true);

    const manejarFormulario = (e) => {
        setInputText(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (inputText.trim() !== "") {
            props.nuevaTarea(inputText);
            setInputText("");
            setValidacion(true);
        } else {
            setValidacion(false);
        }

    }

    return (
        <Div className='container-form' onSubmit={submitForm}>
            <Title className='container-form-h1'>Todo App</Title>
            <Form className='form'>
                <DivForm className='subcontainer-form'>
                    <Input placeholder='Añade aquí tu tarea' className='form-input' maxLength="30" type="text" value={inputText} onChange={manejarFormulario} />
                    <Button className='form-button'>+</Button>
                </DivForm>
            </Form>
            {
                !validacion &&
                <ValidationH3 className='container-form-validacion'>¡Debes añadir una tarea!</ValidationH3>
            }


        </Div>
    )
}

export default TodoForm