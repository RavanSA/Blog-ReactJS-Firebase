import React, {useEffect, useState} from "react";
import {Card, CardContainer, PopularBlogsContainer,PopularTitle} from "../Blogs/CardDesign";
import PopularBlog from "./PopularBlog";
import firebase from "../config/firebaseconfig" ;

const PopularPosts = () => {
    // const [info , setInfo] = useState([]);
    const [id , setId] = useState([]);

    useEffect(()=>{
        const Fetchdata =
        firebase.firestore().collection("blogs")
            .orderBy("viewCount","desc")
            .limit(5)
            .get().then((querySnapshot) => {

            // querySnapshot.docs.map((doc) => ({
            //     setId(doc.data() => [...doc.data() , doc.id])
            // }
            // ))
            querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            console.log("QUERY",querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            )
            querySnapshot.forEach(element => {

                const data = element.data();
                // setInfo(arr => [...arr , data]);
                setId(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                )
            });

        })

    }, [])

    // console.log(info.length)
    return (
            <>
            <PopularBlogsContainer>
                <CardContainer>
                    <Card >
                        <PopularTitle>
                            Popular Blogs
                        </PopularTitle>
                        {console.log("ID",id)}
                        {  id.map((data) => (
                                <PopularBlog title={data.title}
                                       content={data.content}
                                       imageUrl={data.imageUrl}
                                        id={data.id}/>
                            ))
                        }
                    </Card>
                </CardContainer>
            </PopularBlogsContainer>
            </>
        );
    }


// const mapStateToPropss = (state) => {
//     return {
//         popularBlogs: state.firestoreReducer.ordered.blogs
//     }
// }
//
// export default compose(
//     connect(mapStateToPropss),
//     firestoreConnect(props => [
//         {
//             collection: 'blogss',
//             storeAs: 'memberships',
//             where: [['countView', '>', 0]],
//         },
//     ])
// )(PopularPosts);

export default PopularPosts;

