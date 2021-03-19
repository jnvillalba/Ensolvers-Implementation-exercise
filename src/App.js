import './App.css';
import TodoList from './Components/TodoList';
import logo from './ensolvers.png'


function App() {
  return (
    <div className="to-do-App">
      
      <div>
        <img src={logo} 
        alt= "logo"/>
      </div>
      <h1>
        Ensolvers To Do List App
      </h1>
      <TodoList />
    </div>
  );
}

export default App;
