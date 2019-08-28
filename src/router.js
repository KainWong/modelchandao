import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from '../src/components/MyPlace/Home/Home';
import { directive } from '@babel/types';

export default class RouterComponent extends React.Component{
    render() {
        return (
            <div>
                <Route path="/home" component={Home}/>
            </div>
            
        )
    }
}