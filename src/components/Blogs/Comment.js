import {CommentStyle, Card, CardContainer, ProfImage} from "./CardDesign";
import React from "react";

const Comment = ({comments}) => {

        return(
        <>
        {comments  && comments.map((comment) => {
            return(
                <CommentStyle key={comment.id}>
                    {/*{console.log(countComments)}*/}
                    <CardContainer>
                        <Card>
                                <p><b> <ProfImage src={comment.commentAuthorImage} alt=""/>
                                          {comment.authorFirstname} {comment.authorLastname}</b></p>
                                <p>{comment.content}</p>
                            {/*{console.log("COMMM",comment.authorFirstname)}*/}
                        </Card>
                    </CardContainer>
                </CommentStyle>
            )})}
            {/*{console.log("COMMENTS",countComments)}*/}
        </>
)
}

export default Comment;