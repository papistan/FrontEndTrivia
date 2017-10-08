//export default function() {
function test() {
  var request = new XMLHttpRequest();
  request.open("GET", "../data/cards.json", false);
  request.send(null)
  var JSON_object = JSON.parse(request.responseText);
  return JSON_object.currentDeck;
}
