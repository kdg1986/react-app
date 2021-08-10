import React from 'react';
import ReactDOM from 'react-dom';
import Layout from "@/layout"
import MaterialLayout from '@/layout/MaterialUI'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  /*<React.StrictMode>*/
    <BrowserRouter>
      {
        /*<Layout/>*/
        <MaterialLayout/>
      }
    </BrowserRouter>
  /*</React.StrictMode>*/,
  document.getElementById('root')
);
