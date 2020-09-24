import { useState, useEffect } from 'react';
export const CUBIC_BEZIER_TRANSITION = '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
export const EASE_IN_OUT_TRANSITION = '0.3s ease-in-out';
export const BACKGROUND_TRANSITION_TIME = '0.75s';
export const PRIMARY_COLOR = 'violet';

export const useTheme = () => {
  const storedTheme = typeof window !== 'undefined' && window.localStorage.getItem('theme')
  const [theme, setTheme] = useState(storedTheme || 'light')  
  const toggleTheme = () =>
    setTheme(prevTheme => {
      return prevTheme === 'light' ? 'dark' : 'light';
    });

  useEffect(() => {
    if(typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme);
    }
  }, [theme]);
  return [theme, toggleTheme];
}

export const getTheme = theme => 
  theme === 'light'
    ? { 
        background: 'snow',
        color: '#333',
        secondary: 'black',
        muted: 'hsla(0, 0%, 0%, 0.6)',
        borderColor: 'black',
        borderHoverColor: 'transparent',
        primary: 'black',
        formBackground: 'lightgreen'
      } 
    : {
        background: '#222',
        color: '#D1D7E0',
        secondary: 'violet',
        muted: '#564F6F',
        borderColor: 'hsla(0, 0%, 100%, 0.80)',
        borderHoverColor: 'rgba(127,0,255,1)',
        primary: 'white',
        formBackground: '#4C495D'
      };
    