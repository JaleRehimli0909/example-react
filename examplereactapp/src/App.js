// 1

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [number, setNumber] = useState(0);

//   const increment = () => {
//     setNumber(number + 1);
//   };
//   const AsyncIncrement = () => {
//     setTimeout(() => {
//       setNumber((currentNumber) => currentNumber + 1);
//     }, 2000);
//   };
//   return (
//     <div className="App">
//       <button onClick={increment}>Increment</button>
//       <button onClick={AsyncIncrement}>AsyncIncrement</button>
//       <p>{number}</p>
//     </div>
//   );
// }

// export default App;

// 2

// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [user, setUser] = useState({
//     name: "Jale",
//     email: "jalereahimlii0909@gmail.com",
//     images: ["profil.jpg", "cover.jpg"],
//   });
//   const [inputValue, setInputValue] = useState("");

//   const changeName = () => {
//     setUser((prev) => ({ ...prev, name: inputValue }));
//   };

//   return (
//     <div className="App">
//       <h2>User:</h2>
//       <input
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="enter a new"
//       />
//       <button onClick={changeName}>Change name</button>
//       <span>Username is : {user.name}</span>
//     </div>
//   );
// };

// export default App;

// 3
// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [user, setUser] = useState({
//     name: "",
//     surname: "",
//     username: "",
//     email: "",
//     password: "",
//     country: "",
//     city: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     console.log(user);
//   };
//   return (
//     <form className="form">
//       <input
//         type="text"
//         name="name"
//         onChange={handleChange}
//         placeholder="name"
//       />
//       <input
//         type="text"
//         name="surname"
//         onChange={handleChange}
//         placeholder="surname"
//       />
//       <input
//         type="text"
//         name="username"
//         onChange={handleChange}
//         placeholder="username"
//       />
//       <input
//         type="text"
//         name="email"
//         onChange={handleChange}
//         placeholder="email"
//       />
//       <input
//         type="text"
//         name="password"
//         onChange={handleChange}
//         placeholder="password"
//       />
//       <input
//         type="text"
//         name="country"
//         onChange={handleChange}
//         placeholder="country"
//       />
//       <input
//         type="text"
//         name="city"
//         onChange={handleChange}
//         placeholder="city"
//       />
//       <input
//         type="text"
//         name="address"
//         onChange={handleChange}
//         placeholder="address"
//       />
//       <button>Submit</button>
//     </form>
//   );
// };

// export default App;


// 4
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "black sneakers", quantity: 1 },
    { id: 2, title: "red t-shirt", quantity: 1 },
    { id: 3, title: "blue jeans", quantity: 1 },
  ]);

  const [selectedProduct, setSelectedProduct] = useState({});

  const increment = (id) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        } else return product;
      });
    });
  };

  const handleChoose = (id) => {
    const product = products.find((p) => p.id === id);
    setSelectedProduct(product);
  };
  return (
    <div className="app2">
      <h4>All Product</h4>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.title}
            <button onClick={() => handleChoose(product.id)}>Choose</button>
          </span>

          <div className="quantity">
            <button>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => increment(product.id)}>+</button>
          </div>
        </div>
      ))}
      <h4>Selected Product</h4>
      <span>{selectedProduct?.title}</span>
      <span>{selectedProduct?.quantity}</span>
    </div>
  );
};

export default App;
