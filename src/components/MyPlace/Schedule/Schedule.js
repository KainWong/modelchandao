import React from 'react';
import './Schedule.css';
import { directive } from '@babel/types';

export default class Schedule extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="Home">
                <div>这是日程</div>
                <div></div>
            </div>
        )
    }
}