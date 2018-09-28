import React from 'react'
import {Row, Col, notification, Icon} from 'antd'
import 'antd/dist/antd.min.css'

import '../styles/App.scss'

const nouns = ['ABBA', 'Agnetha', 'Benny', 'Björn', 'Annifrid']
const verbs = ['Rocks', 'Rules', 'is great!']

const randomUpTo = num => {
    return Math.floor(Math.random() * num)
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            noun: nouns[randomUpTo(nouns.length)],
            verb: verbs[randomUpTo(verbs.length)],
            color: '#' + randomUpTo(256*256*256).toString(16),
            textTick: setInterval(this.textTick, 5000),
            colorTick: setInterval(this.colorTick, 250),
            textTickCount: 0
        }
    }

    colorTick = () => {
        this.setState({
            color: '#' + randomUpTo(256*256*256).toString(16)
        })
    }

    textTick = () => {
        this.setState({
            noun: nouns[randomUpTo(nouns.length)],
            verb: verbs[randomUpTo(verbs.length)],
            textTickCount: this.state.textTickCount + 1
        })
        if (this.state.textTickCount % 3 === 0) {
            notification.open({
                message: 'ABBA Rocks',
                description: 'Thanks for visiting ABBA Rocks!',
                icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
            });
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.state.textTick)
        clearInterval(this.state.colorTick)
    }

    render() {
        return (
            <div>
                <Row type="flex" justify="center" align="top">
                    <Col span={8} className="centered huge" style={{color: this.state.color}}>{this.state.noun}</Col>
                </Row>
                <Row type="flex" justify="center" align="top">
                    <Col span={8} className="centered large" style={{color: this.state.color}}>{this.state.verb}</Col>
                </Row>
            </div>
        )
    }
}

export default App
