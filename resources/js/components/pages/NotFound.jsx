import React from 'react'

import MainApp from "../templates/MainApp"
  
function NotFound() {
 
    return (
        <MainApp>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">404 | Page Not Found</h2>
            </div>
        </MainApp>
    );
}
  
export default NotFound;