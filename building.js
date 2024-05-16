class Building{
    constructor(name){
        this.name =name;
    }
    getName(){
        return this.name
    }

    setName(name){
        this.name = name
    }
}

class Car{
    constructor(name){
        this.name = name
    }

    getName(){
        return this.name
    }

    setName(name){
        this.name = name
    }
}

// module.exports = new Building("Hello")
module.exports = { Building :Building , Car:Car}