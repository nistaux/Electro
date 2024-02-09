import React from 'react';

const handleClick = (e) => {
    switch(e.target.innerText){
        case "Play":
            console.log('Play')
            break
        case "Scores":
            console.log('Scores')
            break
        case "Exit":
            console.log('Exit')
            break
        default:
            console.log("Error: Bad thing happened with clicking options in title")
            break
    }
}

const Title = () => {
    return (
        <div className='title-stuff'>
            <h1>Electro</h1>
            <h2 onClick={handleClick}>Play</h2>
            <h2 onClick={handleClick}>Scores</h2>
            <h2 onClick={handleClick}>Exit</h2>
        </div>
    );
}

export default Title;
