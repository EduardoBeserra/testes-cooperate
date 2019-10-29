import React from 'react'

import Testes from '../Teste/Testes'
import TelaDefault from './TelaDefault'
import If from '../template/If'

export default props => {

    return (
        <div className='content-area'>
            <If test={props.tipo === 'testes'}>
                <Testes lista={props.dados} />
            </If>
            <If test={!props.tipo}>
                <TelaDefault />
            </If>
        </div>
    )
}