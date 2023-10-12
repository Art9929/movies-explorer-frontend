import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props  }) => {
  return (
    props.isAppMounted && (props.loggedIn ? Component : <Navigate to="/" replace/>)
)}

export default ProtectedRoute;


// Основная проблема, почему я не перекидываю loggedIn, потому что он становится true через
// ассинхронный useEffect, который выполняется позже синхрогнного <Navigate to="/signin" replace/>
