import React from 'react';
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext'
import ToggleButton from './components/ToggleButton'

function App() {
  return (
    <div className="App">
    <AuthContextProvider>
        <ThemeContextProvider>
            <Navbar/>
            <BookList/>
            <ToggleButton/>
        </ThemeContextProvider>
    </AuthContextProvider>
    </div>
  );
}

export default App;
