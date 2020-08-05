import React from "react";
import "./SignUp.css";
import Auth from "../../services/Auth";
import { Redirect } from "react-router-dom";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    Auth.signUp(this.state.name, this.state.email, this.state.password).then(
      (data) => {
        if (!data.auth) {
          this.setState({ error: data.msg });
        } else {
          this.props.history.push("/dashboard");
          window.location.reload();
        }
      }
    );
  };

  render() {
    let error = "";
    if (this.state.error !== "") {
      error = <div className="error">{this.state.error}</div>;
    }
    return (
      <div className="signup">
        <div className="header-image"></div>
        <h1 className="header-title">Sign Up</h1>
        {error}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
