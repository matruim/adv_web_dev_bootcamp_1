import React, {Component} from 'react';
import './Pet.css';
import HobbyList from './HobbyList';

class Pet extends Component{
    render(){
        return (
                <div className="card">
                    <h2 className="name">Moxie</h2>
                    <img 
                        src="https://github.com/tigarcia/Moxie/raw/master/moxie.png" 
                        alt="Moxie" />
                    <HobbyList />
                </div>
            );
    }
}

export default Pet;