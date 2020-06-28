import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'


const ToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext)
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>Increment the number</button>
      <button onClick={() => { setCount(count - 1) }}>Decrement the number</button>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

export default ToggleButton;

