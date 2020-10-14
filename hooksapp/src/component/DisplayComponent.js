import React from 'react';

function DisplayCity(props){
    const renderList = ({mycity}) => {
        if(mycity){
            return mycity.map((item) => {
                return(
                    <div>
                        <h2>{item.city_name}</h2>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            <center>
                <h2>City List</h2>
            </center>
            {renderList(props)}
        </div>
    )
}

export default DisplayCity;