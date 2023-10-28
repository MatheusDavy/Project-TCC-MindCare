"use client"

import type { AppProps } from 'next/app'
import useLogic from './_app.logic'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  const { data, methods } = useLogic();
  
  const getLayout = Component.getLayout || ((page) => page);
  
  return getLayout(<Component {...pageProps} />)
}