import styled from "styled-components";

export const CardContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 100%;
  height: 100%;
  //border: 5px solid #333;
  color: black;

  margin-top: 30px;
  align-items: center;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

`

export const Card = styled.div`
    padding: 2px 16px;
  color: black;
  height: 100%;
`

export const BlogHeight = styled.div`
    height: auto;

  @media screen and (max-width: 768px){
    height: auto;
  }
`

export const BlogStyle = styled.div`
    width: 100%;
    height:100%;
`;

export const H3= styled.h3`
  overflow-wrap: break-word;
`

export const H1= styled.h1`

`

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: calc(100%/2);
  height: calc(100%/2);

  @media screen and (max-width: 768px){
    width: 220px;
    height: 250px;
  }
`

export const CommentStyle = styled.div`
    margin: 0;
`


export const BlogCard = styled.div`
  margin: 0;
  display: flex;
  margin-bottom: 2rem;
  height: 10%;
  @media screen and (max-width: 900px){
    flex-direction: column;
    border: none;
  }
`

export const BlogImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 200px; 
  height: 200px;
  
  @media screen and (max-width: 768px) {
    width: auto;
    height: auto;
  }
  

`

export const ProfImage = styled.img`
  border-radius: 70%;
  width:30px;
  height:30px;
`

export const BlogText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  @media screen and (max-width: 900px){
   flex-direction: column;
  }
`

export const BlogH1 = styled.div`
  font-size: 1.5rem;
  margin-top: -10px;
  font-weight: 400;
  position: relative;
  min-height: 150px;
  margin-left: 50px;
  display: flex;
  flex-direction: row;
  
  @media screen and (max-width: 900px){
    font-size: 1rem;
    flex-direction: column;
    margin-left: 20px;
    margin-top: -40px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

export const BlogAuthorInfo = styled.div`
  margin-top: 120px;
  position: absolute;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 900px){
    flex-direction: column;
    margin-top: 80px;
  }
`

export const BlogP = styled.div`
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 400;
  position: absolute;
  margin-top:80px ;
  display: flex;
  flex-direction: row;
  white-space: nowrap;

  @media screen and (max-width: 900px){
    flex-direction: column;
    margin-top: 60px;
    line-height: 1;
  }
`

export const CardCommentH1 = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  line-height: 1.4;
  font-weight: 400;
`

export const NavCommentBtn = styled.div`
  display: flex;
  flex-direction: row;
`

export const WeatherCityName = styled.div`
    display: flex;
  flex-direction: row;

`

export const WeatherImage = styled.img`
    width: 70px;
  height: 70px;
  margin-top: 15px;

`
export const WeatherDetail = styled.div`
    padding: 0;
  margin-top: -35px;
  line-height: normal;
`

export const AuthorName = styled.div`
  white-space: nowrap;
    font-size: 1rem;
  margin-top: -80px;
  margin-left: 35px;
  font-weight: bold;
`

export const CountView = styled.div`
  white-space: nowrap;
    font-size: 1rem;
  margin-left: 5px;
  margin-top: 18px;
  font-weight: bold;
`

export const PopularBlogsContainer = styled.div`
    height: auto;
`

export const PopularBlogContainer = styled.div`
    display: flex;
  flex-direction: row;
  margin-top: 5px;
`

export const PopImage = styled.img`
  display: flex;
  flex-direction: row;
    width: 50px;
  height: 70px;
`
export const PopBlog = styled.div`
    display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const PopTitle = styled.div`
    display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  line-height: 15px;
  margin-top: 5px;
  text-decoration: none;
  color: black;
`

export const PopContent = styled.div`
    display: flex;
  flex-direction: column;
  white-space: nowrap;
  margin-top: -15px;
  font-size: 1rem;
  text-overflow: "----";
  color: black;
  text-decoration: none;
;
`

export const PopularTitle = styled.div`
    font-size: 2rem;
  text-align: center;
  margin: 0;
`

export const LoaderContainer= styled.div`
  height: 10em;
  display: flex;
  align-items: center;
  justify-content: center
`