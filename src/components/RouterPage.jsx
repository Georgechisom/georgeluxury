import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../ui/Header.jsx'
import Product from '../pages/Product.jsx';
import Cancel from '../pages/Cancel.jsx';
import Cart from '../pages/Cart.jsx';
import Category from '../pages/Category.jsx';
import Favorite from '../pages/Favorite.jsx';
import NotFound from '../pages/NotFound.jsx';
import Profile from '../pages/Profile.jsx';
import Success from '../pages/Success.jsx';
import Orders from '../pages/Orders.jsx';
import Blog from '../pages/Blog.jsx';
import Index from '../ui/Index.jsx';

export default function RoutePage() { 
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />}>
                    <Route path="Header" element={<Header />} />
                </Route>

                <Route path="Category" element={<Category />} />
                <Route path="Cart" element={<Cart />} />
                <Route path="Favorite" element={<Favorite />} />
                <Route path="*" element={<NotFound />} />
                <Route path="Orders" element={<Orders />} />
                <Route path="Blog" element={<Blog />} />
                <Route path="Profile" element={<Profile />} />
                <Route path="Success" element={<Success />} />
                <Route path="Product" element={<Product />} />
                <Route path="Cancel" element={<Cancel />} />
            </Routes>
        </BrowserRouter>
    )
};