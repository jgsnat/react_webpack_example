import React from 'react';

export default props => (
    <div>
        <h1>Família { props.lastName }</h1>
        { props.children }
    </div>
);