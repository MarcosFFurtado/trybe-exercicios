import './App.css';
import React from 'react';
import Header from './Header';
import Content from './content';

// const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div>
      <Header/> 
      <Content/>
      </div>
      // <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           { Task("sou lindo demais....") }
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
