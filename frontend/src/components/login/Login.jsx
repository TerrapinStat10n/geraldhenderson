import React from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginErrorMessage: "",
      loginError: false,
      token: "",
    };

    this.submitHandler = this.submitHandler.bind(this);
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    if (
      this.state.email.match(
        /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      )
    ) {
      const user = {
        username: this.state.email,
        password: this.state.password,
      };
      fetch("http://127.0.0.1:8000/api/rest-auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((data) => data.json())
        .then((data) => {
          if (data.non_field_errors) {
            console.error(typeof(data.non_field_errors[0]));
            this.setState({ loginError: true }, () => console.log(this.state.loginError));
            this.setState({ loginErrorMessage: data.non_field_errors[0]});
          } else {
            this.setState({token: data.key})
            this.setState({ loginError: false });
            
            this.props.login(
              this.state.token
            );
            localStorage.setItem("token", this.state.token);
            const { history } = this.props;
            history.push('/');
          }
        })
        .catch((error) => {
          console.error(error.non_field_errors[0]);
        });
    } else {
      this.setState({ loginError: true }, () => console.log(this.state.signupError));
      this.setState({ loginErrorMessage: "Enter a valid email address."});
    }
  };

  render() {
    return (
      <div>
        <div className="signup-div">
          <div>
            <header className="header">
              <Link to={"/"}>
              <button className="go-back-button">Go back</button>
              </Link>
            </header>
          </div>
          <div>
            <h1 className="signup-form-header">Log In</h1>
            <form onSubmit={this.submitHandler}>
              <div>
                <div>
                  <input
                    className="form-field-a"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    label="Email"
                    required
                  />
                </div>
                <div>
                  <input
                    className="form-field-b"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    label="Password"
                    required
                  />
                </div>
                <div>
                  <button type="submit" className="signup-button">
                    Log In
                  </button>
                  <p className="login-error">
                    {this.state.loginError
                      ? this.state.loginErrorMessage
                      : ""}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(null, { login })(Login);