import React from 'react'
import { useState } from 'react';
import { 
    DivTareas,
    SpanName,
    FormEdit,
    InputEditArea,
    ButtonEdit
} from './TareaStyled';
import { IconContext } from "react-icons";
import { RiDeleteBinLine } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';


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
        <>
            {
                !confirmEdit ?
                    <DivTareas className='tareas-row-add'>
                        <SpanName className='tareas-row-name'>{tarea}</SpanName>
                        <span className='tareas-row-edit' onClick={confirmEditarTarea}>
                            <IconContext.Provider value={{ color: 'white'}}>
                                <FiEdit/>             
                            </IconContext.Provider>
                        </span>
                        <span className='tareas-row-delete' onClick={confirmBorrarTarea}>
                            <IconContext.Provider value={{ color: 'white'}}>
                                <RiDeleteBinLine/>
                            </IconContext.Provider>
                        </span>
                    </DivTareas>
                    :
                    <FormEdit className='form-edit' onSubmit={submitEdit}>
                        <InputEditArea  className='form-edit-tarea' value={editarTarea} onChange={manejarEdit} />
                        <ButtonEdit className='form-edit-button'>Editar</ButtonEdit>
                    </FormEdit>
            }

        </>
    )
}

export default Tarea