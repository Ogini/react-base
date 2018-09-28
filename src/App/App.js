import React from 'react'
import {Row, Col, notification, Icon} from 'antd'
import 'antd/dist/antd.min.css'

import '../styles/App.scss'

const TEXT_INTERVAL = 5000
const COLOR_INTERVAL = 250

const nouns = ['ABBA', 'Agnetha', 'Benny', 'Björn', 'Annifrid']
const verbs = ['Rocks', 'Rules', 'is great!']
const messageTitles = ['ABBA Rocks', 'Oh hi there!']

const messageBodies = ['Thanks for visiting ABBA Rocks!']
const oneOf = list => {
    return list[randomUpTo(list.length)]
}
const randomUpTo = num => {
    return Math.floor(Math.random() * num)
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            noun: nouns[0],
            verb: verbs[0],
            color: '#' + randomUpTo(256*256*256).toString(16),
            textTick: setInterval(this.textTick, TEXT_INTERVAL),
            colorTick: setInterval(this.colorTick, COLOR_INTERVAL),
            textTickCount: 0
        }
    }

    colorTick = () => this.setState({color: '#' + randomUpTo(256*256*256).toString(16)})

    textTick = () => {
        this.setState({
            noun: oneOf(nouns),
            verb: oneOf(verbs),
            textTickCount: this.state.textTickCount + 1
        })
        if (this.state.textTickCount % 3 === 0) {
            notification.open({
                message: oneOf(messageTitles),
                description: oneOf(messageBodies),
                icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
            });
        }
    }

    // Make sure intervals are cleared.
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
