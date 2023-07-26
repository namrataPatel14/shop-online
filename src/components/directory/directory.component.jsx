import DirectoryItem from '../directory-item/directory-item.component';
import hats from "../../assets/hats.jpg";
import footwear from "../../assets/shoes.jpg";
import jackets from "../../assets/jackets.jpg";
import women from "../../assets/women.jpg";
import mens from "../../assets/mens.jpg";
import './directory.styles.scss';

const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: hats,
      route:'shop/hats'
    },
    {
      id: 2,
      title: "Sneakers",
      imageUrl: footwear,
      route:'shop/sneakers'
    },
    {
      id: 3,
      title: "Jackets",
      imageUrl: jackets,
      route:'shop/jackets'
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: women,
      route:'shop/womens'
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: mens,
      route:'shop/mens'
    },
  ];

const Directory = () =>{
    return(
        <div className="directory-container">
            {
                categories.map((category)=>(
                <DirectoryItem key={category.id} category={category}/>
                ))
            }
        </div>
    )
}
export default Directory;