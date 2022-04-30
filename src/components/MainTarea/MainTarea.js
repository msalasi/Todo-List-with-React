import React from 'react'
import TodoForm from '../TodoForm/TodoForm';
import Tarea from '../Tareas/Tarea';
import { useState } from 'react';
import { 
  Div 
} from './MainTareaStyled';

function MainTarea() {
  const [listaTareas, setListaTareas] = useState([]);

  const nuevaTarea = (tarea) => {
    setListaTareas([tarea, ...listaTareas]);
  }

  const filtrarTarea = (id) => {
    const listaFiltrada =  listaTareas.filter((e, index) => index !== id);
    setListaTareas(listaFiltrada);
  }

  const actualizarTarea = (id, tarea) => {
    const listaActualizada = listaTareas.map((e, index) => {
      if(index === id){
        e = tarea;
      }
      return e;
    })

    setListaTareas(listaActualizada);
  }

  return (
    <Div className='main-container'>
      <TodoForm nuevaTarea={nuevaTarea} />
      
        {
          listaTareas.map((e, index) =>
            <Tarea 
              id={index} 
              tarea={e}
              filtrar={filtrarTarea} 
              key={index} 
              editar={actualizarTarea}
            />
          )
        }
    </Div>
  )
}

export default MainTarea