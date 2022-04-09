import Home from "pages/Home";
import NotFound from "pages/NotFound";

const routes: Routes = {
  home: { path: "/", component: Home },
  notFound: { path: "*", component: NotFound },
};

export default routes;
