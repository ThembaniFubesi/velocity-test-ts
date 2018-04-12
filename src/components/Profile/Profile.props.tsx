import { RepoModel } from '../Repository/Repo.model';

export interface ProfileData {
    username: string;
    repos: RepoModel[];
    notFound: string;
    avatar: string;
    name: string;
    email: string;
    bio: string;
    createdAt: string;
}

export interface ProfileProps {
    data: ProfileData;
    showRepository(repo: RepoModel): void;
    fetchUsers(username: string): void;    
}