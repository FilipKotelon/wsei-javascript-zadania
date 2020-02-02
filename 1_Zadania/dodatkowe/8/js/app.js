function Tree(type){
    this.type = type;
}

const oak = new Tree('oak');
const maple = new Tree('maple');
const pine = new Tree('pine');

Tree.prototype.bloom = function(){
    return "I am blooming";
}

console.log(oak.bloom());
console.log(maple.bloom());
console.log(pine.bloom());