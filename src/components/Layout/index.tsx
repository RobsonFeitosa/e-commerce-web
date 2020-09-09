import React from 'react';

import { withRouter } from 'react-router-dom';
import { Container } from './styles';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};
export default withRouter(Layout);
