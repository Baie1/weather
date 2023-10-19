function Generics<T>(args:T):T {
    return args
}

Generics<number>(1)
Generics<string>('Hello')


const Generics2 = <T>(args:T):T => {
    return args
}

Generics2<number>(1)
Generics2<string>('Hello')



class Channel<T> {
    private name: T

    constructor(name: T) {
        this.name=name
    }
    getName():T {
        return this.name
    }
}
new Channel<string>('Red')
new Channel<number>(2)

interface IPair <K, V>{
    key: K
    value:V
}

const pair1:IPair<string, number> = {
    key: '1',
    value: 1
}



type TypeLength = {
    length: number
}
function getNameLength<T extends TypeLength>(entity: T):number {
    return entity.length
}

getNameLength('dsfffds')
getNameLength([0,1,2])






