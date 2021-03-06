import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" render={Landing} />
            <Route path="/study" render={TeacherList} />
            <Route path="/give-classes" render={TeacherForm} />
        </BrowserRouter>
    );
}

export default Routes;