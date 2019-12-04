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
        // e.preventDefault();
       this.setState({ [e.target.name] : e.target.value })
    }

    sendUpState = (e) => {
       e.preventDefault();
       const { userInfo } = this.props;
       userInfo(this.state);
    }

    render() {
        const { name, rank, quote } = this.state;
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
                <p>What Knowledge have you from Star Wars?</p>
                <section>
                    <button type='button' name='rank' value='Novice' onClick={(e) => this.handleChange(e)} >Novice</button>
                    <button type='button' name='rank' value='Intermediate' onClick={(e) => this.handleChange(e)}>Intermediate</button>
                    <button type='button' name='rank' value='Expert' onClick={(e) => this.handleChange(e)}>Expert</button>
                </section>
                { name === '' || quote === '' || rank === '' ? 
                ( <button className='submit-btn-error' disabled='true'> Inputs Must Fill </button>)
                : 
                 (<NavLink to='/movies' className='submit-btn' onClick={(e) => this.sendUpState(e)} >Submit</NavLink> )
                }
            </form>
        )
    }
}

export default Login;