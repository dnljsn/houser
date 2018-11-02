import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            nameInput: "",
            addressInput: "",
            cityInput: "",
            stateInput: "",
            zipInput: 0,
            img: "https://www.solarplants.org.uk/wp-content/uploads/2017/08/Image-Goes-Here-2.png",
            mortgage: 0,
            rent: 0
        };
    }

    //this.state.nameInput = this.state.nameInput.bind

    userInputName(val) {
        this.setState({
            nameInput: val
        })
    }

    userInputAddress(val) {
        this.setState({
            addressInput: val
        })
    }

    userInputCity(val) {
        this.setState({
            cityInput: val
        })
    }

    userInputState(val) {
        this.setState({
            stateInput: val
        })
    }

    userInputZip(val) {
        var text = val;
        var num = parseInt(text, 10);
        this.setState({
            zipInput: num
        })
    }

    addHouse(obj) {
        let promise = axios.post(`/api/houses`, {
            addHouse: obj
        })
        promise.then(response => {
            console.log(response.data)
            this.setState({
                nameInput: "",
                addressInput: "",
                cityInput: "",
                stateInput: "",
                zipInput: 0
            });
            //change page here

        })
        console.log("end of button click parent")
    }

    render() {
        return (
            < div >
                <Link to="/">
                    <button>Cancel</button>
                </Link>
                <input
                    placeholder="Name"
                    value={this.state.nameInput}
                    onChange={(e) => this.userInputName(e.target.value)}
                />
                <input
                    placeholder="Adress"
                    value={this.state.addressInput}
                    onChange={(e) => this.userInputAddress(e.target.value)}
                />
                <input
                    placeholder="City"
                    value={this.state.cityInput}
                    onChange={(e) => this.userInputCity(e.target.value)}
                />
                <input
                    placeholder="State"
                    value={this.state.stateInput}
                    onChange={(e) => this.userInputState(e.target.value)}
                />
                <input
                    placeholder="Zip"
                    value={this.state.zipInput}
                    onChange={(e) => this.userInputZip(e.target.value)}
                    type="number"
                />
                <button
                    onClick={() => this.addHouse(this.state)}
                > Submit</button>
            </div >
        )
    }
}

export default Wizard;