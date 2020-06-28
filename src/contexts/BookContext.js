import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books, setbooks] = useState([
    { title: 'name of the wind', id: 1 },
    { title: 'the way of kings', id: 2 },
    { title: 'the final empire', id: 3 },
    { title: 'the hero of ages', id: 4 },
  ])

const addBook = (title) => {
    setbooks([...books, { title, id: uuidv4() }])
  }

  return (
    <BookContext.Provider value={{ books, addBook: addBook }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;