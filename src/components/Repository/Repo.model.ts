export class Owner {
    login: string;
}
export class RepoModel {
    name: string;    
    fullname: string;
    id: string;
    owner: Owner;
}