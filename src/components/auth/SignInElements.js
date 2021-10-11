import styled from "styled-components";

export const SignInContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80px;
  width: 30px;
  border-radius: 10px;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -300px;
  margin-left: -200px;
  
  @media screen and (max-width: 768px) {
    width: 80vw;
    height: 80vh;
    margin-left: -140px;
    margin-top: -200px;

    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  } 
  
  @media only screen and (min-width: 768px) {
  width: 80vw;
  height: 80vh;
}
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
  //@media only screen and (min-width: 360px) {
  //  width: 80vw;
  //  height: 90vh;
  //  h4 {
  //    font-size: small;
  //  }
  //}
  //@media only screen and (min-width: 411px) {
  //  width: 80vw;
  //  height: 90vh;
  //}
  //

`

export const SignInH5 = styled.h2`
  margin: 3rem 0 2rem 0;
`

export const SignInInputField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

export const Input = styled.input`
  width: 80%;
  height: 1rem;
  padding: 1rem;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  align-items: center;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;


export const TextArea = styled.textarea`
  width: 80%;
  height: 6rem;
  padding: 1rem;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  align-items: center;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const SignInBtn = styled.button`
  background: #01bf71;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`