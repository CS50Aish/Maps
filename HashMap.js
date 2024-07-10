// Creating a HashMap
let hashmap = new Map();

// Initialize with key value pairs
hashmap.set('key1', 'value1');
hashmap.set('key2', 'value2');
hashmap.set('key3', 'value3');
hashmap.set('key4', 'value4');
hashmap.set('key5', 'value5');
hashmap.set('key6', 'value6');

// Display the values in the HashMap
for(let [key, value] of hashmap){
    console.log(`key: ${key}, Value: ${value}`);
}

// Accessing a specific value by key
console.log('\nValue of key2: ', hashmap.get('key2'));

// Check if a key exists in the hashmap 
console.log('\nHashMap has key1: ', hashmap.has('key1'));

// Replace existing values of key2, and key4
hashmap.set('key2', 'value7');
hashmap.set('key4', 'value8');

console.log("\nHashMap after updating key 2 and key4");

// Display the values in the HashMap
for(let [key, value] of hashmap){
    console.log(`key: ${key}, Value: ${value}`);
}

console.log("\nHashMap after removing key 5");

// Removing a key from the hashmap
hashmap.delete('key5');

// Display the values in the HashMap
for(let [key, value] of hashmap){
    console.log(`key: ${key}, Value: ${value}`);
}

// Size of the hashmap
console.log("HashMap Size: ", hashmap.size);

console.log("\nHashMap after clearing all elements");

// Clearing all the elements from the hashmap
hashmap.clear();

// Display the values in the HashMap
for(let [key, value] of hashmap){
    console.log(`key: ${key}, Value: ${value}`);
}

// Size of the hashmap
console.log("HashMap Size: ", hashmap.size);