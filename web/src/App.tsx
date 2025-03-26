import { LogtoConfig, LogtoProvider } from '@logto/react'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

const config: LogtoConfig = {
  appId: import.meta.env.VITE_LOGTO_APP_ID,
  endpoint: `${import.meta.env.VITE_LOGTO_URL}/oidc`,
  resources: [import.meta.env.VITE_API_URL],
  scopes: ['read:page'],
};


export function App() {
  return (
    <LogtoProvider config={config}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </LogtoProvider>
  )
}
