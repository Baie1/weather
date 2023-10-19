enum EnumRoles{
    ADMIN = 0,
    GUEST = 1,
    USER = 2
}

interface IUser {
    role:EnumRoles
    color:EnumColors
}

const user:IUser ={
    role:EnumRoles.ADMIN,
    color:EnumColors.black
}
 const enum EnumColors {
    black,pink,green
 }

console.log(EnumRoles[EnumRoles.ADMIN])