import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from '../Test/Test';

const SecondRouter = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route index element={<Test />} />

            </Routes>

        </BrowserRouter>
    );
};

export default SecondRouter;