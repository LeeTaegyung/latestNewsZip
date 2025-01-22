import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./assets/styles/main.scss";
import { RecoilRoot } from "recoil";

function App() {
    const router = createBrowserRouter(routes);
    return (
        <RecoilRoot>
            <RouterProvider router={router} />
        </RecoilRoot>
    );
}

export default App;
