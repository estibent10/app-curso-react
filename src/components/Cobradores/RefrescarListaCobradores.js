import React from 'react'

const RefrescarListaCobradores = (props) => {
    return (
        <>
            <button type="button" className="btn btn-primary" onClick={props.HandleRefrescarListaCobradores} >
                <i className="fas fa-sync-alt mr-1"></i> Refrescar Lista
            </button>
        </>
    )
}

export default RefrescarListaCobradores;
