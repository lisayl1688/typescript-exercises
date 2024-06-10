import Activity from './activity';
console.log('hallo');

const activity = new Activity('Surfing');
console.log(activity.difficulty);

// ? Setter funktioniert wunderbar
activity.difficulty = 200;
console.log(activity.difficulty);
