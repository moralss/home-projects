import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;

}

  html{
    background-color:rgb(83, 81, 81);
    font-family: 'Times New Roman';    
}


  button{
      background-color:rgb(64, 192, 107);
      color:white;
      border:none;
      text-transform: uppercase; 
      font-size:0.7rem;
      border-radius:0.3rem;
  }
`;



export const HeaderLarge = styled.h1`
  font-size:2.5rem;
  font-weight:200;
  font-family: serif;
  color: rgb(177,106,106);
  margin-bottom:2rem;
`


export const ProfileContainer = styled.div`
text-transform:uppercase;

h3{
    font-family:sans-serif;
    font-weight:200;
    color: rgb(177, 106, 106);
}


span{
    font-size:1.3rem;

}

`

export const FormSide = styled.form`
  display:grid;
  grid-template-columns:1fr 2fr;
  grid-template-row:1fr 1fr;
  font-size:1rem;
  font-weight:200;
  margin-bottom:2rem;

  label{
    display:block;
    grid-row-start:3
    grid-row-end:1;
    grid-column-start:1;
    grid-column-end:1;
    justify-self:end;
    // align-self:center;
  }

  button{
    width:5rem;
    justify-self:center;    
    margin-right:-4rem;
    height:2.3rem;
}

`



export const ListWrapper = styled.div`
    display:grid;
    grid-gap:2rem;
    margin:2rem;

`



export const ViewTotalContainer = styled.div`
display:flex;
justify-content:center;
p{
    margin:1rem;
}
`


export const Text = styled.p`
    font-size:1rem;
    margin-top:1rem;
    margin-left:0.5rem;
    margin-right:0.5rem;
`

export const Button = styled.button`
    width:5rem;
    justify-self:center;    
    height:2.3rem;
    margin-bottom:1rem;

`


export const Button1 = styled.button`
    width:5rem;
    justify-self:center;    
    height:2.3rem;
`

export const LinksContainer = styled.div`
    display:grid;
    justify-content:center;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-gap:1rem;
    padding-left:3rem;
    padding-right:3rem;

    a{
        display:flex;
        justify-content:center;
    }    
`



export const ViewCommentsContainer = styled.div`
    display:grid;
    justify-content:center;
    grid-gap:2rem;
    padding:2rem;
    background-color: rgb(216, 207, 207);
    text-align:left;

    margin-left:6rem;
    margin-right:6rem;
    margin-top:2rem;

    p{
        padding:1rem;
        font-size:1.5rem;
        // font-weight:400;
        font-family: 'Times New Roman';

    }

    li{
        list-style: none;

    }
`


export const ViewCommentsWrapper = styled.div`
    display:grid;
    grid-gap:2rem;
    background-color: rgb(250, 248, 248);
    box-shadow:3px 0px 3px 3px grey;
`



export const ViewContainer = styled.div`
    display:grid;
    grid-gap:2rem;
    background-color: rgb(250, 248, 248);
    box-shadow:3px 0px 3px 3px grey;
`

export const TextArea = styled.textarea`
    width:15rem;
    height:4rem;
    margin-right:6rem;
`

export const ContainerMenu = styled.div
    `
display:grid;
grid-gap:20px;

`

export const AddBlogContainer = styled.div`
    margin:3rem;
    margin-left:6rem;
    margin-right:6rem;


    padding-top:2rem;
    padding-bottom:2rem;


    background-color: rgb(216, 207, 207);
`




/////////////////////////////////////////////////////////////////////
// authorblogs

// ViewTotalContainer




export const AuthorBlogsContainer = styled.div`
display:grid;
grid-gap:2rem;
justify-content:center;

 margin:3rem;
 background-color: rgb(216, 207, 207);
 padding-top:2rem;
 padding-bottom:2rem;

 margin-left:6rem;
 margin-right:6rem;
`




/////////////////////////////////////////////////////////////////////
// view blogs




export const Paragraph = styled.p`
    // background-color:blue;
`




export const ViewBlogsWrapper = styled.div`
//  display:grid;
 grid-template-columns:    repeat(1 , 1fr);
justify-self:start;
background-color:white;
padding-left:4rem;
padding-right:4rem;
padding:1rem;
margin:1rem;
text-align:left;



h1{
    font-size:1.4rem;
    margin:1rem;
    // margin:1rem;
}


p{
 
    padding:1rem;
}

span{
    margin:1rem;
}

li{
    margin-top:2rem;
}

`



export const ViewBlogsContainer = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr;
// grid-gap:1rem;
justify-content:center;
margin:3rem;
background-color: rgb(216, 207, 207);
padding-top:2rem;
padding-bottom:2rem;

margin-left:6rem;
margin-right:6rem;

h1{
    grid-column-end:4;
    grid-column-start:1;
}
`

///////////////////////////////////////////////////////

export const Nav = styled.div`
background-color: rgb(216, 207, 207);
display:grid;
grid-template-columns: 1fr 8rem 6rem 6rem;
margin-left:6rem;
margin-right:6rem;
padding-top:1rem;
padding-bottom:1rem;
margin-top:3rem;

li:nth-child(1){
    font-size:1rem;
    align-items: center;
    justify-self: start;
    padding-left:1rem;
}


li{
    justify-self:center;
    align-self:center;
    list-style:none;
}


a{
    color:black;
    text-decoration:none;
}



button{
    justify-self:center;
}




`
/////////////////////////////////////////////////////////



export const Container = styled.ul`
  height:10rem;
  margin:5rem;
`