// ? - Leite eine neue Klasse Yoga von Activity ab (yoga.ts)
// ? - Die Klasse hat die zusätzliche Eigenschaft type vom Datentyp Enum
// ? → Werte sind: Hatha, Vinyasa, Ashtanga und Bikram
import Activity from './Activity';
import YogaType from './YogaType';

class Yoga extends Activity {
  public yogaType: YogaType;
  constructor(name: string, type: YogaType) {
    super(name);
    this.yogaType = type;
  }
}
export default Yoga;
