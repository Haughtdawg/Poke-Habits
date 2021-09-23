import React from 'react';
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export function AddTaskContainer(){

    return(
        <div>
            <span><FontAwesomeIcon icon={ faPlus } /></span>
            <span></span>
            <span></span>
        </div>
    )
}