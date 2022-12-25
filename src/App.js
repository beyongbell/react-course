import Backdrop from './components/Backdrop';
import Modal from './components/Modal';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1> My Todos </h1>
      <Todo text="Learn React"></Todo>
      <Todo text="Master React"></Todo>
      <Todo text="Explore the full React Course"></Todo>
      <Modal></Modal>
      <Backdrop></Backdrop>
    </div>
  );
}

export default App;
