import { useState, useEffect } from 'react';

export const CUBIC_BEZIER_TRANSITION = '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
export const EASE_IN_OUT_TRANSITION = '0.3s ease-in-out';
export const BACKGROUND_TRANSITION_TIME = '0.75s';
export const PRIMARY_COLOR = 'rgba(231,150,134,1)'

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
    ? { //light theme
        background: 'white',
        color: '#333',
        secondary: 'rgba(53,75,94,1)',
        muted: 'hsla(0, 0%, 0%, 0.6)',
        borderColor: '#eee',
        borderHoverColor: 'transparent'
      } 
    : { //dark theme
        background: '#222',
        color: 'rgba(205, 218, 239, 1)',
        secondary: 'rgba(233,175,163,1)',
        muted: 'hsla(0, 0%, 100%, 0.60)',
        borderColor: 'hsla(0, 0%, 100%, 0.60)',
        borderHoverColor: 'rgba(231,150,134,1)',
      };
    