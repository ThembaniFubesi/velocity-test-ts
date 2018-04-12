import { UserModel } from '../../App.state';

export interface UserProps {
    users: UserModel[];
    fetchUsers(name: string): void;
    fetchProfile(name: string): void;    
}