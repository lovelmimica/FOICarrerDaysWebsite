import React, { useEffect } from 'react';
import {Redirect, Route, useHistory} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => (
       <Route {...rest} render={(props) => (
           localStorage.getItem('bearerToken') 
           ? <Component {...props} />
           : <Redirect to={{
               pathname: '/login',
               state: { from: props.location}
            }}/> 
       )
   } /> 
)

export default PrivateRoute;