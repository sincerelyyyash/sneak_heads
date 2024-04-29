import{r as i,j as e}from"./index-DI_G-4oe.js";import{Q as v,B as p,N as w,F as q}from"./Nav-g8AsO58g.js";import{B as u}from"./Button-BjVg1MHT.js";import{g as S}from"./ProductsApi-D1aUiNsE.js";import{c as C,g as D}from"./OrdersApi-BASzbm2t.js";const T=({product:r})=>{const{name:s,imgURLs:l,quantity:c,subtotal:n}=r;return e.jsxs("div",{className:"flex items-center justify-between border-b border-gray-300 py-2",children:[e.jsxs("div",{className:"flex flex-row",children:[e.jsx("img",{src:l[0],alt:s,className:"w-16 h-16 object-cover rounded-md"}),e.jsxs("div",{className:"flex flex-col justify-center ml-4",children:[e.jsx("p",{className:"text-lg font-semibold font-montserrat",children:s}),e.jsxs("p",{className:"text-gray-500 font-palanquin",children:["Quantity: ",c]})]})]}),e.jsxs("p",{className:"text-lg font-normal",children:["Subtotal: ₹",n]})]})},I=({order:r})=>{const{shippingInfo:s,orderItems:l,subtotal:c,tax:n,shippingCharge:a,discount:d,total:h,_id:m,createdAt:j}=r,g=t=>{p.success(t)},b=t=>{p.error(t)},[N,y]=i.useState([]),O=async t=>{try{await C(t),g("Order Cancelled!")}catch{b("Order cancellation failed!")}};return i.useEffect(()=>{(async()=>{const o=[];for(const x of l)try{const f=await S(x.product);o.push({...f,quantity:x.quantity,subtotal:x.subtotal})}catch{}y(o)})()},[l]),e.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between border-b border-gray-300 py-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mb-4 p-4 sm:justify-between w-full",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mt-4 mb-2",children:"Order Items"}),e.jsx("div",{className:"mb-4",children:N.map((t,o)=>e.jsx(T,{product:t},o))}),e.jsxs("p",{className:"text-lg font-semibold font-palanquin",children:["Shipping Address: ",s.address,", ",s.city,", ",s.state,", ",s.country,", ",s.pincode]}),e.jsxs("p",{className:"text-md font-semibold font-palanquin",children:["Order placed on: ",j.slice(0,10)]}),e.jsxs("p",{className:"text-gray-500 font-palanquin",children:["Order Id: ",m]}),e.jsxs("p",{className:"text-gray-500 font-palanquin",children:["Subtotal: ₹",c]}),e.jsxs("p",{className:"text-gray-500 font-palanquin",children:["Tax: ₹",n]}),e.jsxs("p",{className:"text-gray-500 font-palanquin",children:["Shipping Charge: ₹",a]}),e.jsxs("p",{className:"text-gray-500 font-palanquin",children:["Discount: ₹",d]})]}),e.jsxs("div",{className:"flex flex-col justify-between sm:m-8 sm:p-2",children:[e.jsxs("p",{className:"text-lg font-semibold font-montserrat mb-2",children:["Total: ₹",h]}),e.jsxs("p",{className:"text-lg font-semibold font-palanquin mb-2",children:["Status: ",s.status]}),s.status!=="Cancelled"&&e.jsx(u,{square:!0,label:"Cancel Order",onClick:()=>O(m)})]})]}),e.jsx(v,{})]})};function L(){const[r,s]=i.useState([]),[l,c]=i.useState(!0);return i.useEffect(()=>{(async()=>{try{const a=await D();if(a.success){const d=a.message.orders;s(d)}}catch{}finally{c(!1)}})()},[]),e.jsxs("div",{children:[e.jsx(w,{}),e.jsx("div",{className:"py-20 pt-40",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx("p",{className:"text-coral-red text-2xl font-semibold text-left font-montserrat",children:"Orders"}),e.jsx("section",{children:l?e.jsx("section",{className:"h-screen flex items-center justify-center",children:e.jsx("p",{className:"text-3xl font-montserrat text-gray-500",children:"Loading..."})}):r.length===0?e.jsxs("section",{className:"h-screen flex flex-col items-center justify-center",children:[e.jsx("p",{className:"text-3xl font-montserrat text-gray-500",children:"No Orders to show!"}),e.jsx(u,{label:"Shop Now",square:!0,onClick:()=>{navigate("/products")}})]}):e.jsx("div",{className:"md:grid-cols-2  gap-6",children:r.slice().reverse().map((n,a)=>e.jsx(I,{order:n},a))})})]})}),e.jsx("section",{className:"padding-x padding-t pt- pb-8 bg-black",children:e.jsx(q,{})})]})}export{L as default};