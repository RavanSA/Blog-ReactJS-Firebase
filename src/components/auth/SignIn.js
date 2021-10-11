import React, {Component} from "react";
import {SignInContainer,
        SignInH5,
        SignInInputField,
        Input,
        SignInBtn} from "./SignInElements";
import {connect} from "react-redux";
import {signinaction} from "../store/action/authaction"
import {isEmpty} from "react-redux-firebase";
import {Redirect} from "react-router-dom";

class SignIn extends Component{

    state = {
        email: "",
        password:"",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signin(this.state)
    }


    render() {
        const {authError} = this.props;
        const authStatus = JSON.parse(localStorage.getItem('LoginStatus'));
        // console.log(authStatus)
        // // if(authStatus && isEmpty(authError)) return <Redirect to="/"/>

        return(
            <>
                <SignInContainer onSubmit={this.handleSubmit} >
                        <SignInH5>Welcome</SignInH5>
                        <SignInInputField>
                            <Input type="text" id="email" placeholder="Email" onChange={this.handleChange} />
                        </SignInInputField>
                        <SignInInputField>
                            <Input type="password" id="password"  placeholder="Password" onChange={this.handleChange} />
                        </SignInInputField>
                        <SignInInputField>
                            <SignInBtn>Login</SignInBtn>
                        </SignInInputField>
                    {authError ? <p>Incorrect Username or Password</p> : null}
                </SignInContainer>
            </>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        authError: state.authReducer.authError
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        signin: (credentials) => dispatch(signinaction(credentials))
    }
}

export default connect(mapStateToProps,mapDispathToProps )(SignIn);