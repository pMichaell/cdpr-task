import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import './defaults.css';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);
root.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
);
