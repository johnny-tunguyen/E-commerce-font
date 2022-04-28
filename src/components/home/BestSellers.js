import React, { useEffect, useState } from "react";
import ProductCard from "../../components/cards/ProductCard";
import LoadingCard from "../../components/cards/LoadingCard";
import { getProducts , getProductsCount} from "../../functions/product";
import { Pagination } from 'antd';

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    loadAllProducts();
  }, [page]);

  useEffect(() => {
    getProductsCount().then(res=> setProductCount(res.data))
  }, []);

  const loadAllProducts = () => {
    getProducts("CreatedAt","ASC",page).then((res) => {
      setLoading(true);
      setProducts(res.data);
      setLoading(false);
    });
  };

  return (
    <>
      <div className="container-fluid">
        {loading ? (
          <LoadingCard count={3} />
        ) : (
          <div className="row">
            {products.map((p) => (
              <div key={p._id} className="col-4">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        )}
          <div className="mt-3 d-flex justify-content-center">
            <Pagination current={page} total={(productCount/3)* 10} onChange={(value)=>{setPage(value)}}/>
        </div>
      </div>
    </>
  );
};

export default BestSellers;
