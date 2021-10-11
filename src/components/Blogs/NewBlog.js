import React, {Component, useState} from "react";
import {SignInContainer,
    SignInH5,
    SignInInputField,
    Input,
    SignInBtn,
    TextArea} from "../auth/SignInElements";
import {connect} from "react-redux";
import blogaction from "../store/action/blogaction";
import {Redirect} from "react-router-dom";
import {storage} from "../config/firebaseconfig";
import {isEmpty} from "react-redux-firebase";

let eerr = "error";

class NewBlog extends Component {



    state = {
        title: "",
        content:"",
        image: null,
        imageUrl: "",
        loading: false,
        err:"",
        noerr: true
    }

    onClickLoading = () => {
        this.setState({ loading: true });
    };

    handleChangee = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleImageChange = (e) => {
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState(() => ({
                image: image}));
        }
        const img = this.state.image;
        console.log("IMAGEEE",img)
    }




     handleSubmitt (e) {
         e.preventDefault();
         const {image} = this.state;
         // console.log("IMAGETEST",image)
         let controller = true;
         console.log(controller)
         this.setState({
             loading: true,
            noerr:true});



         if (isEmpty(this.state.title)){
             this.setState({
                 err: "Title can not empty",
                 loading: false
             })
         }
         else if(isEmpty(this.state.content)){
             this.setState({
                 err: "Content can not empty",
                 loading: false
             })
         } else if (this.state.content.length < 50){
             this.setState({
                 err: "Your content is not long enough",
                 loading: false
             })
         } else if (image === null){
             this.setState({
                 err: "You need to upload an image",
                 loading: false
             })
         }  else {
             console.log("INSIDE ELSE",this.state.err)
             this.setState({
                 err: "",
             })
             eerr = "";
         }

         console.log(eerr)

         console.log("controller",controller);
         console.log("IMAGEENULLLL",image);
         console.log("ERR",this.state.err)
         if (controller && eerr === "" && image !== null) {
             console.log("TEST")
         const upload = storage.ref(`images/${image.name}`).put(image);
         upload.on("state_changed",
             (snapShot) => {
             },(err) => {
                 console.log(err)
             }, () => {
             storage.ref(`images/${image.name}`).getDownloadURL()
                 .then((url) => {
                     console.log("aaaa", url)
                     this.setState({
                         imageUrl: url
                     });
                     if (this.state.imageUrl !== "" ) {
                         this.props.blogaction(this.state);
                         this.setState({
                             loading: false,
                             err:""
                         })
                         controller = false;
                     }
                 //
                 })
         });
     }


    }

    render() {

        const authStatus = JSON.parse(localStorage.getItem('LoginStatus'));
        // if(!authStatus.uid) return <Redirect to="/signin"/>
        console.log("IMAGE URL 2",this.state.imageUrl)


            return(
            <>
                <SignInContainer onSubmit={this.handleSubmitt.bind(this)} >
                    <SignInH5>New Blog</SignInH5>
                    <SignInInputField>
                        <Input type="text" id="title" placeholder="Title" onChange={this.handleChangee} />
                    </SignInInputField>
                    <SignInInputField>
                        <TextArea type="text" id="content" rows="15" cols="33"
                                  placeholder="Write your content here....." onChange={this.handleChangee} />
                    </SignInInputField>
                    <SignInInputField>
                        <Input type="file" onChange={this.handleImageChange} />
                    </SignInInputField>
                    <SignInInputField>
                        <SignInBtn disabled={this.state.loading}
                                   onClick={e =>
                                       window.confirm("Are you sure ?")
                                   }>
                            {this.state.loading && <span> Loading ... </span>}
                            {!this.state.loading && <span>Add Blog</span>}
                        </SignInBtn>
                    </SignInInputField>
                    <p>{this.state.err}</p>
                    </SignInContainer>
            </>
        );
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        blogaction: (blog) => dispatch(blogaction(blog))
    }
}


export default connect(null, mapDispatchToProps)(NewBlog);