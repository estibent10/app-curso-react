import React from 'react'

const RefrescarListaOperadores = (props) => {
    return (
        <>
            <button type="button" className="btn btn-primary" onClick={props.HandleRefrescarListaOperadores} >
                <i className="fas fa-sync-alt mr-1"></i> Refrescar Lista
            </button>
        </>
    )
}

export default RefrescarListaOperadores;
