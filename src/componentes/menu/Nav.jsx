import React from 'react'

import If from '../template/If'
import NavDefault from './NavDefault'

import './Nav.css'
import ListaTestes from './ListaTestes/ListaTestes'

export default props =>
    <div className='menu-area'>
        <If test={props.tipo === 'listar-testes'}>
            <ListaTestes lista={props.dados} onChange={props.onChange} ws={props.ws} />
        </If>
        <If test={!props.tipo}>
            <NavDefault />
        </If>
    </div>
