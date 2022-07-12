import { IntegerDataType } from "sequelize/types"

export interface IUserLogin {
    email: string,
    password: string
}

export interface IUser extends IUserLogin {
    userId: IntegerDataType
}