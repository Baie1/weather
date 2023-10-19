class Car {
    name:string
    price:number

    constructor(name:string,price:number) {
        this.name = name
        this.price = price
    }
    getInfo():string{
        return`${this.name}- ${this.price}`
    }
}


class Bus extends Car {
    constructor(name: string, price: number) {
        super(name,price)
    }
    test(){
        return this.getInfo()
    }

}

new Car('BMW',100000).getInfo()


const inputElement = document.querySelector('input')
const value1 = (inputElement as HTMLInputElement).value
const value2 = (<HTMLInputElement>inputElement).value


const getLength = (text:string | null): number => {
    return text!.length
}

getLength('werger')
getLength(null)




function LogCLass(constructor : Function) {
    console.log(constructor.name)
}

@LogCLass()
class Plane {
    constructor(id: number) {}
}