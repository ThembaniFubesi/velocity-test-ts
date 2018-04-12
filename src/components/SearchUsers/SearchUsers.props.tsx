export interface SearchUsersProps {
    fetchUsers(name: string): void;
    fetchProfile(name: string): void;
}