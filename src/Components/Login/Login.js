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
                <input placeholder='Name'
                       type='text' 
                       name='name'
                       value={this.state.name} 
                       onChange={this.handleChange}/>
                <input placeholder='Favourite Quote'
                       type='text' 
                       name='quote'
                       value={this.state.quote} 
                       onChange={this.handleChange}/>
                <section>
                    <button>Novice</button>
                    <button>Intermediate</button>
                    <button>Expert</button>
                </section>
                <button>Submit</button>
            </form>
        )
    }
}

export default Login;