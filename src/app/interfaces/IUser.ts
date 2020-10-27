export interface IUser {
    account: {
        id: number,
        username: string
    },
    currentStatus: string,
    server: string
}