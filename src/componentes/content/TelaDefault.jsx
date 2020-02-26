import React from 'react'

import './styles.css'

export default props => {
    return (
        <div className="content-default">
            <h5>Comandos que pode utilizar:</h5>
            <p><b>listar testes</b></p>
            <p><b>testes:</b> fontes de teste, separados por vírgula <b>base:</b> nome da base</p>
            <p><b>baixar </b>diretório/arquivo</p>
        </div>
    )
}