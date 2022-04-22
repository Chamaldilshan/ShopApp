import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
function Homepage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/").then((response) => {
      setData(response.data);
    });
  }, []);

  const BtnWomenPage = () => {

    window.location = "/WomenClothing";

  }

  const   BtnMenPage = () => {

    window.location = "/MenClothing";
   
  }

  return (


    <div>
     

      <h1 style={{ textAlign: "center", color: ' #056279', padding: '10px 0', fontWeight: '800', fontSize: '2em', textTransform: 'uppercase', letterSpacing: '0.1em' }} >Modern Walk</h1>
      <h1 className='homeh1'> Flash Sale</h1>
      <button style={{ width: '800px', height: '1000px', margin: '140px 186px', backgroundColor: "white", fontSize: "150%" }} className='box' >
        <h2> {data[2].title}</h2>
        <img className='img' src={data[2].image} alt="#" />
        <button style={{ width: '800px', height: '368px', margin: '632px 0', backgroundColor: "#2BD9AF", fontSize: "150%" }} className='box' >
        <h2 className='m1'> {data[2].price}<p className='p1'>Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...</p></h2>
        </button>
      </button>

      <button style={{ width: '800px', height: '1000px', margin: '140px 186px', backgroundColor: "white", fontSize: "150%" }} className='box' >
          <h2> {data[18].title}</h2>
          <img className='img' src={data[18].image} alt="#" />
          <button style={{ width: '800px', height: '368px', margin: '632px 0', backgroundColor: "#2BD9AF", fontSize: "150%" }} className='box' >
          <h2 className='m1'> {data[18].price}<p className='p1'>Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...</p></h2>
          </button>
        </button>

        <button style={{ width: '800px', height: '1000px', margin: '140px 186px', backgroundColor: "white", fontSize: "150%" }} className='box' >
        <h2> {data[2].title}</h2>
        <img className='img' src={data[2].image} alt="#" />
        <button style={{ width: '800px', height: '368px', margin: '632px 0', backgroundColor: "#2BD9AF", fontSize: "150%" }} className='box' >
        <h2 className='m1'> {data[2].price}<p className='p1'>Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...</p></h2>
        </button>
      </button>

        <button style={{ width: '800px', height: '1000px', margin: '140px 186px', backgroundColor: "white", fontSize: "150%" }} className='box' >
          <h2> {data[18].title}</h2>
          <img className='img' src={data[18].image} alt="#" />
          <button style={{ width: '800px', height: '368px', margin: '632px 0', backgroundColor: "#2BD9AF", fontSize: "150%" }} className='box' >
          <h2 className='m1'> {data[18].price}<p className='p1'>Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...</p></h2>
          </button>
        </button>

   


   
      <button onClick={BtnMenPage} style={{ width: '1718px', height: '885px', margin: '140px 186px', backgroundColor: "#2BD9AF", fontSize: "150%" }} className='box' > <h2 className='A1'>Men's Clothing</h2> </button>
   
      <button onClick={BtnWomenPage} style={{ width: '1718px', height: '885px', margin: '140px 186px', backgroundColor: "#FF5E84", fontSize: "150%" }} className='box' ><h2 className='A1'>Women's Clothing</h2></button>



    </div>
  )
}

export default Homepage