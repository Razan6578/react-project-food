import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import PageLayout from '../../shared/layouts/PageLayout';
import type { MainProductType } from '../../types/mainProductType';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<MainProductType | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://127.0.0.1:8000/api/food/foods/${id}/`);
      const data = await res.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <PageLayout name={product.name} href={`/product/${id}`}>
      <div className="product-page">
        <div className="product-images">
          <div className="main-image">
            <img src={`http://127.0.0.1:8000${product.mainImage}`} alt={product.name} />
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>

          <p className="brand">{product.brandName}</p>

          <div className="rating">{product.rating}/5</div>

          <div className="price">
            <span className="new">${product.discountPrice}</span>
            <span className="old">${product.originalPrice}</span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Product;
