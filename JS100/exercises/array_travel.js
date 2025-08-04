let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(destination, destinations) {
  return destinations.filter(location => location === destination).length >= 1;
}

console.log(contains('Barcelona', destinations));
console.log(contains('Nashville', destinations));
