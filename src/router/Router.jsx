import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home/Home';
import ContactUs from '../pages/ContactUs/ContactUs';
import Dashboard from '../pages/DashBoard/DashBoard';
import OurMenu from '../pages/OutMenu/OurMenu';
import SignIn from '../pages/SignIn/SignIn';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';
import AuthLayout from '../layouts/AuthLayout';
import Orders from '../pages/Admin/Orders';
import Users from '../pages/Admin/Users';
import Settings from '../pages/Admin/Settings';
import Order from '../pages/Order/Order';



function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Default Layout */}
                <Route
                    path="/"
                    element={
                        <MainLayout>
                            <Home />
                        </MainLayout>
                    }
                />
                <Route
                    path="/contact-us"
                    element={
                        <MainLayout>
                            <ContactUs />
                        </MainLayout>
                    }
                />
                <Route
                    path="/our-menu"
                    element={
                        <MainLayout>
                            <OurMenu />
                        </MainLayout>
                    }
                />
                <Route
                    path="/order/:category"
                    element={
                        <MainLayout>
                            <Order />
                        </MainLayout>
                    }
                />


                {/* Admin Layout with Nested Routes */}
                <Route path="/dashboard" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="users" element={<Users />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

                {/* Auth Layout */}
                <Route
                    path="/sign-in"
                    element={
                        <AuthLayout>
                            <SignIn />
                        </AuthLayout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
