import React, { useEffect, useState, useCallback } from 'react';
import api from '../../services/api';
import { Container, CardList, Card, Button } from './styles'
interface ResponseData {
  id: string;
  name:string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([]);


  useEffect(() => {
    api
    .get('/characters')
    .then(response => {
      setCharacters(response.data.data.results);
    })
    .catch(err => console.log(err));
 },[]);

 const moreCharacters = useCallback(async () => {
   try {
    const offset = characters.length;
    const response = await api.get('characters', {
      params: {
        offset,
      },
    });
    setCharacters([...characters, ...response.data.data.results])
 }
 catch(err) {
   console.log(err);

}
}, [characters]);

  return (
  <Container>
    <CardList>
    {characters.map(character => {
      return (
        < Card key={character.id} thumbnail={character.thumbnail}>
          <div id="img"/>
          <h2>{character.name}</h2>
          <p>{character.description}</p>


        </Card>

      
      )
    })}
    </CardList>
    <Button onClick={moreCharacters}>
    MAIS  
    </Button> 
    
 
  </Container>)
  
}

export default Characters