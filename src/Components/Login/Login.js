import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

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
       this.setState({ [e.target.name] : e.target.value })
    }

    sendUpState = () => {
       const { userInfo } = this.props;
       userInfo(this.state);
    }

    render() {
        const { name, rank, quote } = this.state;
        return (
            <form>
                <input className='user-name'
                       placeholder='Must Name Here'
                       type='text' 
                       name='name'
                       value={this.state.name} 
                       onChange={(e) => this.handleChange(e)}/>
                <input className='user-quote'
                       placeholder='Quote Favourite'
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
                ( <button className='submit-btn-error' disabled={true}> Inputs Must Fill </button>)
                : 
                 (<Link to='/movies'><button className='submit-btn' onClick={this.sendUpState}>Submit</button></Link> )
                }
            </form>
        )
    }
}

export default Login;