import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            quote: '',
            rank: ''
        }
    }

    render() {
        return (
            <form>
                <input />
                <input />
                <section>
                    <button></button>
                    <button></button>
                    <button></button>
                </section>
                <button>Submit</button>
            </form>
        )
    }
}

export default Login;