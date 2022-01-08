import NavBar from './components/NavBar';
import styles from "./style/App.module.css"

function App() {
  return (
    <div className={styles.App}>
        <div className={styles.container}>
          <NavBar/>
        </div>
    </div>
  );
}

export default App;
