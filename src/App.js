import './App.css';
import data from './data';
import Article from './Article';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light-theme');

  const toogleTheme = () => {
    if(theme === 'light-theme') {
     setTheme('dark-theme');
    } else {
      setTheme('light-theme');

    }
  }

  useEffect(() => {
    document.documentElement.className = theme
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
