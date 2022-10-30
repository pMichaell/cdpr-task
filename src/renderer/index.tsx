import { createRoot } from 'react-dom/client';
import App from './App';
import './defaults.css';
import { MemoryRouter } from 'react-router-dom';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);
root.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
);
