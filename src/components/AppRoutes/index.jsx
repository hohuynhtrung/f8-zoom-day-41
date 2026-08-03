import { Route, Routes } from "react-router";
import Home from "../../pages/Home";
import ProductList from "../../pages/ProductList";
import ProductDetail from "../../pages/ProductDetail";
import Loading from "../../components/Loading";

function AppRoutes() {
  return (
    <>
      <Loading />
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:slug" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
