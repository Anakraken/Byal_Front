import { useState } from 'react';
import { Modal } from './components/Modals';
import { Button } from './components/Buttons';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggle = () => setIsModalVisible(!isModalVisible)
 
  return (
    <div className="App">
      <h1>Byal app</h1>
      <button onClick={toggle}>Show modal</button>
      <Modal 
      onBackClick={toggle}
      isVisible={isModalVisible}
      variant='error'
      message='yeiiii estoy funcionando'
      >
        <Button onClick={()=> console.log('working')}>CLOSE</Button>
      </Modal>
    </div>
  );
}

export default App;