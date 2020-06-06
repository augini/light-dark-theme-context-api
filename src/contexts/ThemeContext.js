import React, {createContext, Component } from 'react';

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLightTheme: true,
      dark: {syntax: '#ddd', ui: '#333', bg: '#555' }, 
      light: {syntax: '#555', ui: '#ddd', bg: '#eee' },
     }
  }

  toggleTheme = () =>{
    this.setState({
      isLightTheme: ! this.state.isLightTheme
    })
  }

  render() { 
    return ( 
      <ThemeContext.Provider value = {{...this.state, toggleTheme: this.toggleTheme }}>
       {this.props.children}
      </ThemeContext.Provider>
     );
  }
}
 
export default ThemeContextProvider;