import React, { useState } from 'react';
import Modal from './Modal'; 

function Login() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    setShowModal(false); 
  };

  return (
    <div>
 
      <button onClick={() => setShowModal(true)}>Přihlásit se</button>

      
      {showModal && (
        <Modal>
          <h2>Přihlášení</h2>
          <label>
            Uživatelské jméno:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Heslo:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button onClick={handleLogin}>Přihlásit</button>
          <button onClick={() => setShowModal(false)}>Zavřít</button>
        </Modal>
      )}
    </div>
  );
}

export default Login;
