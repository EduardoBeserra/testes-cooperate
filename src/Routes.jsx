import React from 'react'
import { Switch, Redirect } from "react-router";

export default props =>
    <Switch>
        <Redirect from='*' to='/' />
    </Switch>