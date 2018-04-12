import { RepoModel } from './components/Repository/Repo.model';
import { Repos } from './components/Repository/Repo.props';

export class UserModel {
    username: string;
    name: string;
    login: string;
    avatar: string;
    // tslint:disable-next-line:variable-name
    avatar_url: string;
    bio: string;
    createdAt: string;
    email: string;
    homeUrl: string;
    notFound: string;
    repos: RepoModel[];
    id: string;
}

export class AppState {
    user: UserModel = new UserModel();
    profile: boolean = false;
    search: boolean = true;
    showRepository: boolean = false;
    users: UserModel[] = [];
    repository: Repos;
}