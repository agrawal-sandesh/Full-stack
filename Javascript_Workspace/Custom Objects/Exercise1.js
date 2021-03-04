var mobJson = '{"productId":1001,"product":{"name":"Moto","series":"G5+","color":"NightSky"},"price":14900,"category":"Electronics","shippingDetails":{"shipmentNo":"1DEL009","company":"Intel Marketing","receivedOn":"2018-6-19"},"seller":{"name":"xyz Mobile","location":"New York","stock":17}}'
var obj = JSON.parse(mobJson);
console.log(obj)
console.log(obj.seller.name + " shipped a " + obj.product.name + " " + obj.product.series + " worth " + obj.price + " with productId: " + obj.productId);