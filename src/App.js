import React, { useState } from 'react';
import Counter from './Counter'
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
    Counter
    <Counter initialCount={1} />
    Counter Hooks
    <CounterHooks initialCount={10}/>
    Counter Hooks 2
    <CounterHooks initialCount={5}/>
    <button onClick={() => setTheme(p => p === 'red' ? 'blue' : 'red')}>Toggle Theme</button>
    </ThemeContext.Provider>
  ) 
}

export default App;
