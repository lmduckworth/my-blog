import Footer from '../components/Footer';
import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';

import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';

function MyApp({ Component, pageProps }) {
  const globalData = getGlobalData();

  return (    
    <Layout>
      <main className="w-full">
      <span className="theme-bejamas" />      
      <Component {...pageProps} />
      </main>
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export default MyApp;
