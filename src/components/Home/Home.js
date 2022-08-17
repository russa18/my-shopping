import React,{useState,useEffect} from 'react';
import Product from '../Product/Product';
import "./Home.css";

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchproducts=async()=>{
      const res=await fetch("https://fakestoreapi.com/products");
      const data=await res.json();
      // console.log(data);
      setProducts(data);
    };
  
    fetchproducts();
    
  }, []);
  

  return (
    <div className="productsWrapper">
    {
      products.map((product,index)=>(
        <Product key={index} title={product.title} rating={product.rating.rate} ratingCount={product.rating.count} category={product.category} description={product.description} image={product.image} price={product.price} product={product} btnText="Add to Cart" funct="add"/>
      ))
    }
    </div>
  
    
  )
}

export default Home