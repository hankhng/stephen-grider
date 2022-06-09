import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const buttonText = { text: 'Click me' };

  return (
    <div>
      <label className='label' htmlFor='name'>
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ border: '1px solid red', color: 'blue' }}>
        {buttonText.text}
      </button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
