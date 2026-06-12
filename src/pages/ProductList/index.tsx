import PageLayout from "../../shared/layouts/PageLayout";
import { useEffect, useState } from 'react';
import MainProductCard from "../../features/mainPage/components/MainProductCard";
import type { MainProductType } from "../../types/mainProductType";
import "./style.css";

const ProductList = () =>{
  const [products, setProducts] = useState<MainProductType[]>([]);

    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/food/foods/')
          .then(res => res.json())
          .then(data => setProducts(data));
  }, []);
  console.log(products)
  return (
    <PageLayout name="Product List" href="/products">
        <div className="products-grid">
            {products.map(product => (
                <MainProductCard
                  key={product.id}
                  {...product}
                />
            ))}
        </div>
    </PageLayout>
  )
};


export default ProductList;
