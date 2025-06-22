
import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Validate username live (when moving to password field)
  const validateUsername = () => {
    if (username.trim() === '') {
      setUsernameError('❗ Please enter username');
      return false;
    } else if (!/^[a-zA-Z]+$/.test(username)) {
      setUsernameError('❗ Username must contain only alphabets');
      return false;
    } else {
      setUsernameError('');
      return true;
    }
  };

  // Check password on submit
  const handleSubmit = () => {
    let valid = true;

    // Reset messages
    setPasswordError('');
    setSuccessMessage('');

    // First validate username again on submit
    if (!validateUsername()) {
      valid = false;
    }

    if (password.trim() === '') {
      setPasswordError('❗ Please enter password');
      valid = false;
    } else if (password.length < 7) {
      setPasswordError('❗ Password must be at least 7 characters');
      valid = false;
    }

    if (valid) {
      setSuccessMessage('✅ You submitted successfully!');
    }
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    width: '250px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '5px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '5px',
    textAlign: 'left',
    width: '250px',
    margin: '0 auto',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial',
    }}>
      <div style={{ textAlign: 'center' }}>
        
        <h1 style={{ color: '#2e8b57' }}>WELCOME!</h1> 
        <h2 style={{ color: '#1e90ff' }}>Login here...</h2> 


        {/* Username */}
        <div style={labelStyle}>🧑‍💼 Username</div>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={validateUsername} // Validate when moving focus away
          style={inputStyle}
        />
        <div style={errorStyle}>{usernameError}</div>

        {/* Password */}
        <div style={labelStyle}>🔒 Password</div>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onFocus={() => {
            // Validate username before entering password
            validateUsername();
          }}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <div style={errorStyle}>{passwordError}</div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Submit
        </button>

        {/* Success Message */}
        <p style={{
          color: 'green',
          fontSize: '14px',
          marginTop: '10px',
        }}>
          {successMessage}
        </p>
      </div>
    </div>
  );
}

export default App;

