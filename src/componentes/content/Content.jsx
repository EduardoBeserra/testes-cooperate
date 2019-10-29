import React, { useState, useEffect } from 'react'

import TelaContent from './TelaContent'
import Nav from '../menu/Nav'
import { tratarSolTeste } from "../../regras/regrasTestes";
import { getArquivos } from "../../regras/util/arquivo";

import stringTipos from '../../stringTipos'
import { getBase } from "../../regras/regrasBases";

export default () => {
    let [texto, setTexto] = useState('')
    let [tipoContent, setTipoContent] = useState('')
    let [tipoMenu, setTipoMenu] = useState('')
    let [dadosContent, setDadosContent] = useState([])
    let [dadosMenu, setDadosMenu] = useState([])
    let [socket, setSocket] = useState({})

    useEffect(() => {
        setSocket(new WebSocket('ws://prg01.datacoper.com.br:40580/websocketTeste/ws'))
    }, [])

    socket.onmessage = res => {
        let data = JSON.parse(res.data)
        switch (data.tipo) {
            case stringTipos.resTeste:
                setDadosContent(data.payload.registro || [])
                setTipoContent('testes')
                break
            default:
                break
        }
    }

    async function fazerRequisicao(msg) {
        if(msg.includes('testes:')) {
            socket.send(JSON.stringify(await tratarSolTeste(msg)))
        } else if(msg.toLowerCase().includes('listar testes')) {
            setarDadosMenu('desenv')
        }
    }

    async function setarDadosMenu(base) {
        let b = getBase(base)
        let diretorios = ''
        if(b.source_paths)
            b.source_paths.forEach(dir => diretorios += dir + ',')

        const testes = await getArquivos('*.spec', diretorios)
        setDadosMenu(testes)
        setTipoMenu('listar-testes')
    }

    const keyPress = event => {
        if (event.key === 'Enter') {
            if (texto) {
                fazerRequisicao(texto)
                setTexto('')
            }
        }
    }

    return (
        <>
            <TelaContent tipo={tipoContent} dados={dadosContent} />
            <Nav tipo={tipoMenu} dados={dadosMenu} onChange={setarDadosMenu} ws={socket}/>
            <div className='footer-area'>
                <input type="text" id="mensagem" value={texto}
                    onChange={evt => setTexto(evt.target.value)}
                    onKeyPress={evt => keyPress(evt)}
                />
            </div>
        </>
    )
}