import React, {useEffect} from "react";
import { getProducts } from "../../data";
import ProductContainer from "../../components/ProductContainer";
import ProductItem from "../../components/ProductItem";
import MenuNav from "../../components/MenuNav";
import { useParams, Link } from "react-router-dom";

const Products = () => {
  useEffect(() => {
    const body = document.querySelector("#root");
    body.scrollIntoView(500);
  }, []);
  let params = useParams();
  let products = getProducts(params.categoryName)
  return (
    <>
      <MenuNav/>
      <ProductContainer>
        {products.map((product) => {
          return <ProductItem key={product.id} item={product} link={`/shop/${params.categoryName}/${product.id}`}/>
        })}
      </ProductContainer> 
    </>
  );
};

export default Products;
