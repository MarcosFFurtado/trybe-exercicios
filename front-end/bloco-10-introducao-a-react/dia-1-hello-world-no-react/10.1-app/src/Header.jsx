      // App.js
      import React from 'react';

      import Header from './Header';
      // import Content from './Content';
      // import Footer from './Footer';

      import './App.css'

      class App extends React.Component {
        render() {
          return (
            <div>
              <h1 className='title'>Conteúdos de Front-end</h1>
              {/* <Header />
              <Content />
              <Footer /> */}
            </div>
          );
        }
      }

      export default App;