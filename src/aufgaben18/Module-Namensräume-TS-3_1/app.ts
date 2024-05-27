import {createProduct} from './Produkt/productFunctions';
import {addProductToService} from './Produkt/productServiceFunctions';
import {createOrder} from './Order/orderFunctions';
import {addOrderToService} from './Order/orderServiceFunctions';

createProduct("haarspange",5);
addProductToService("in den warenkorb", " haarspange betty");
createOrder(["warenkorbCheck", "bezahlCheck"]);
addOrderToService("kaufbestätigung", "458");
