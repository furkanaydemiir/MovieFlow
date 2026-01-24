import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.tsx'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme/Theme.tsx'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes/AppRoutes.tsx'


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)
