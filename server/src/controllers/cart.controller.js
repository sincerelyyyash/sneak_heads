import {Cart} from '../models/cart.model.js'
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js'



const addToCart = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user._id; 

  let cart = await Cart.findOne({ owner: userId });

  if (!cart) {
    cart = new Cart({ owner: userId, products: [] });
  }

  const existingProductIndex = cart.products.findIndex(
    (item) => String(item.product) === productId
  );

  if (existingProductIndex !== -1) {
    cart.products[existingProductIndex].quantity += quantity;
  } else {
    cart.products.push({ product: productId, quantity });
  }


  await cart.save();

  res.status(200).json(new ApiResponse(200, null, 'Product added to cart successfully'));
});


const modifyProductQuantity = asyncHandler(async (req, res) => {
    const { productId } = req.params;
    const { quantity } = req.body;
    const userId = req.user._id; 
  

    let cart = await Cart.findOne({ owner: userId });
  

    if (!cart) {
      throw new ApiError(404, 'Cart not found');
    }
  

    const productIndex = cart.products.findIndex((item) => String(item.product) === productId);
  

    if (productIndex === -1) {
      throw new ApiError(404, 'Product not found in cart');
    }
  

    cart.products[productIndex].quantity = quantity;
  

    if (quantity === 0) {
      cart.products.splice(productIndex, 1);
    }
  

    await cart.save();
  
    res.status(200).json(new ApiResponse(200, null, 'Product quantity modified successfully'));
  });


const removeFromCart = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const userId = req.user._id; 


  const cart = await Cart.findOne({ owner: userId });


  if (!cart) {
    throw new ApiError(404, 'Cart not found');
  }


  cart.products = cart.products.filter((item) => String(item.product) !== productId);

  await cart.save();

  res.status(200).json(new ApiResponse(200, null, 'Product removed from cart successfully'));
});


const getAllProductsFromCart = asyncHandler(async (req, res) => {
  const userId = req.user._id; 


  const cart = await Cart.findOne({ owner: userId }).populate('products.product');


  if (!cart) {
    throw new ApiError(404, 'Cart not found');
  }

  res.status(200).json(new ApiResponse(200, cart.products, 'Products retrieved successfully'));
});

module.exports = {
  addToCart,
  modifyProductQuantity, 
  removeFromCart,
  getAllProductsFromCart
};
