// - Lege folgende Funktionen in den Dateien an
// - ProductFunctions: createProduct(name: string, price: number)
// - ProductServiceFunctions: addProductToService(service: string, productName: string)
// - OrderFunctions: createOrder(products: string[])
// - OrderServiceFunctions: addOrderToService(service: string, orderNumber: string)
// - Die Funktionen sollen keine Logik enthalten, nur per console.log den Funktionsnamen (fest reingeschrieben) und die Werte durch übergebenen Parameter ausgeben!
// - Lege eine Datei app.ts an
// - Dort sollen alle verfügbaren Funktionen importiert werden
// - Rufe alle Funktionen mit Beispielwerten auf



function addOrderToService(service: string, orderNumber: string) {
    console.log("addOrderToService", service, orderNumber);
}

export {addOrderToService};