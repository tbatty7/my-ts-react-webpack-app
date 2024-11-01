import React from 'react';
import ReactDOM from 'react-dom/client';
import { stuff } from '@skribe/web/core';
const App: React.FC = () => {
    return <><div>stuff</div><div>Hello, world!</div></>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
