let array: string[]

array = ['1','2']

const numbers:ReadonlyArray<number> = [0,1,2,3,4]


type TypeArray = [number , string,null ]

const newArray: TypeArray= [1, '2',null]





type TypeChannelReturn = {
    name: string
}
function getChannel(name:string):TypeChannelReturn {
    return{name}
}



type TypeChannelFunction = (name: string ) => TypeChannelReturn

const  getChannelName :TypeChannelFunction = (name ) => {
    return{name}
}

const getNumbers = (...numbers:number[]) => {
    return numbers
}


function getCar(name: string):string
function getCar(name: string,price:number):string


function getCar(name: string,price?:number):string {
    return price ? `Название ${name},Цена ${price}` :`Название ${name}`
}


const car1 =getCar('bmw')
const car2 =getCar('bmw', 100000)

