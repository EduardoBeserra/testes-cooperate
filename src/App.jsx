import React from 'react'
import { BrowserRouter } from "react-router-dom";

import './App.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import Logo from './componentes/template/Logo'
import Content from './componentes/content/Content'
import Header from './componentes/template/Header'
import Routes from './Routes'

export default props => (
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Header />
            <Routes />
            <Content />
        </div>
    </BrowserRouter>
)