import React from 'react'
import { useState } from 'react';

function Tarea({ tarea, id, filtrar, editar }) {

    const [confirmEdit, setconfirmEdit] = useState(false);
    const [editarTarea, setEditarTarea] = useState("");

    const confirmEditarTarea = () => {
        setconfirmEdit(true);
    }

    const confirmBorrarTarea = () => {
        filtrar(id);
    }

    const manejarEdit = (e) => {
        setEditarTarea(e.target.value);
    }

    const submitEdit = (e) => {
        e.preventDefault();
        editar(id, editarTarea);
        setEditarTarea('');
        setconfirmEdit(false);
    }


    return (
        <div className='container-tareas'>
            {
                !confirmEdit ?
                    <div className='tareas-row-add'>
                        <span className='tareas-row-name'>{tarea}</span>
                        <span className='tareas-row-edit' onClick={confirmEditarTarea}>Editar</span>
                        <span className='tareas-row-delete' onClick={confirmBorrarTarea}>Borrar</span>
                    </div>
                    :
                    <form className='form-edit' onSubmit={submitEdit}>
                        <input className='form-edit-tarea' value={editarTarea} onChange={manejarEdit} />
                        <button className='form-edit-button'>Editar</button>
                    </form>
            }

        </div>
    )
}

export default Tarea