import '../styles/globals.scss';
import '../components/Layout'
import Layout from '../components/Layout';
import { AppProps } from 'next/app';
const MyApp = ({ Component, pageProps }:AppProps) => (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
)
export default MyApp
