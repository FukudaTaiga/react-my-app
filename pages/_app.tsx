import '../styles/globals.css';
import App, { AppProps } from 'next/app';
import Header from '../components/header';
import Navi from '../components/navi';
import { categories } from '../components/links';
import MainContent from '../components/main';
import Footer from '../components/footer';

class MyApp extends App {
  render () {
    const {Component, pageProps}: AppProps = this.props;

    return (
      <div className="all">
        <Header />
        <Navi categories={categories} />
        <MainContent>
          <Component {...pageProps} />
        </MainContent>
        <Footer />
      </div>
    );
  }
}

export default MyApp;
