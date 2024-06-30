import logo from './logo.svg';
import './App.css';
import TodoApp from './TodoApp';
import ContactPage from './ContactPage';
import SodiqSchool from './SodiqCL';
import Navbar from './src/components/Navbar';
import Header from './src/components/Header';
import Tabs from './src/components/Tabs';

function App() {
  return (
    <div className="App">
      <TodoApp />
      <ContactPage />
      <SodiqSchool />
      <Navbar />
      <Header />
      <Tabs />
    </div>
  );
}

export default App;
