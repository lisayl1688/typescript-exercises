function addTwenty(zahl: number): void {
    const additionResult = zahl + 20;
    console.log({ additionResult });
  }
  console.clear();
  console.log('TypeScript');
  addTwenty(10);
  addTwenty(343434);
  //addTwenty(false);
  //addTwenty('RandomText');
  
  function addThirty(zahl: number): number {
    const result: number = zahl + 30;
    return result;
  }
  
  const resultThirty = addThirty(100);
  console.log({ resultThirty });
  
  const resultMessage = addThirty(77);
  
  function addFourty(zahl1: number, zahl2: number, zahl3: number): number {
    return zahl1 + zahl2 + zahl3 + 40;
  }
  
  const resultFourty = addFourty(44, 66, 77);
  console.log({ resultFourty });
  
  const resultFouty = addFourty(44, 66, 77);
  
  function addFiftyAndPrint(zahl: number, message: string): number {
    const result = zahl + 50;
    console.log(message);
    console.log(result);
    return result;
  }
  
  const resultFifty = addFiftyAndPrint(122, 'Das ist das Ergebnis');
  const sum1 = resultFifty + 23434;
  console.log({ sum1 });
  
  const resultFifty1 = addFiftyAndPrint(200, 'This is the result:');
  
  function getOnlineMessage(isOnline: boolean): string {
    const randomNumber = Math.random();
    if (isOnline) {
      return 'User is online';
    } else if (randomNumber < 0.5) {
      return 'User ist offline';
    }
    return '';
    //return isOnline ? 'User is online' : 'User ist offline';
  }