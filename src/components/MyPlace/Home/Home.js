import React from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import { directive } from '@babel/types';

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="Home" id="home">
                <div>
                    <BriefPart></BriefPart>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div></div>
            </div>
        )
    }
}

class BriefPart extends  React.Component {
    render() {
        return (
            <div className="BriefPart">
                <h4>王坤，下午好!</h4>
                <div className="part1">1.创建账号</div>
                <div className="part1">2.创建产品</div>
                <div className="part1">3.创建需求</div>
            </div>
        )
    }
}

// ReactDOM.render(<BriefPart />, document.getElementById('home'));