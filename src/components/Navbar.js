import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'


const Navbar = () => {

  const { isLightTheme, dark, light } = useContext(ThemeContext)
  const { isAuthenticated, toggleAuth } = useContext(AuthContext)
  const theme = isLightTheme ? light : dark

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? 'Logged In' : 'Logged Out'}
      </div>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;

