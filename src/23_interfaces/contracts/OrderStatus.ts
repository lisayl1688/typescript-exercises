// * OrderStatus soll sowohl im Backend als auch im Frontend die selben Werte enthalten
// * daher ein Enum, dass dann im Interface IOrder verwendet werden kann
enum OrderStatus {
  Created,
  InProgress,
  Delivered,
  Canceled
}
export default OrderStatus;
