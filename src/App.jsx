import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal } from 'solid-js';

function App() {
  const [asdf, setAsdf] = createSignal(0)
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <input type="text" value={asdf()} onChange={(v) => setAsdf(v.currentTarget.value)} />
      </header>
      <div>{asdf()}</div>
    </div>
  );
}

export default App;
