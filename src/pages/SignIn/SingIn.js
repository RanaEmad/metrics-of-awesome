import React from "react";
import "./SignIn.css";
import Auth from "../../services/Auth";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
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
    Auth.signIn(this.state.email, this.state.password).then((data) => {
      if (!data.auth) {
        this.setState({ error: data.msg });
      } else {
        this.props.history.push("/dashboard");
        window.location.reload();
      }
    });
  };

  render() {
    let error = "";
    if (this.state.error !== "") {
      error = <div className="error">{this.state.error}</div>;
    }
    return (
      <div className="signin">
        <div className="header-image"></div>
        <h1 className="header-title">Sign In</h1>
        {error}
        <form onSubmit={this.handleSubmit}>
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
            <input type="submit" value="Sign In" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
