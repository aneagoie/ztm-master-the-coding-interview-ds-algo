let user = {
    name: 'Kyle',
    age: 54,
    magic: true,
    scream: function() {
        console.log('aaaaaah!');
    }
}

console.log(user.name); // Lookup O(1)
user.spell = 'abra kadabra'; // Insert O(1);
console.log(user);