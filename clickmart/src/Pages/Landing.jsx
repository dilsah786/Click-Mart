import React from "react";
import useFetchData from "../customHooks/useFetchData";

const Landing = () => {

    const {data,loading} = useFetchData("http://localhost:8080/products");

    console.log(data);



  return (
    <div>
      {/* <div>Shirt , tshirts,shoes in a row with scroll in mobile view</div> */}
      {/* <div>Promotional Page And Discount page</div> */}
      {/* <div>Poster Page</div> */}
      {/* <div>
      
       Items
       <div>
         image
        
         <div>
           brand
         oldPrice x
         new price
          title
          ratings
         </div>
         
       
       </div>
      
       </div> */}
    </div>
  );
};

export default Landing;
