import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Constants';
import ImageOptions from '../Components/ImageOptions';
import Button from '../Components/Button';
import { star } from '../assets/icons';
import ProductNotfound from '../Components/ProductNotfound';
import { Footer } from '../sections';
import Nav from '../Components/Nav';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = products.find(product => product.productId == productId);

  if (!product) {
    return <div><ProductNotfound/></div>;
  }

  const { imgURLs, name, price, description } = product;

  const [selectedImage, setSelectedImage] = useState(imgURLs[0]);
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div>
      <section className='pb-12'>
        <Nav/>
      </section>
      <div className='padding flex flex-col lg:flex-row justify-center items-center lg:items-start lg:gap-x-12'>
        <div className="w-full lg:w-auto mb-8 lg:mb-0">
          <div className='w-full flex justify-center'>
            <img src={selectedImage} alt={name} className="w-full lg:w-[540px] h-auto" />
          </div>
          <div className="flex justify-start">
            <ImageOptions
              imgURLs={imgURLs}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          </div>
        </div>
        <div className="w-full lg:w-full mx-auto lg:mx-0">
          <h1 className='mt-2 text-4xl leading-normal font-semibold font-palanquin text-black'>{name}</h1>
          <div className='mt-3 flex justify-start items-start gap-2.5'>
            <img src={star} alt="Star" width={24} height={24} className='object-contain m-0' />
          </div>
          <p className='mt-4 font-montserrat text-gray-600 lg:max-w-lg'>{description}</p>
          <p className="mt-2 font-semibold font-montserrat text-coral-red text-3xl leading-normal">{price}</p>
          <div className="mt-4">
            <h2 className='font-montserrat text-gray-600'>Quantity: (Max- 10 per order)</h2>
            <div className="flex gap-2 mt-2">
              <button onClick={handleDecreaseQuantity} className="border border-gray-300 px-3 py-1">-</button>
              <span className='text-2xl font-normal'>{quantity}</span>
              <button onClick={handleIncreaseQuantity} className="border border-gray-300 px-3 py-1">+</button>
            </div>
          </div>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Add to cart" backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' />
            <Button label='Shop Now' />
          </div>
        </div>
      </div>
      <section className="padding-x padding-t pt-8 pb-8 bg-black">
        <Footer/>
      </section>
    </div>
  );
};

export default ProductDetailsPage;
