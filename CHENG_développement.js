
var json_data = require('./arret_mobifute.json');
var tab = new Array();

json_data.features.forEach(el => {
    tab.push([el['properties'].nom,el['geometry'].coordinates]);
});

console.log(tab);
console.log(tab[0]);