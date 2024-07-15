import React, { useEffect, useState } from 'react';
import styles from './DarkMode.module.css'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness5Icon from '@mui/icons-material/Brightness5';

const DarkMode = () => {
    const [theme, setTheme] = useState('dark'); // Default to dark theme

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

  return (
    <div className={styles.darkModeToggle} onClick={toggleTheme}>
    {theme === 'light' ? 
    ( <Brightness4Icon style={{ color: 'black' }}/> ) : ( <Brightness5Icon style={{ color: 'white' }}/> )}
    </div>
  )
}

export default DarkMode