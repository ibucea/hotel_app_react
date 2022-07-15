import { IntegerDataType } from "sequelize/types"

export interface IUserLogin {
    email: string,
    password: string
}

export interface IUser extends IUserLogin {
    userId: string,
    username: string
}

export interface IUserRegister extends IUserLogin {
    username: string,
}