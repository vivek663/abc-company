import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import HomePage from './pages/HomePage';
import CmsPage from './pages/CmsPage';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  color: #2d3436;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: -0.5px;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #2d3436;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f8f9fa;
    color: #007bff;
  }

  &.active {
    background-color: #007bff;
    color: white;
  }
`;

const Main = styled.main`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

function App() {
  const [heading, setHeading] = useState('');

  useEffect(() => {
    // Fetch heading from backend on mount
    const fetchHeading = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/heading');
        setHeading(response.data.text);
      } catch (error) {
        setHeading('Welcome to ABC Company');
      }
    };
    fetchHeading();
  }, []);

  return (
    <Router>
      <AppContainer>
        <Header>
          <Nav>
            <Logo to="/">ABC Company</Logo>
            <NavLinks>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/cms">CMS</NavLink>
            </NavLinks>
          </Nav>
        </Header>
        <Main>
          <Routes>
            <Route path="/" element={<HomePage heading={heading} />} />
            <Route path="/cms" element={<CmsPage heading={heading} setHeading={setHeading} />} />
          </Routes>
        </Main>
      </AppContainer>
    </Router>
  );
}

export default App;
