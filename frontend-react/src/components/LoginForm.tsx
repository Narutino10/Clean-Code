import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login avec:', { username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Connexion</h2>
      <div>
        <label>Nom d'utilisateur:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Mot de passe:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default LoginForm;
