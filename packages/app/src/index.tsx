import '@backstage/cli/asset-types';
import ReactDOM from 'react-dom/client';
import App from './App';

// CSS import order matters for specificity:
// 1. Tailwind (lowest specificity, utility classes)
import './styles/tailwind.css';
// 2. Global custom styles
import './styles/global.css';
// 3. Backstage UI styles
import '@backstage/ui/css/styles.css';
// 4. MUI JSS styles are injected at runtime (highest specificity)

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
