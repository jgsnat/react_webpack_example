import React from 'react';

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
            </div>
        );
    }
    
}

export default App;