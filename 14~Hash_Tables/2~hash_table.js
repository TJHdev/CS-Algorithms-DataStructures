class HashTable {
  constructor(size=51) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  // 1. Accepts a key and a value
  // 2. Hashes the key
  // 3. Stores the key-value pair in the hash table array via seperate chaining
  set(key, value) {
    let map = this.keyMap;
    let hash = this._hash(key);
    if (!map[hash]) {
      map[hash] = []; // if it is empty, create an array inside.
    }
    map[hash].push([key, value]) // always push on the key-value pair.
  }
  // 1. Accepts a key
  // 2. Hashes the key
  // 3. Retrieve the key-value pair in the hash table (linear search)
  // 4. If they key isn't found, returns undefined
  get(key) {
    let map = this.keyMap;
    let hash = this._hash(key);
    if(!map[hash]) return undefined
    if(map[hash].length > 1) { // loop through the collision properties for a match
      for(let i = 0; i < map[hash].length; i++) {
        if(map[hash][i][0] === key) {
          return map[hash][i][1];
        }
      }
    } else {
      return map[hash][0][1];
    }
  }
  keys() { // normally should be only unique keys that get returned
    let keysArr = [];
    let map = this.keyMap;
    for (let i = 0; i < map.length; i++) {
      if(map[i]) {
        for(let j = 0; j < map[i].length; j++) {
          if(!keysArr.includes(map[i][j][0])) { // if the totalling array doesn't include the current map (slow implementation)
            keysArr.push(map[i][j][0]) // push it into the array
          }
        }
      }
    }
    return keysArr;
  }
  values() { // normally should be only unique values that get returned
    let valuesArr = [];
    let map = this.keyMap;
    for (let i = 0; i < map.length; i++) {
      if(map[i]) {
        for(let j = 0; j < map[i].length; j++) {
          if(!valuesArr.includes(map[i][j][1])) { // if the totalling array doesn't include the current map
            valuesArr.push(map[i][j][1]) // push it into the array
          }
        }
      }
    }
    return valuesArr;
  }
}

let hashtable = new HashTable();

hashtable.set("maroon", "#800000");
hashtable.set("yellow", "#FFFF00");
hashtable.set("olive", "#808000");
hashtable.set("salmon", "#FA8072");
hashtable.set("lightcoral", "#F08080");
hashtable.set("mediumvioletred", "#C71585");
hashtable.set("plum", "#DDA0DD");
hashtable.set("purple", "#DDA0DD");
hashtable.set("violet", "#DDA0DD");

console.log(hashtable.keyMap);



hashtable.get('purple');
hashtable.get('blue');