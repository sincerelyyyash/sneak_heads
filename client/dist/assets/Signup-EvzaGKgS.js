import{u as f,a as n,r as h,j as e}from"./index-B2ePxcBR.js";import{g as j,e as b,d as w,N,F as y,Q as v,h as S,B as i}from"./Nav-eljdfZ1F.js";function F(){const o=f(),[l,c]=n(j),[r,m]=n(b),[s,u]=n(w),[d,t]=h.useState(""),x=a=>{i.success(a)},p=a=>{i.error(a)},g=async()=>{if(!l||!r||!s){t("All fields are required");return}if(s.length<8){t("Password must be at least 8 characters long");return}if(!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(s)){t("Password must contain at least one letter and one number");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)){t("Invalid email format");return}try{await S(r,l,s),x("Signing up Successful!"),setTimeout(()=>{o("/")},1500)}catch{p("Signup Failed!"),t("Error signing up. Please try again later.")}};return e.jsxs("div",{children:[e.jsx(N,{}),e.jsx("div",{className:"flex justify-center py-20 pt-36",children:e.jsx("div",{className:"w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-5 shadow-2xl mt-10 rounded-lg",children:e.jsx("div",{className:"space-y-2",children:e.jsxs("div",{className:"flex flex-col px-10 py-10",children:[e.jsx("h3",{className:"flex justify-center text-coral-red text-4xl font-bold",children:"Sign Up"}),e.jsx("p",{className:"flex justify-center mt-4 text-gray-500 text-xl",children:"Enter your information to create an account"}),e.jsx("p",{className:"mt-5 font-bold text-lg",children:"Full Name"}),e.jsx("input",{type:"text",name:"fullName",id:"fullname",placeholder:"Tony Stark",value:l,onChange:a=>c(a.target.value),className:"w-full border border-gray-300 h-10 mt-3 rounded-lg p-2"}),e.jsx("p",{className:"mt-5 font-bold text-lg",children:"Email"}),e.jsx("input",{type:"email",name:"email",id:"email",placeholder:"tony@example.com",value:r,onChange:a=>m(a.target.value),className:"w-full border border-gray-300 h-10 mt-3 rounded-lg p-2"}),e.jsx("p",{className:"mt-5 font-bold text-lg",children:"Password"}),e.jsx("input",{type:"password",name:"password",id:"password",value:s,onChange:a=>u(a.target.value),className:"w-full border border-gray-300 h-10 mt-3 rounded-lg p-2"}),d&&e.jsx("p",{className:"text-red-500 mt-2",children:d}),e.jsx("button",{onClick:g,className:`mt-5 bg-white text-coral-red border border-coral-red hover:text-white 
              hover:bg-coral-red font-bold text-xl h-12 rounded-lg`,children:"Sign Up"}),e.jsxs("div",{className:"flex flex-row mt-4 justify-center gap-1",children:[e.jsx("p",{children:"Already have an account?"}),e.jsx("button",{className:"font-bold underline text-coral-red",onClick:()=>o("/signin"),children:"Login"})]})]})})})}),e.jsx("section",{className:"padding-x padding-t pb-8 bg-black",children:e.jsx(y,{})}),e.jsx(v,{})]})}export{F as default};
