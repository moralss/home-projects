import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;

}

  html{
    line-height:1.3rem;
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
      transition: all;
      transition-duration: 1s;
    //   transition-delay: 0.5;  
  }

  button:hover{
    background:silver;
    border:1px solid rgb(216,207,207);
    color:black;
    ;
}
`;








/////////////////////////////////////////////////////


export const Search = styled.form`
display:flex;
position: absolute;    
top:4rem;
left:25rem;


`


////////////////////////////////////////////////////////////////////////////////

export const FormWrapper = styled.div`
    margin:3rem;
    background-color: rgb(216, 207, 207);
    padding-top:2rem;
    padding-bottom:2rem;
    margin-left:6rem;
    margin-right:6rem;

}

`;

export const SubmitButton = styled.input`
    // margin-top:2rem;
    // padding-top2rem;
     font-family:3rem;
     justify-self:center;
     font-family: Verdana, Geneva, Tahoma, sans-serif;
     font-weight:200;
     font-size:1.8rem;

     background-color: rgb(64,192,107);
    color: white;
    border: none;
    text-transform: uppercase;
    font-size: 0.7rem;
    border-radius: 0.3rem;
    width:8rem;
 `


export const Form = styled.form`
    margin-top:2rem;
    padding-top2rem;
    display:grid;
    // grid-gap:1rem;
    justify-content:center;
    text-align:left;

    label{
        // padding:20rem;
     font-family: Verdana, Geneva, Tahoma, sans-serif;
     font-weight:200;
     font-size:1.2rem;
    }
    
    input{
        margin-top:1rem
        margin-bottom:1rem        
        height:2rem;
    //  font-size:1.5rem;
 }

  button{
      background-color:rgb(64, 192, 107);
      color:white;
      border:none;
      text-transform: uppercase; 
      font-size:0.7rem;
      border-radius:0.3rem;
      transition: all;
      transition-duration: 1s;  
  }

  button:hover{
    background:silver;
    border:1px solid rgb(216,207,207);
    color:black;
    ;
}

`;




export const HeaderLarge = styled.h1`
  font-size:2.5rem;
  font-weight:200;
  font-family: serif;
  color: rgb(177,106,106);
  margin-bottom:2rem;
`
export const ButtonLink = styled.button`
        padding:2rem;
        font-size:1.2rem;
// //   font-weight:200;
// //   font-family: serif;
// //   color: rgb(177,106,106);
// //   margin-bottom:2rem

//     color:rgba(29, 85, 46, 0.76);
//     text-decoration:none;
//     font-size:2rem;
//     background-color:transpace;
//     background:transparent;
//     font-weight:200;
       text-align:center;


//     a:button{
//         cursor: pointer;
//         color:red;
//     }
    
    

;
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
    // padding:1rem;
    font-weight:200;
    letter-spacing:0.1rem;

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
        color:rgba(29, 85, 46, 0.76);
        text-decoration:none;
        font-size:1.3rem;
        
    }    
`



/////////////////////////////////////////////////////////
//svg 


export const LikeButton = styled.div`
    // font-size:10px;
    display:inline;
    svg{
        fill:rgb(177,106,106);
        height:2rem;
        width:2rem;

    }

    svg:hover{
        cursor: pointer;
        fill:red;
    }
        
`
export const SvgBubble = styled.div`
    display:grid;
    grid-template-columns:repeat(2,1fr);
    justify-content:center;
    align-content:center;
    margin-left:2rem;
    text-algin:center;
    svg{
        fill:rgb(177,106,106);
        height:1.8rem;
        width:1.8rem;
        background-color:white;
        text-align:center;
        justify-self:center;
        align-self:center;
    }

    p{
        // position:relative;
        top:20px;
        // z-index:1;
        
    }

    svg:hover{
        cursor: pointer;
        fill:red;
    }
        
`


/////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////

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

    // p{
    //     padding:1rem;
    //     font-size:1.5rem;
   
    // }

    p{
        list-style: none;
        padding:1rem;
        font-size:1rem;
        font-weight:200;
        font-family: 'Times New Roman';
        width:20rem;
    }
`


export const ViewCommentsWrapper = styled.div`
    display:grid;
    // grid-gap:2rem;
    background-color: rgb(250, 248, 248);
    box-shadow:3px 0px 3px 3px grey;
    p{
        padding: 1rem;
        font-weight: 200;
        letter-spacing: 0.1rem;
    }
`

/////////////////////////////////////////////////////////

export const ViewContainer = styled.div`
    display:grid;
    grid-gap:2rem;
    background-color: rgb(250, 248, 248);
    box-shadow:3px 0px 3px 3px grey;
`

export const TextArea = styled.textarea`
    width:15rem;
    height:5rem;
    line-height:1rem;
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


export const SmallHeader = styled.h1` 
    font-size:1.7rem;
    margin:1rem;
    // margin:1rem;
    font-family: 'Times New Roman';
    font-weight:200;
    letter-spacing:0.3rem;
    color:rgb(177,106,106);
}

`;


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
    box-shadow:3px 0px 3px 3px grey;

p{
    padding:1rem;
    font-weight:200;
    letter-spacing:0.1rem;

}

span{
    margin:1rem;
}

li{
    margin-top:2rem;
    list-style:none;
}

a{
    color:rgba(29, 85, 46, 0.76);
    text-decoration:none;
    font-size:1.3rem;

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
// NAV  




export const PrivatNavContainer = styled.div`
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
    transition: all;
    transition-duration: 0.3s;
    text-decoration:none;
}

a:hover{
    font-size:1.2rem;
    color:rgb(177,106,106)
}

button{
    justify-self:center;
}
`


export const PublicNavContainer = styled.div`

height:1.8rem;

background-color: rgb(216, 207, 207);
justify-content:center;
align-content:center;
text-transform:uppercase;
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr  1fr 1fr;
margin-left:6rem;
margin-right:6rem;
padding-top:1rem;
margin-top:3rem;
padding-bottom:1rem;

li:nth-child(1){
    position:absolute;
    top:65px;
    right:110px;


}


li:nth-child(2){
    position:absolute;
    top:65px;
    right:210px;
    
}


li{
    font-size:1.2rem;
    justify-self:center;
    align-self:center;
    list-style:none;
}


a{
    color:black;
    justify-self:center;
    align-self:center;
    transition: all;
    transition-duration: 0.3s;
    text-decoration:none;
}
a:hover{

    font-size:1.4rem;
    color:rgb(177,106,106)
}


`

/////////////////////////////////////////////////////////



export const Container = styled.ul`
  height:10rem;
  margin:5rem;
`