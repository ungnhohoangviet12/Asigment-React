
import './App.css';
import ButtonPluss from './Components/Button/ButtonPluss';
import Divider from './Components/Divider';
import Header from './Components/Header';
import Input from './Components/Input';
import List from './Components/List';

function App() {
  return (
    <div className="App">
      <Header title={'Xin chào các bạn'} />
      <div className='body'>
        <Input />
        <ButtonPluss />
      </div>
      <Divider fullWidth />
      <List />
      <Divider fullWidth />

    </div>
  );
}

export default App;
