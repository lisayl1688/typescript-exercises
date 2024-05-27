import colors from './special-color';

// function randomColorGenerator(): colors {
//     const colorValues = Object.values(colors).filter(value => typeof value === 'number') as number[];
//     const randomIndex = Math.floor(Math.random() * colorValues.length);
//     return randomIndex as colors;
// }
function getRandomColor(){
    const values = Object.values(colors);
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
    
  }

export default getRandomColor();