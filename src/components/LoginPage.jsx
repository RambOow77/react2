import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({ text: '', isError: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos vacíos
    if (!email.trim() || !password.trim()) {
      setMessage({ text: 'Todos los campos son obligatorios.', isError: true });
      return;
    }

    // Validar contraseña mínima de 6 caracteres
    if (password.length < 6) {
      setMessage({ text: 'El password debe tener al menos 6 caracteres.', isError: true });
      return;
    }

    // Éxito
    setMessage({ text: '¡Authentication successful!', isError: false });
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container my-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4">Login</h2>

      {message.text && (
        <div className={`alert ${message.isError ? 'alert-danger' : 'alert-success'}`} role="alert">
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;