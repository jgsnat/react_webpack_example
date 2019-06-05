import React from 'react';
import Component from './Component';

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
            </div>
        );
    }
    
}

export default App;