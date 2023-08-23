import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss'
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { signOutUser } from '../../utils/firebase/firebase.utils';



const Navigation = () =>{
   const { currentUser } = useContext(UserContext);
   const { isCartOpen } = useContext(CartContext);
    return(
        <Fragment>
           <div className='navigation'>
              
              <Link className='logo-container' to='/'>
                <img src={require('../../assets/logo.png')} alt="logo" ></img>
              </Link>
              <div className='nav-links-container'>
              
                <Link className='nav-link' to='/shop'>
                    Shop
                </Link>
                {
                  currentUser ?
                  <span className='nav-link' onClick={signOutUser}>Sign Out</span> :
                  <Link className='nav-link' to='/auth'>
                   Sign In
                  </Link>
                }
                
                <CartIcon />
              </div>
              {isCartOpen && <CartDropdown/>}
           </div>
           <Outlet />
        </Fragment>
    )
}
export default Navigation;