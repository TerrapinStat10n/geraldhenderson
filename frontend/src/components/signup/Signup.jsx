import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        email: this.props.email,
        password: "",
        confirm: "",
      },
      signupErrorMessage: "",
      signupError: false,
      token: "",
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.credentials.email + " Email from credentials");
    if (
      this.state.credentials.email.match
      (
        /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      )
    ) {
      if (this.state.credentials.password === this.state.credentials.confirm) {
        const user = {
          username: this.state.credentials.email,
          email: this.state.credentials.email,
          password1: this.state.credentials.password,
          password2: this.state.credentials.confirm,
        };

        fetch("http://localhost:8000/api/rest-auth/registration/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        })
          .then((data) => data.json())
          .then((data) => {
            if (data.non_field_errors) {
              console.error(data.non_field_errors[0]);
            } else {
              console.log(data.key);

              if (data.email === 'A user is already registered with this e-mail address.') {
                this.setState({ signupError: true }, () => console.log(this.state.signupError));
                this.setState({ signupErrorMessage: "A user is already registered with this e-mail address."});
              } else {
                  if (typeof data.password1 !== "undefined" && data.password1[0] === 'This password is too short. It must contain at least 8 characters.') {
                    this.setState({ signupError: true }, () => console.log(this.state.signupError));
                    this.setState({ signupErrorMessage: "This password is too short. It must contain at least 8 characters."});
                  } else {
                    if (data.password1 === 'This password is too common.') {
                      this.setState({ signupError: true }, () => console.log(this.state.signupError));
                      this.setState({ signupErrorMessage: "This password is too common."});
                    } else {
                      this.setState({ signupError: false }, () => console.log(this.state.signupError));
                      this.setState({ token: data.key})
                      const { history } = this.props;
                      history.push("/login");
                    }
                  }
                }
              }
          })
          .catch((error) => console.error(error));
      } else {
        this.setState({ signupError: true }, () => console.log(this.state.signupError));
        this.setState({ signupErrorMessage: "Passwords fields must match."})
      }
    } else {
      this.setState({ signupError: true }, () => console.log(this.state.signupError));
      this.setState({ signupErrorMessage: "Enter a valid email address."})
    }
  };

  handleInputChange = (e) => {
    const cred = this.state.credentials;
    cred[e.target.name] = e.target.value;
    this.setState({ credentials: cred });
  
  };

  render() {
    
    return (
      <div>
        <div>
          <div>
            <header className="header">
              <Link to={"/"}>
                <button className="go-back-button">Go back</button>
              </Link>
            </header>
          </div>
          <div>
            <h1 className="signup-form-header">Sign Up</h1>
            <form onSubmit={this.submitHandler}>
              <div>
                <div>
                  <input
                    className="form-field-a"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.credentials.email}
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
                    value={this.state.credentials.password}
                    onChange={this.handleInputChange}
                    label="Password"
                    required
                  />
                </div>
                <div>
                  <input
                    className="form-field-c"
                    name="confirm"
                    type="password"
                    placeholder="Confirm Password"
                    value={this.state.credentials.confirm}
                    onChange={this.handleInputChange}
                    label="Confirm"
                    required
                  />
                </div>
                <div>
                  <button type="submit" className="signup-button">
                    Sign Up
                  </button>
                  <p className="signup-error">
                    {this.state.signupError
                      ? this.state.signupErrorMessage
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

function mapStateToProps(state) {
  const { token, email } = state;
  
  return { token, email };
}


export default connect(mapStateToProps, null)(Signup);