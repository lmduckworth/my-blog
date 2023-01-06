import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';

function MyApp({ Component, pageProps }) {
  const globalData = getGlobalData();

  return (    
    <Layout>
      <main className="w-full">
      <span className="theme-bejamas" />
      <SEO title={globalData.name} description={globalData.blogTitle} />      
      <Header name={globalData.name} />
      <Component {...pageProps} />
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export default MyApp;
