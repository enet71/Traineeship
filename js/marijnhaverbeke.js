/*Point*/
class Point{
	constructor(a,b){
      this.a = a;
      this.b = b;
    }
  
  	plus(point){
    	this.a += point.a;
      	this.b += point.b;
      	return this;
    }
}

console.log(new Point(1, 2).plus(new Point(2, 1)).plus(new Point(2, 1)))


/*Speaker upgrade*/
class Speaker {
    constructor(name, verb) {
        this.name = name;
        this.verb = verb || "says";
    }

    speak(text) {
        console.log(this.name + " " + this.verb + " '" + text + "'")
    };
}

class Shouter extends Speaker {
    constructor(name) {
        super(name, "shouts");
    }

    speak(text) {
        super.speak(text.toUpperCase());
    };
}

new Shouter("Dr. Loudmouth").speak("hello there");

/*Getters*/
class Speaker {
    constructor(name, verb) {
        this._name = name;
        this._verb = verb || "says";
    }

    get verb() {
        return this._verb;
    }

    get name() {
        return this._name;
    }

    speak(text) {
        console.log(this.name + " " + this.verb + " '" + text + "'")
    };
}

class Shouter extends Speaker {
    constructor(name) {
        super(name, "shouts");
    }

    speak(text) {
        super.speak(text.toUpperCase());
    };
}

let shouter = new Shouter("Dr. Loudmouth");
shouter.speak("hello there");
console.log(shouter.verb);

/*Fake point*/
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(other) {
        return new Point(this.x + other.x, this.y + other.y);
    }
}

var fakePoint = {
    x: "12",
    y: "15",
    add: function (other) {
        return {
            x: this.x + other.x,
            y: this.y + other.y
        };
    }
};
console.log(fakePoint instanceof Point);

/*Configurable property*/
function startNode(type, value, options) {
    return {type,value,[options.sourceProperty]:options.sourceValue};
}

console.log(startNode("Identifier", "foo", {
    sourceProperty: "src",
    sourceValue: "bar.js"
}));

/*Dingleton*/
var ids = {
    next: 0,
    get(){
        return this.next++
    }

};

console.log(ids.get());
// → 0
console.log(ids.get());
// → 1

/*Closing over scope*/
//ES5
var callbacks_es5 = []
for (var i = 0; i < 10; i++) {
    callbacks_es5.push((function (n) {
        console.log(n);
    }).bind(null,i));
}
callbacks_es5[2]();

//ES6
let callbacks_es6 = [];
for (let i = 0; i < 10; i++) {
    callbacks_es6.push(function () {
        console.log(i);
    })
}
callbacks_es6[2]();

/*Constant non-constance*/
const account = {
    username: "marijn",
    password: "xyzzy"
};

Object.defineProperty(account, "password", {
    writable: false
});

account.password = "s3cret";

console.log(account.password);

/*Accounting*/
const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
];

let totalMachineValue = inventory.reduce((prev, current) => {
    return current.type === "machine" ? prev + current.value : prev;
}, 0);

console.log(totalMachineValue);

/*Sorted array*/
class SortedArray {
    constructor(compare) {
        this.compare = compare;
        this.content = [];
    }

    findPos(elt) {
        return this.content.findIndex(x => this.compare(elt,x) < 0);
    };

    insert(elt) {
        this.content.splice(this.findPos(elt), 0, elt);
    };
}

var sorted = new SortedArray(function (a, b) {
    return a - b
});
sorted.insert(5);
sorted.insert(1);
sorted.insert(2);
sorted.insert(4);
sorted.insert(3);
console.log("array:", sorted.content);

/*Avoiding disaster*/
function go(options) {
    let {
        speed = 4,
        enable = {
            hyperdrive : false,
            frobnifier : true
        }
    } = options;
    console.log(
        "speed=", speed,
        "hyperdrive:", enable.hyperdrive,
        "frobnifier:", enable.frobnifier);
}

go({speed: 5});

/*Default argument*/
function lastIndexOf(arr, elt, start = arr.length) {
    for (let i = start - 1; i >= 0; i--)
        if (arr[i] === elt) return i;
    return -1
}

console.log(lastIndexOf([1, 2, 1, 2], 2));

/*Improve this code*/
//?????????????????

/*Spread out*/
function replace(array, from, to, elements) {
    array.splice(from,to - from,...elements);
}
let testArray = [1, 2, 100, 100, 6];
replace(testArray, 2, 4, [3, 4, 5]);
console.log(testArray);

function copyReplace(array, from, to, elements) {
    return [...array.slice(0, from),...elements,...array.slice(to)];
}
console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));


let birdsSeen = [];
function recordBirds(time,...arg) {
    birdsSeen.push({time, birds: arg})
}

recordBirds(new Date, "sparrow", "robin", "pterodactyl");
console.log(birdsSeen);

/*The tooling team*/
const teamName = "tooling";
const people = [{name: "Jennie", role: "senior"},
    {name: "Ronald", role: "junior"},
    {name: "Martin", role: "senior"},
    {name: "Anneli", role: "junior"}];


let message = `There are ${people.length} people on the ${teamName} team.
Their names are ${people.map(value => " " + value.name)}.
${people.filter(value => value.role === "senior").length} of them have a senior role.`;

console.log(message); 

/*HTML templating*/
function html(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i] + escapeHTML(values[i]);
    }

    return result;
}

const mustEscape = '<>&"';
console.log(html`You should escape the ${mustEscape.length} characters “${mustEscape}” in HTML`);

function escapeHTML(string) {
    return String(string).replace(/"/g, "&quot;").replace(/</g, "&lt;")
        .replace(/>/g, "&gt;").replace(/&/g, "&amp;");
}

/*Graph traversal*/
const graph = [];

for (let i = 0; i < 50; i++) {
    graph.push({value: Math.random(), edges: []});
}
for (let i = 0; i < 100; i++) {
    let from = graph[Math.floor(Math.random() * graph.length)];
    let to = graph[Math.floor(Math.random() * graph.length)];
    if (from.edges.indexOf(to) != -1) continue;
    from.edges.push(to);
}


function connectedValue(node) {
    let result = node.value;
    let queue = [];
    let passSet = new Set();
    
    queue.push(node);

    while(queue.length > 0){
        let element = queue.shift();
        for(let i = 0; i < element.edges.length; i++){
            if(!passSet.has(element.edges[i])){
                queue.push(element.edges[i]);
                passSet.add(element.edges[i]);
                result += element.edges[i].value;
            }
        }
    }
    return result;
}

console.log(connectedValue(graph[0]));
console.log(connectedValue(graph[24]));
console.log(connectedValue(graph[49]));

/*Implement Map*/
class MyMap {
    constructor(){
        this.map = [];
    }

    set(key,value){
        this.map[key] = value;
    }

    get(key){
        return this.map[key];
    }

    get size(){
        return Object.keys(this.map).length;
    }

    delete(key){
        this.map[key] = undefined;
    }

    clear(){
        this.map = [];
    }
}

const names = new MyMap;
names.set(Array, "the array constructor");
names.set(Math, "the math object");
console.log(names.get(Array));
// → "the array constructor"
console.log(names.size);
// → 2
names.delete(Array);
console.log(names.get(Array));
// → undefined
names.clear();
console.log(names.get(Math));
// → undefined

/*Web crawling*/
function get(url) {
    return new Promise((succeed, fail) => {
        let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        let req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.addEventListener("load", () => {
            if (req.status < 400) {
                succeed({url: url, text: req.responseText});
            }
            else
                fail(new Error("Request failed: " + req.statusText))
        });
        req.addEventListener("error", () => {
            fail(new Error("Network error"))
        });
        req.send(null)
    })
}

function linkify(text) {
    let urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    let array = [];

    while (result = urlRegex.exec(text)) {
        array.push(result[0]);
    }
    return array;
}

get("http://marijnhaverbeke.nl/").then(obj => linkify(obj.text))
    .then(links => {
        links.forEach(element => {
            get(element).then(obj => {
                if (obj.text.indexOf("produces") !== -1) {
                    console.log(obj.url);
                }
            });
        })
    });

/*Promise.all*/
//?????????????

/*Function compose*/
let compose = Symbol();

Function.prototype[compose] = function (a) {
    return function (b) {
        b = Math.abs(b);
        return Math.round(b);
    }
};

let roundedAbs = Math.round[compose](Math.abs);
console.log(roundedAbs(-5.5));

/*Privacy*/
let content = Symbol("content");

class Queue {
    constructor() {
        this[content] = []
    }
    put(elt) {
        return this[content].push(elt)
    }
    take() {
        return this[content].shift()
    }
}

let q = new Queue;
q.put(1);
q.put(2);
console.log(q.take());
console.log(q.take());

/*List iterator*/
class List {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }

    map(f) {
        return new List(f(this.head), this.tail && this.tail.map(f));
    }

    [Symbol.iterator]() {
        let list = [];
        this.map(element => {
            list.push(element);
        });

        return {
            next(){
                let done = !list.length > 0;
                let value = list.shift();

                return {
                    value, done
                };
            }
        }
    }
}

let list = new List("x", new List("y", new List("z", new List("f", null))));

for (let elt of list) {
    console.log(elt);
}

/*Take N*/
function integers() {
    let i = 0;
    return {
        next() {
            return {value: i++};
        },
        [Symbol.iterator]() {
            return this;
        }
    }
}

function take(n, iter) {
    let index = 0;
    return {
        next() {
            let value = iter.next().value;
            let done = true;

            index < n ? done = false : done = true;
            index++;

            return {
                value, done
            }
        },
        [Symbol.iterator]() {
            return this;
        }
    }
}

for (let elt of take(3, integers())) {
    console.log(elt)
}

/*List.from*/
class List {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }

    map(f) {
        return new List(f(this.head), this.tail && this.tail.map(f));
    }

    static from(array) {
        let list;
        let list2;

        for (let element of array) {
            if(!list){
                list = new List(element,null);
                list2 = list;
            }else {
                list2.tail = new List(element, null);
                list2 = list2.tail;
            }
        }
        return list;
    }
}

console.log(List.from([3, 2, 1]));

/*List generator*/
class List {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }

    map(f) {
        return new List(f(this.head), this.tail && this.tail.map(f));
    }

    *[Symbol.iterator]() {
        let list = [];
        this.map(element => {
            list.push(element);
        });

        for(let i = 0; i < list.length; i++){
            yield list[i];
        }
    }
}

let list = new List("x", new List("y", new List("z", null)));

for (let elt of list) {
    console.log(elt);
}

/*Take N again*/
function* integers() {
    for (let i = 0; ; i++) {
        yield i;
    }
}

function* take(n, iter) {
    for (let i = 0; i < n; i++) {
        yield iter.next();
    }
}

for (let elt of take(3, integers())) {
    console.log(elt)
}

/*Async generators*/
//??????????????????