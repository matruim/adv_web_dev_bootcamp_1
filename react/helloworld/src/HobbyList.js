import React, { Component } from 'react';

class HobbyList extends Component{
    render(){
        const hobbies = ["Sleeping","Eating","Cuddling"];
        const liStyle = {fontSize: '1.5em'};
        return (
            <div className="hobbyList">
                <h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies:</h5>
                <ul>
                    {hobbies.map((h,i) => {
                        return <li key={i} style={liStyle}>{h}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default HobbyList;