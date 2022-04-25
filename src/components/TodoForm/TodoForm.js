import React, { useState } from 'react';
import Div from './TodoFormStyle.js';

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
            <h1 className='container-form-h1'>what do you have planned for today</h1>
            <form className='form'>
                <input placeholder='Escribe aquí tu tarea' className='form-input' value={inputText} onChange={manejarFormulario} />
                <button className='form-button'>Añadir</button>
            </form>
            {
                !validacion &&
                <h3 className='container-form-validacion'>¡No puedes añadir una tarea en blanco!</h3>
            }
        </Div>
    )
}

export default TodoForm