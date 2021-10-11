import React, {Component} from "react";
import {SignInContainer,
    SignInH5,
    SignInInputField,
    Input,
    SignInBtn} from "./SignInElements";
import {signupaction} from "../store/action/authaction";
import { connect } from "react-redux"
import {isEmpty} from "react-redux-firebase";
import {storage} from "../config/firebaseconfig";

class SignUp extends Component{

    state = {
        email: "",
        password:"",
        firstName:"",
        lastName:"",
        err: null,
        profImage: null,
        profImageUrl: ""
    }

    handleProfImage = (e) => {
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState(() => ({
                profImage: image}));
        }
        const img = this.state.profImage;
        console.log("IMAGEEE",img)
    }

    handleChange = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {firstName,lastName,profImage} = this.state;


        if(!isEmpty(firstName) || !isEmpty(lastName)){
            this.setState({
                err: ""
            })
            const upload = storage.ref(`users/${profImage.name}`).put(profImage);
            upload.on("state_changed",
                (snapShot) => {
                },(err) => {
                    console.log(err)
                }, () => {
                    storage.ref(`users/${profImage.name}`).getDownloadURL()
                        .then((url) => {
                            console.log("aaaa", url)
                            this.setState({
                                profImageUrl: url
                            });
                            if (this.state.profImageUrl !== "" ) {
                                this.setState({
                                    loading: false,
                                    err:""
                                })
                                this.props.signupaction(this.state)
                            }
                        })
                });
        } else {
            this.setState({
                err: "First and last name cannot be empty"
            })
        }
    }


    render() {
        const {authError} = this.props
        const {err} = this.state;
        return(
            <>
                <SignInContainer onSubmit={this.handleSubmit} >
                    <SignInH5>Registration</SignInH5>
                    <SignInInputField>
                        <Input type="text" id="email" placeholder="Email" onChange={this.handleChange} />
                    </SignInInputField>
                    <SignInInputField>
                        <Input type="text" id="firstName" placeholder="First Name" onChange={this.handleChange} />
                    </SignInInputField>
                    <SignInInputField>
                        <Input type="text" id="lastName" placeholder="Last Name" onChange={this.handleChange} />
                    </SignInInputField>
                    <SignInInputField>
                        <Input type="password" id="password"  placeholder="Password" onChange={this.handleChange} />
                    </SignInInputField>
                    <SignInInputField>
                        <Input type="file" onChange={this.handleProfImage} />
                    </SignInInputField>
                    <SignInInputField>
                        <SignInBtn>Register</SignInBtn>
                    </SignInInputField>

                    {authError ? <p>{authError}</p> : null}
                    {err ? <p>{err}</p> : null}
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

const mapDispatchToProps = (dispatch) => {
    return{
        signupaction: (user) => dispatch(signupaction(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);