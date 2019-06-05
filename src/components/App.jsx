import React from 'react';
import Component from './Component';
import Family from './Family';
import FamilyChildren from './FamilyChildren';
import Member from './Member';

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
                <Component value="Novo Component" />
                <Family />
                <FamilyChildren lastName='Silva'>
                    <Member name="Jefferson" />
                </FamilyChildren>
            </div>
        );
    }
    
}

export default App;