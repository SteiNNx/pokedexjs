import React from 'react';
import ListsPokemon from 'app/components/ListsPokemon';

const App = _ => {
    return <div className="card">
        <div className="card-header text-center">
            Pokedex
        </div>
        <div className="card-body">
            <ListsPokemon />
        </div>
        <div className="card-footer">
            SteiNNxLabs
        </div>
    </div>
}

export default App;
