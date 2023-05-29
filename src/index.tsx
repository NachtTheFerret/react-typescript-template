import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import AppComponent from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<StrictMode><AppComponent /></StrictMode>);
