import React, {useContext} from 'react'
import { ThemeContext}  from '../contexts/ThemeContext'

const BookList = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  
  return (
  <div className="book-list" style = {{color: theme.syntax, background: theme.bg}} >
      <ul>
        <li style = {{background : theme.ui}}> The Power of Habit</li>
        <li style = {{background : theme.ui}}> Rich Dad, Poor Dad</li>
        <li style = {{background : theme.ui}}> From Zero to One</li>
      </ul>
    </div>
    );
}
 
export default BookList;