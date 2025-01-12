import Layout from "./components/Layout/Layout";
import NewsList from "./pages/NewsList/NewsList";
import ScrapList from "./pages/ScrapList/ScrapList";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <NewsList /> },
            { path: "/scrap", element: <ScrapList /> },
        ],
    },
];

export default routes;
