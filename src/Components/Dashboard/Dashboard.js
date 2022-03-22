import React, { Component } from 'react'
import Form from '../Form/Form'
import Notifications from './Notifications'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <Form />
            </div>
        )
    }
}

export default Dashboard