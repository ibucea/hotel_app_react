import { IRoom } from "./IRoom"

export interface ICreateBooking {
    room: IRoom["roomId"] | undefined,
    checkInDate: Date | undefined, 
    checkOutDate: Date | undefined, 
    daysOfStay: number,
}

export interface IBooking extends ICreateBooking {
    bookingId: string
}

export type TMyBookings = Pick<IBooking, "bookingId" | "checkInDate" | "checkOutDate"  >