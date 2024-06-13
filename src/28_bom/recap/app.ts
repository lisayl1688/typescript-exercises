import Activity from './Activity';
import Running from './Running';
import Yoga from './Yoga';
import YogaType from './YogaType';

const myActivity = new Activity('Surfing');
myActivity.execute();
// myActivity._difficulty = 234234234;
const hathaYoga = new Yoga('Hatha 90 Min', YogaType.Hatha);
hathaYoga.execute();

const running10k = new Running('10k', 10);
running10k.warmUp();
running10k.coolDown();
