import './App.css';
import ButtonPlus from './components/Button/ButtonPlus';
import Divider from './components/Divider';
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';
import Panigation from './components/Panigation';

function App() {
  return (
    <div className="App">
      <Header content='TO DO LIST APPLICATION' />
      <div>
        <Input />
        <ButtonPlus />
      </div>
      <Divider fullWidth />
      <List />
      <Divider fullWidth />
      <Panigation />

    </div>
  );
}

export default App;
