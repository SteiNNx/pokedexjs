import React, { Fragment } from 'react';
import ListsPokemon from 'app/components/ListsPokemon';

const App = _ => {
    return <Fragment>
        <h3 className="app-header">
            Pokedex
        </h3>
        <div className="app-body">
            <ListsPokemon />
        </div>
        <footer className="app-footer">
            SteiNNxLabs
        </footer>
    </Fragment>
}

export default App;
