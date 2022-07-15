import { IRoom } from "./IRoom"
import { IUser } from "./IUser"

export interface ICreateBooking {
    roomId: IRoom["roomId"] | undefined,
    userId: IUser['userId'] | undefined,
    checkInDate: Date | undefined, 
    checkOutDate: Date | undefined, 
    daysOfStay: number,
    createdAt: Date | undefined,
    updatedAt: Date | undefined

}

export interface IBooking extends ICreateBooking {
    bookingId: string
}

export type TMyBookings = Pick<IBooking, "bookingId" | "checkInDate" | "checkOutDate"  >
