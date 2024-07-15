import React, { useEffect, useState } from 'react';
import styles from './DarkMode.module.css'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness5Icon from '@mui/icons-material/Brightness5';

const DarkMode = () => {
    const [theme, setTheme] = useState('light') // Default theme
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const getInitialTheme = () => {
            if (typeof window !== 'undefined') {
                const storedTheme = localStorage.getItem('theme')
                if (storedTheme) {
                    return storedTheme
                }
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            }
            return 'light' // Default to light theme if window is not defined
        }

        setTheme(getInitialTheme())
    }, [])

    useEffect(() => {
        if (mounted) {
            document.documentElement.setAttribute('data-theme', theme)
            localStorage.setItem('theme', theme)
        }
    }, [theme, mounted])

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
    }

    if (!mounted) {
        return null // Render nothing on the server side
    }


  return (
    <div className={styles.darkModeToggle} onClick={toggleTheme}>
    {theme === 'light' ? 
    ( <Brightness4Icon style={{ color: 'black' }}/> ) : ( <Brightness5Icon style={{ color: 'white' }}/> )}
    </div>
  )
}

export default DarkMode