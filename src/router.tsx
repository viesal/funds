import React from 'react';
import { Route } from 'react-router-dom';
import { FundFull } from './components/Fund/FundFull';
import { FundEdit } from './components/FundEdit/FundEdit';
import { FundsList } from './components/FundsList/FundsList';

export const Routes = () => (
    <>
        <Route exact path='/' component={FundsList} />
        <Route exact path='/:id' component={FundFull}/>
        <Route exact path='/fund-edit/:id' component={FundEdit}/>
    </>
);
