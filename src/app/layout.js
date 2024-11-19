import * as React from 'react';
import PropTypes from 'prop-types';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import '@/styles/globals.css';

export const metadata = {
  title: {
    template: 'Simulador-POC',
    default: 'Simulador',
    keywords: [ 'Mycon', 'Simulador', 'Consórcio', 'Imóvel', 'Auto', 'Moto', 'Serviços' ],
    themeColor: '#fff',
  },
  description: '50% mais barato que os outros consórcios. Compre seu Consórcio de Imóvel, Auto, Moto ou Serviços. O Mycon é o Melhor Negócio!',
  openGraph: {
    title: 'Simulador',
    description: '50% mais barato que os outros consórcios. Compre seu Consórcio de Imóvel, Auto, Moto ou Serviços. O Mycon é o Melhor Negócio!',
    url: 'https://simulador.mycon.com.br/',
    siteName: 'Simulador Web',
    images: [
      {
        url: 'https://simulador-web.mycon.com.br/_next/static/media/opengraph-geral.jpg',
        width: 800,
        height: 600,
        alt: 'Simulador Mycon'
      },
      {
        url: 'https://simulador-web.mycon.com.br/_next/static/media/opengraph-geral.jpg',
        width: 1800,
        height: 1600,
        alt: 'Simulador Mycon'
      }
    ],
    locale: 'pt-BR',
    type: 'website',
    publishedTime: '2024-03-07T20:25:50+00:00',
  },
  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/icons/apple-touch-icon.png',
    appleTouch: '/icons/apple-touch-icon.png',
  },
  twitter: {
    card: 'simulador web',
    title: 'Simulador Web Mycon',
    description: '50% mais barato que os outros consórcios. Compre seu Consórcio de Imóvel, Auto, Moto ou Serviços. O Mycon é o Melhor Negócio!',
    images: [ 'https://simulador-web.mycon.com.br/_next/static/media/opengraph-geral.jpg' ],
  },
  appLinks: {
    ios: {
      url: 'https://apps.apple.com/us/app/mycon',
      app_store_id: '1489365751',
    },
    android: {
      package: 'https://play.google.com/store/apps/details?id=br.com.mycon.client.app',
      app_name: 'Mycon, consórcio digital',
    },
    web: {
      url: 'https://simulador.mycon.com.br/',
      should_fallback: true,
    },
  },
}

const Layout = ( { children } ) => {
  return (
    <html lang="pt-br">
      <body>

        <AppRouterCacheProvider options={ { enableCssLayer: true } }>
          <ThemeProvider theme={ theme }>
            <CssBaseline />
            { children }
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;