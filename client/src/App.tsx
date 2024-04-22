import React from 'react';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import FooterLinks from './pages/FooterLinks';
import Layout from './components/Layout';
import FAQs from './pages/FAQs';
import SearchResults from './pages/SearchResults';
import { search_items } from './utils/MOCK_DATA';

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
        { path: "search/:searchTerm", element: <SearchResults />, loader: async ({ params }) => {
          const { searchTerm } = params;
          if (searchTerm === "default") return search_items
          const rendered_items = search_items.filter(item => item.keywords?.some(keyword => keyword.toLowerCase().includes(searchTerm?.toLowerCase() || "")) || item.disease_name.toLowerCase().includes(searchTerm?.toLowerCase() || ""))
          // const response = await fetch(`http://localhost:5000/api/search?searchTerm=${searchTerm}`);
          // const data = await response.json();
          return rendered_items;
        }},
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
