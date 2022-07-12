

export interface IRoom {
    roomId: string,
    name: string
    description: string,
    pricePerNight: Number,
    address: string,
    guestCapacity: Number,
    numOfBeds: Number,
    breakfast: Boolean,
    internet: Boolean,
    airConditioned: Boolean,
    petsAllowed: Boolean,
    roomCleaning: Boolean,
    category: 'King' | 'Single' | 'Twins' | string,
    createdAt: Date,
    updatedAt: Date,
}

export type TCreateRoom = Pick<IRoom, "name" | "description" | "address" | "guestCapacity" | "numOfBeds" | "category" | "internet" | "airConditioned" | "breakfast" | "petsAllowed" | "roomCleaning" | "pricePerNight">
