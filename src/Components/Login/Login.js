import React, { Component } from 'react';
import './Login.scss';
import { NavLink } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            quote: '',
            rank: ''
        }
    }

    handleChange = (e) => {
        e.preventDefault();
       this.setState({ [e.target.name] : e.target.value })
    }

    sendUpState = () => {
       const { userInfo } = this.props;
       userInfo(...this.state);
    }

    render() {
        return (
            <form>
                <input placeholder='Must Name Here'
                       type='text' 
                       name='name'
                       value={this.state.name} 
                       onChange={(e) => this.handleChange(e)}/>
                <input placeholder='Quote Favourite'
                       type='text' 
                       name='quote'
                       value={this.state.quote} 
                       onChange={(e) => this.handleChange(e)}/>
                <section>
                    <button name='rank' value='Novice' onClick={(e) => this.handleChange(e)} >Novice</button>
                    <button name='rank' value='Intermediate' onClick={(e) => this.handleChange(e)}>Intermediate</button>
                    <button name='rank' value='Expert' onClick={(e) => this.handleChange(e)}>Expert</button>
                </section>
                <NavLink to='/movies' className='submit-btn' onClick={this.sendUpState} >Submit</NavLink>
            </form>
        )
    }
}

export default Login;