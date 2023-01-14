import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '@Pages/Main';
import ErrorPage from '@Pages/Error/ErrorPage';
import Goods from '@Pages/Goods/Goods';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path='/goods' element={<Goods/>}/>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default App;
