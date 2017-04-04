function Person(name) {
    this.name = name;
}
Person.prototype = {
    c: 0,
    toString: function() {
        return this.name;
    }
}
Object.defineProperty(Person.prototype, 'count', {
    get: function() {
        return ++this.__proto__.c;
    }
});


(\d{1,2} \w+ )?\d{1,2} - \d{1,2}:?(\d{1,2})?[ap]m