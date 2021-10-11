import React, {Component} from "react";
import {
    SignInBtn,
    TextArea} from "../auth/SignInElements";
import {connect} from "react-redux";
import commentaction from "../store/action/commentaction";


class NewComment extends Component{

    state = {
        content:""
    }

    onClickLoading = () => {
        this.setState({ loading: true });
    };

    handleChangee = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmitt (e) {
        e.preventDefault();
        const id = window.location.pathname.split("blog/");
        console.log(id)
        // const {content} = this.state
        this.props.commentaction(this.state)

    }

    render() {
        // const authStatus = JSON.parse(localStorage.getItem('LoginStatus'));
        // // if(!authStatus.uid) return <Redirect to="/signin"/>

        return(
            <>
                <form onSubmit={this.handleSubmitt.bind(this)} >
                    <TextArea type="text" id="content" cols="30" rows="10" placeholder="Content" onChange={this.handleChangee} />
                        <SignInBtn disabled={this.state.loading}
                                   >
                            {this.state.loading && <span> Loading ... </span>}
                            {!this.state.loading && <span>Add Blog</span>}
                        </SignInBtn>
                </form>
            </>
        );
    }
}


const mapDispatchToProps = (dispatch) =>{
    const id = window.location.pathname.split("blog/");
    return{
        commentaction: (comment) => dispatch(commentaction(comment))
    }
}


export default connect(null, mapDispatchToProps)(NewComment);