import React, { useState } from 'react'
import { getBases } from "../../../regras/regrasBases";

import stringTipos from '../../../stringTipos'

import './ListaTestes.css'

export default props => {
    const {lista} = props
    let [baseSel, setBase] = useState('desenv')
    let bases = getBases()
    let basesList = bases.sort((a, b) => a.name > b.name ? 1 : -1)

    async function execConsulta(base) {
        setBase(base)
        props.onChange(base)
    }

    const execTeste = teste => {
        const socket = props.ws
        let base = bases.filter(b => b.name === baseSel)[0].properties
        socket.send(JSON.stringify({
            tipo: stringTipos.reqTeste,
            testes: [teste],
            base
        }))
    }

    return (
        
        <>
            <select value={baseSel} onChange={e => execConsulta(e.target.value)}>
            {
                basesList.map(b => {
                    return <option key={b.name} value={b.name}>{b.name}</option>
                })
            }
            </select>

            <ul>
                {lista.map(t =>
                    <li key={t.nome}>
                        <button className="btn-teste" onClick={() => execTeste(t.nome)}>{t.nome}</button>
                    </li>)}
            </ul>
        </>
    )
}