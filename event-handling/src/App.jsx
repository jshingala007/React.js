import { useState } from "react";
import { category, item } from "./Data"; 
import Product from "./Product";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [filterdata, setFilterdata] = useState(item);

 
  const categoryButtonClick = (cat) => {
    if (cat === "All") {
      setFilterdata(item);  
    } else {
      const filteredItems = item.filter((product) => product.category === cat);
      setFilterdata(filteredItems);
    }
  };

  return (
    <>
      <div align="center">
        <h1>Filter App</h1>

 
        <Product
          category={category}
          filterdata={filterdata}
          categoryButtonClick={categoryButtonClick}
        />
      </div>
    </>
  );
}

export default App;
