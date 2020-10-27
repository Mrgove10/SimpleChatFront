export class UserList {
    ServerIP: string;
    UserID: string;
    Username: string;
    Status: string;

    constructor(
        serverip: string,
        userid: string,
        username: string,
        status: string) {
        this.ServerIP = serverip;
        this.UserID = userid;
        this.Username = username;
        this.Status = status;
    }
}
