import './App.css';
import TodoFooter from './components/TodoFooter/TodoFooter';
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoMain from './components/TodoMain/TodoMain';

function App() {
  return (
    <div className='App'>
      <TodoHeader />
      <TodoMain />
      <TodoFooter />
    </div>
  );
}

export default App;
