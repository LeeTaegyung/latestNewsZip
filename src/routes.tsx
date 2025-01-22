import Layout from "./components/Layout/Layout";
import NewsList from "./pages/NewsListPage/NewsListPage";
import ScrapList from "./pages/ScrapListPage/ScrapListPage";

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
