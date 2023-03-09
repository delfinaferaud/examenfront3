import React, { useState } from 'react';
import Card from './components/Card';

function App() {
  const [cancion, setCancion] = useState('');
  const [cantante, setCantante] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cancion.length < 3 || /^\s/.test(cancion)) {
      setError('Por favor chequea que la información sea correcta');
      return
    }
    if (cantante.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return
    }
    setError('')
    setSubmitted(cancion)
    return <Card cancion={cancion} cantante={cantante} />;
  }

  return (
    <>
    <h1>Agregar una nueva canción:</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cancion">Canción</label>
        <input
          type="text"
          name='cancion'
          value={cancion}
          onChange={(e) => setCancion(e.target.value)}
        />
      </div>
      <div>
          <label htmlFor='cantante'>Cantante</label>
          <input
            type='text'
            name='cantante'
            value={cantante}
            onChange={(e) => setCantante(e.target.value)}
          />
        </div>
      <button type="submit">Agregar canción</button>
    </form>
  {error && <p>{error}</p>}
    {submitted && (
      <div>
        <h2>Se agregó la canción</h2>
        <p>{submitted.cancion}</p>
        <p>{submitted.cantante}</p>
      </div>
    )}
    </>
  )
}

export default App;

