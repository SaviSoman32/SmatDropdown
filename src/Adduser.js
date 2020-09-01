import React, { Component } from 'react';

export default class SignIn extends Component {
    state = {
      user: '',
      privilege: false
    };
   
    handleChange = (event) => {
      const input = event.target;
      const value = input.type === 'checkbox' ? input.checked : input.value;
   
      this.setState({ [input.name]: value });
    };
   
    handleFormSubmit = (e) => {
        e.preventDefault();
        const { user, privilege } = this.state;
        localStorage.setItem('privilege', privilege);
        localStorage.setItem('user', user);
        this.setState({ user: '', privilege: false });
    };
    handleLogout = () => {
        localStorage.clear();
    };
   
    render() { 
        return (
            <form onSubmit={this.handleFormSubmit} className="add-user" autoComplete="off">
                <h1>Sign In</h1>
               <input name="user" value={this.state.user} onChange={this.handleChange} className="form-control"/>
              <br />
                <input name="privilege" checked={this.state.privilege} onChange={this.handleChange} type="checkbox" className="add-privilege"/> Privilege
              <br />
              <button type="submit" className="btn btn-add1">SignIn</button>
              <button type="submit" className="btn btn-add2" onClick={this.handleLogout}>Logout</button>
            </form>
        );
     }
}