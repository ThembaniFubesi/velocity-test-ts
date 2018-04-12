import { RepoModel, Owner } from './Repo.model';

export interface Repos {
    repos: RepoModel[];
    owner: Owner;
    name: string;
    description: string;
    size: number;
    language: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    stargazers_count: number;
    watchers: number;
}

export interface RepoProps {
    repos: Repos;
    fetchProfile(username: string): void;
}