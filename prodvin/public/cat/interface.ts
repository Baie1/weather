
interface IUserAge {
    age:number
}
interface IUser extends IUserAge{
    name:string
    email:string
}

type TypeMen = {
    name:string
    email:string
}&TypePerson


type TypePerson = {
    age: number
}


const user: IUser = {
    email:'dsadsa',
    name:'max',
    age:12
}


interface ICar {
    name?:string
    price?:number
    yearBuild?:number
}

// interface ICarUpdate extends Omit <ICar,'id'>{}
// interface ICarId extends Pick<ICar,'id'>{}

// interface ICarOptional extends Partial <ICar>{}
// interface ICarReadOnly extends Readonly <ICar>{}
// interface IRequiredCar extends Required <ICar>{}

// type TypeCarRecord = Record<'name' | 'price', string | number>

// type TypeGetName = () => string
// type Return = ReturnType<TypeGetName>


//
// type Any Extract<'max' | 'andrey','andrey' | 'misha'> возвращяет похожие строки
// type Any Exclude<'max' | 'andrey','andrey' | 'misha'> возвращяет первую строку

// type NotNull= NotNullable<string | number | null | undefined> удаляет все null и undefined

