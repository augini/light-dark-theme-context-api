import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const AddNewBook = (props) => {
  const [title, setTitle] = useState('')
  
  const { isLightTheme, dark, light } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark

  const { addBook } = useContext(BookContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    addBook(title)
    setTitle('')
  }

  return (
    <div>
      <form style={{ display: 'inline-block', margin: '0 auto', }} onSubmit={handleSubmit} >
        <label 
          htmlFor="title" 
          style={{ marginRight: '2rem' }}> New Book</label>
        <input 
          type="text" 
          id='title' 
          style={{ border: `1px solid ${theme.syntax}`, outline: 'none', borderRadius: '10px', padding: '10px', background:theme.ui, color: theme.syntax }}
          onChange={(e) => { setTitle(e.target.value) }} 
          value={title} />
      </form>
    </div>
  );
}

export default AddNewBook;