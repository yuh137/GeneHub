import React from "react";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import FooterLinks from "./pages/FooterLinks";
import Layout from "./components/Layout";
import FAQs from "./pages/FAQs";
import SearchResults from "./pages/SearchResults";
import { search_items } from "./utils/MOCK_DATA";
import DiseaseDisplay from "./pages/DiseaseDisplay";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: async ({ request }) => {
            return search_items;
          },
        },
        { path: "contacts", element: <Contact /> },
        { path: "info/:link", element: <FooterLinks /> },
        { path: "faq", element: <FAQs /> },
        {
          path: "search",
          element: <SearchResults />,
          loader: async ({ request }) => {
            const searchParams = new URL(request.url).searchParams;
            const searchTerm = searchParams.get("searchTerm");
            if (searchTerm === "") return search_items;
            const rendered_items = search_items.filter(
              (item) =>
                item.keywords?.some((keyword) =>
                  keyword
                    .toLowerCase()
                    .includes(searchTerm?.toLowerCase() || "")
                ) ||
                item.disease_name
                  .toLowerCase()
                  .includes(searchTerm?.toLowerCase() || "") ||
                item.gene
                  .toLowerCase()
                  .includes(searchTerm?.toLowerCase() || "") ||
                item.bio_name
                  .toLowerCase()
                  .includes(searchTerm?.toLowerCase() || "") ||
                item.symptomps.some((sym) =>
                  sym.toLowerCase().includes(searchTerm?.toLowerCase() || "")
                )
            );
            // const response = await fetch(`http://localhost:5000/api/search?searchTerm=${searchTerm}`);
            // const data = await response.json();
            return rendered_items;
          },
        },
        {
          path: "disease/:id",
          element: <DiseaseDisplay />,
          loader: async ({ params }) => {
            const { id } = params;
            // const response = await fetch(`${process.env.REACT_APP_API}/disease/${id}`);
            // return response.json();
            const rendered_disease = search_items.find(
              (item) => item.id === id
            );
            return rendered_disease;
          },
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
