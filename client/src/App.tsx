import React from 'react';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import FooterLinks from './pages/FooterLinks';
import Layout from './components/Layout';
import FAQs from './pages/FAQs';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "contacts", element: <Contact /> },
        { path: "info/:link", element: <FooterLinks /> },
        { path: "faq", element: < FAQs />},
      ]
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
