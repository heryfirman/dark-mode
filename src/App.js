import './App.css';
import data from './data';
import Article from './Article';
import { useEffect, useState } from 'react';

const getStorageTheme = () => {
  let theme = 'light-theme';

  if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
}

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toogleTheme = () => {
    if(theme === 'light-theme') {
     setTheme('dark-theme');
    } else {
      setTheme('light-theme');

    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <h1>overracted</h1>
        <button className='btn' onClick={toogleTheme}>Toogle</button>
      </nav>
      <section className='articles'>
        {data.map(item => {
          return <Article key={item.id} {...item} />
        })}
      </section>
      <h2>Dark mode starter</h2>
    </main>
  );
}

export default App;
