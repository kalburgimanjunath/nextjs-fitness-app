import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Footer, Sidebar } from '../components/';
// import store from '../redux/store';
import { SessionProvider } from 'next-auth/react';
import React, { useState } from 'react';
function MyApp({ Component, pageProps, session }) {
  const [toggleSidebar, setSidebar] = useState(false);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      />
      <Header />

      <div style={{ display: 'flex' }}>
        <SessionProvider session={session}>
          {toggleSidebar ? <Sidebar session={session} /> : null}
          <span onClick={() => setSidebar(!toggleSidebar)}>
            {toggleSidebar ? (
              <div style={{ padding: '20px 0 0 20px' }}>
                <i className="bi bi-list fs-2" size={20} />
              </div>
            ) : (
              <div style={{ padding: '20px 0 0 20px' }}>
                <i className="bi bi-list fs-2"></i>
              </div>
            )}
          </span>
          <div style={{ padding: 20 }}>
            <Component {...pageProps} />
          </div>
        </SessionProvider>
      </div>

      <Footer />
    </>
  );
}

export default MyApp;
