import React from 'react';
import Component from './Component';
import Family from './Family';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            msg: 'Olá, Funcionando!'
        }
    }

    render() {
        return (
            <div>
                { this.state.msg }
                <Component
                    value="Novo Component"
                />
                <Family />
            </div>
        );
    }
    
}

export default App;