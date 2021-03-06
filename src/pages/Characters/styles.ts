import { Http2ServerRequest } from 'http2';
import styled from 'styled-components';
interface ThumbnailData {
  thumbnail: {
    path:string;
    extension: string;
  }
}

export const Header = styled.header` 

width: 100%;
height:150px;
background-color: #101010;
display:flex;

h1 {
  color: #fff;
  background-color: #ff0000;
  width: 300px;
  margin:auto;
  text-align:center;
  font-family: 'Bebas Neue', cursive;
}

 `;

export const Container = styled.main` 
  display:flex;
  flex-wrap:wrap;
  width:100%;
  height: 100%;

`;

export const CardList = styled.div` 
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const urlImg = (props:ThumbnailData) => 
`${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Card = styled.div`
  background: #f1f1f1;
  height: 450px;
  width:300px;
  margin:10px;
  border-radius: 5px;
  overflow:hidden;
  box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.3);

h2, 
p {
  padding:5px;
  text-align: justify;
}

div#img {
  height: 400px;
  width: 100%auto;
  background: url(${urlImg}) no-repeat center;
  background-size: cover;

  transition: all 1s;
}

  &:hover {
    div#img{
      height: 100px;

    }
  }
`;

export const Button = styled.button`
  
  background: black;
  cursor: pointer;
  padding: 10px 100px;
  margin: auto;
  margin-top:30px;
  margin-bottom:30px;
  border: 1px solid black;
  border-radius: 2px;
  font-family: 'Bebas Neue', cursive;
  font-weight: bolder;
  font-size: 24px;
  color:white;
  box-shadow: none;
 


  &:hover {
    background-color: red;
   
  }
`;
