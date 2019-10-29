import React from 'react'
import If from '../template/If'

export default props => {
    const {teste} = props
    return (
        <li className="teste-item">
            <i className={`fa fa-${teste.status ? 'check flg-ok' : 'times flg-erro'}`}></i>
            <strong> {teste.teste}</strong>
            <div className="tempo">{teste.tempo}ms</div>
            <If test={!teste.status}>
                <button className="btn-item" onClick={() => props.clickErro(teste.valTeste, teste.valEsperado)}>
                    <i className="fa fa-eye"></i>
                </button>
            </If>
        </li>
    )
}