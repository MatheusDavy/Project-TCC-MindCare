"use client"

import type { AppProps } from 'next/app'
import useLogic from './_app.logic'
import { AuthProvider } from '../context/AuthContext';
 
export default function MyApp({ Component, pageProps }: AppProps) {
  const { data, methods } = useLogic();
  
  const getLayout = Component.getLayout || ((page) => page);
  
  return getLayout(
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}