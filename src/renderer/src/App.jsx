import React from 'react';
import background from './assets/electro-background.png'
import Title from './pages/Title';

const App = () => {
    //console.log(GetState());
    return (
        <>
            <img src={background} alt="background" className='app-state-title'/>
            <Title />
        </>
    );
}

export default App;
