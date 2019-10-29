import React, { useState, useEffect } from 'react'

import TesteItem from './TesteItem'
import DescricaoTeste from './DescricaoTeste'

import './styles.css'

const initial_descErro = {
    titulo: '',
    descricao: ''
}

export default props => {

    let [descErro1, setErro1] = useState(initial_descErro)
    let [descErro2, setErro2] = useState(initial_descErro)
    let lista = props.lista

    useEffect(() => {
        setErro1(initial_descErro)
        setErro2(initial_descErro)
    }, [lista])

    const setErro = (desc1, desc2) => {
        setErro1({ titulo: "Valor Retornado", descricao: desc1 })
        setErro2({ titulo: "Valor Esperado", descricao: desc2 })
    }

    const contTestes = () => {
        let cont = 0, tok = 0, terro = 0
        if(lista) {
            lista.forEach(teste => {
                if(teste.testes) {
                    cont += teste.testes.length
                    teste.testes.forEach(t => {
                        if(t.status)
                            tok += 1
                        else {
                            terro += 1
                        }
                    })
                }
            })
        }
        return [cont, tok, terro]
    }

    let [cont, tok, terro] = contTestes()

    return (
        <div className="content-testes">
            <div className="content-testes-left">
                <ul className="teste-list">
                    {
                        lista.map(teste => {
                            let erro = teste.testes.filter(t => !t.status).length > 0
                            return (
                                <li key={`${teste.programa}`}>
                                    <i className={`fa fa-${!erro ? 'check flg-ok' : 'times flg-erro'}`}></i>
                                    {teste.programa}
                                    <ul className="teste-list">
                                        {
                                            teste.testes.map(t => {
                                                return (
                                                    <TesteItem key={t.teste} teste={t} clickErro={setErro} />
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="teste-totais">
                    Total de testes: {cont}
                    <div className="teste-ok">Passou: {tok}</div>
                    <div className="teste-erro">Erro: {terro}</div>
                </div>
            </div>
            <div className="content-testes-right">
                <div className="t-right-1">
                    <DescricaoTeste titulo={descErro1.titulo} descricao={descErro1.descricao} />
                </div>
                <div className="t-right-2">
                    <DescricaoTeste titulo={descErro2.titulo} descricao={descErro2.descricao} />
                </div>
            </div>
        </div>
    )
}