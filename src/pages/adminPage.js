import React from "react";
import { Navigate } from "react-router-dom";

const permission = false;

const AdminPage = () => {
    return (
       <>
       {permission ? (<h3>Jesteś zalogowany - Witamy</h3>) : (
                    <Navigate to="/login"/>
                )}
            
       </>
    )
}

export default AdminPage