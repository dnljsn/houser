import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import House from '../House/House';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            listOfHouses: []
        }
        this.deleteClick = this.deleteClick.bind(this)
    }

    componentDidMount() {
        axios.get('/api/houses').then(response => {
            this.setState({ listOfHouses: response.data })
        })
    }

    getHouses() {
        axios.get('/api/houses').then(response => {
            this.setState({ listOfHouses: response.data })
        })
    }

    deleteClick(id) {
        let promise = axios.delete(`/api/houses/${id}`)
        promise.then(response => {
            this.getHouses()
        })
    }

    render() {
        const houses = this.state.listOfHouses.map(function (element, i) {
            return (
                <div key={i}>
                    <House
                        listOfHouses={element}
                        deleteClick={this.deleteClick()}
                    />
                </div>
            )
        })
        console.log(this.state.listOfHouses)
        return (
            <div>
                <Link to="/Wizard">
                    <button>Add New Property</button>
                </Link>
                <main>
                    {houses}
                </main>
            </div>
        )
    }
}

export default Dashboard;