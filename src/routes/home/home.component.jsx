
import hats from "../../assets/hats.jpg";
import footwear from "../../assets/shoes.jpg";
import jackets from "../../assets/jackets.jpg";
import women from "../../assets/women.jpg";
import mens from "../../assets/mens.jpg";
import Directory from '../../components/directory/directory.component';

const Home = () =>{
  const categories = [
    {  
       id:1,
       title:'Hats',
       imageUrl: hats
    },
    {  
      id:2,
      title:'Footwear',
      imageUrl: footwear
    },
    {  
      id:3,
      title:'Jackets',
      imageUrl: jackets
    },
    {  
      id:4,
      title:'Women',
      imageUrl: women
    },
   {
    id:5,
    title:'Mens',
    imageUrl: mens
  }
]
  return (
    <Directory categories={categories} />
  );
}

export default Home;
