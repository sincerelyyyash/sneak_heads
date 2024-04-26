import React, { useEffect, useState } from 'react';
import Nav from '../Components/Nav';
import { Footer } from '../sections';
import OrderTile from '../Components/OrderTile'; 
import { getAllOrders } from '../Api/OrdersApi';

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orderDetails = await getAllOrders();
        if (orderDetails.success) {
          const orders = orderDetails.message.orders;
          setOrders(orders); 
        } else {
          console.error('Failed to retrieve orders:', orderDetails.message);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false); 
      }
    };
  
    fetchOrders();
  }, []);

  return (
    <div>
      <Nav />
      <div className='py-20 pt-40'>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-coral-red text-2xl font-semibold text-left font-montserrat">Orders</p>
          <section >
            {loading ? (
              <section className='h-screen flex items-center justify-center'>
              <p className='text-3xl  font-palanquin'>Loading...</p>
              </section>
            ) : orders.length === 0 ? (
              <section className='h-screen flex items-center justify-center'>
                <p className='text-3xl font-palanquin'>No Orders to show!</p>
              </section>
              
            ) : (
              orders.map((order, index) => (
                <OrderTile key={index} order={order} />
              ))
            )}
          </section>
        </div>
      </div>
      <section className="padding-x padding-t pt- pb-8 bg-black">
        <Footer />
      </section>
    </div>
  );
}

export default OrdersPage;