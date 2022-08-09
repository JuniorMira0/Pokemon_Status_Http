import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import { AuthProvider } from  './context/auth';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Header />
      <Cards />
      </AuthProvider>
    </div>
  );
}

export default App;
