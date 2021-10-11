import React, {useState} from "react";
import firebase from "../config/firebaseconfig";
import {CardContainer,Card} from "../Blogs/CardDesign";
import PopularBlog from "../dashboard/PopularBlog";
import {SearchBoxButtonContainer, SearchInput} from "./NavbarElements";

const SearchBox = () => {

    const [search , setSearch] = useState([]);
    const [placeholderText, setPlaceholderText] = useState(true);
    const [searchValue,setSearchValue] = useState("");
    // const blogss = [];

    const onClickHandler = (e) => {
        setPlaceholderText(!placeholderText)
    }

    const onValueHandler = (e) => {
        setSearchValue(e.target.value);
    }
    console.log("SEARCHVALL",searchValue)
    const getBlog = () => {
        const Fetchdata =
            firebase.firestore().collection("blogs")
                .where("title", '<=', searchValue)
                .where("title", '>=', searchValue)
                .limit(10)
                .get().then((querySnapshot) => {
                querySnapshot.forEach(element => {
                    console.log("ELEMENT",element)
                    const data = element.data();
                    if(search.length < 5 ){
                        setSearch(arr => [...arr , data])
                    }
                    // blogss.push(data);
                })

            })
        return search;
    }

    return(
      <>
          {/*{console.log(getBlog())}*/}
          {console.log("BLOGGSARRR", getBlog())}
          <SearchBoxButtonContainer>
              <SearchInput type="text" id="search" placeholder={placeholderText ?  "Search" : "Type to search"}
                           onFocus={onClickHandler}
                           onBlur={onClickHandler}
                           onChange={onValueHandler}
              />
              {/*<SearchBox searchValue={searchValue}/>*/}
          </SearchBoxButtonContainer>

          {console.log("IDSEARCH",search)}
          {search.length > 0 ? search.map((data, i, arr) => {
                  return (
                      <CardContainer>
                      <Card key={i}>
                          {/*{  const previousItem = arr[i - 1];}*/}
                          {i> 0 && arr[i - 1].imageUrl !== data.imageUrl
                          ? <p>{data.title}</p> : <p></p>}
                      </Card>
                      </CardContainer>
                  )})

          : <p>Cannot Find any result </p>}

      </>
    );

}


export default SearchBox;