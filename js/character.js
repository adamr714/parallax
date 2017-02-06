var Weapon = {
  name: null,
  threatRange: 0,
  damage: 0,
  ep: 0,
  special: null,
  renown: 0
};

function createWeapon(name, threatRange, damage, ep, special, renown) {
  var weapon = Object.create(Weapon);
  weapon.name = name;
  weapon.threatRange = threatRange;
  weapon.damage = damage;
  weapon.ep = ep;
  weapon.special = special;
  weapon.renown = renown;
  return weapon;
}

var weapons = [
  createWeapon('dagger',.5, 0, 1,2),
  createWeapon('spear',2,1,2,2),
  createWeapon('claymore',3,3,4,6),
  createWeapon('great axe', 2,2,3,'brutal',6),
  createWeapon('great sword', 1,2,3,'vicious',5),
  createWeapon('maul',2,2,3,'piercing[2]',4),
  createWeapon('hand axe',1,1,1,1),
  createWeapon('rapier',1,0,1,'piercing[1]',2),
  createWeapon('short sword',1,1,1, 'precise',3),
  createWeapon('battle axe',1,1,2,'vicious',4),
  createWeapon('cayad sword',1,1,2,'brutal',3),
  createWeapon('halberd',2,1,2,'piercing[1]',3),
  createWeapon('long sword',2,2,2,2)
];


var LongRange = {
  name: null,
  pointBlank: 0,
  normal: 0,
  longRanged: 0,
  damage: 0,
  ep: 0,
  epecial: null,
  renown: 0
};


function createLongRange(name, pointBlank, normal, longRanged, damage, ep, special, renown) {
  var longRange = Object.create(LongRange);
  longRange.name = name;
  longRange.pointBlank = pointBlank;
  longRange.normal = normal;
  longRange.longRanged = longRanged;
  longRange.damage = damage;
  longRange.ep = ep;
  longRange.special = special;
  longRange.reenown = renown;
  return longRange;
}

var longRange = [
  createLongRange['heavy crossbow',4,10,14,2,3,'piercing [2]',6],
  createLongRange['short bow',4,8,12,0,1,null,1],
  createLongRange['crossbow',4,10,14,0,2,'piercing [1]',4],
  createLongRange['long bow',6,12,18,1,2,'vicious',4],
  createLongRange['spindler crossbow mk1',6,18,24,2,1,'magazine [20]',5],
  createLongRange['hand crossbow',3,6,12,1,1,'magazine [10]',6],
];

var Character = {
  race: null,
  name: null,
  path: null,
  attributePoints: null,
  form: 0,
  awareness: 0,
  essence: 0,
  movement: 0,
  melee: 0,
  armor: 0,
  defense: 0,
  ranged: 0,
  initiative: 0,
  leftHand: null,
  rightHand: null,
  exhaustionPoints: 0,
  primaryAttribute: null,
  skills: null,
  about: function() {
    var leftHand = (this.leftHand == null) ? 'none': weapons[this.leftHand].name;
    var rightHand = (this.rightHand == null) ? 'none': weapons[this.rightHand].name;
    
      console.log('The ' + this.race + ' is armed with a Left Weapon [' + leftHand + '] and a Right weapon [' + rightHand + '] and has ' + this.exhaustionPoints + ' exhaustionPoints.' );
  },
  charge: function() {
    console.log('Charging with attack: [' + (this.exhaustionPoints*2) + ']');
  }
};

var Minotaur = {
  race: 'Minotaur',
  rightHand: 0,
  exhaustionPoints:4,
  charge: function() {
    console.log('Minotaur Charging with attack [' + (this.exhaustionPoints *2) + '] in a Straight line');
  }
};

var Warrior = {
  race: 'Human',
  rightHand: 1,
  exhaustionPoints:2
};

Minotaur.__proto__ = Character;
Warrior.__proto__ = Character;

var minotaur = Object.create(Minotaur);
var warrior = Object.create(Warrior);

minotaur.about();
minotaur.charge();

warrior.about();
warrior.charge();


// var profile = {
//   Profile.race=
// }



//for (properties in sampleObject) {
//  console.log(properties + " = " + sampleObject[properties]);
//}


