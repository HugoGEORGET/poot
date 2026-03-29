import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const domNode = document.getElementById('root')

if (domNode) {
    const root = createRoot(domNode)
    root.render(<App />)
} else {
    console.warn("No element found with id 'root'")
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
