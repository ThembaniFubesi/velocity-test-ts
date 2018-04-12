import * as React from 'react';
import { ProfileProps } from './Profile.props';
import { RepoModel } from '../Repository/Repo.model';

// This component handles the profiles
class Profile extends React.Component<ProfileProps, {}> {
    constructor(props: ProfileProps) {
        super(props);
        this.showRepo = this.showRepo.bind(this);
        this.back = this.back.bind(this);
    }
    showRepo(repo: RepoModel) {
        this.props.showRepository(repo);
    }
    back() {
        this.props.fetchUsers(this.props.data.username);
    }
    render() {
        let data = this.props.data;

        let repositories = this.props.data.repos;
        let notFound = data.notFound === 'Not Found' ? true : false;

        function processDate(timestamp: string) {
            let date = new Date(timestamp);
            let year = date.getFullYear();
            let month = date.getMonth();
            let day = date.getDate();

            return `${year}/${month}/${day}`;
        }

        if (notFound) {

            return (
                <div className="notfound">
                    <h2>Oh no :(</h2>
                    <p>That user could not be found! </p>
                </div>
            );
        } else {

            return (
                <div className="profileContainer container">
                    <div className="row ">
                        <div className="col">
                            <button
                                className="btn btn-primary"
                                onClick={() => this.back()}
                            >
                                <i className="fas fa-caret-left icon" />
                                Back
                            </button>

                            <div
                                className="profleImgContainer"
                            > <img className="profileImg" src={data.avatar} alt={data.username} />
                            </div>
                            <h2 className="profileInfo">{data.name || data.username}</h2>
                            <h2 className="profileInfo">{data.email}</h2>
                            <h2 className="profileInfo">{data.bio}</h2>
                            <h2 className="profileInfo">{processDate(data.createdAt)}</h2>

                        </div>
                        <div className="col">
                            <div className="repoContainer">
                                {
                                    repositories.map((repo) => {
                                        return (
                                            <div className="repo" onClick={() => this.showRepo(repo)} key={repo.id}>
                                            <div className="row align-items-center">
                                                <div className="col-1">
                                                    <i className="fas fa-code-branch icon-large" />
                                                </div>
                                                <div className="col">
                                                    <div> {repo.name} </div>
                                                    <div> {repo.fullname} </div>
                                                    <div>
                                                        <a
                                                            target="_blank"
                                                            href={`https://github.com/${data.username}/${repo.name}`}
                                                        >
                                                            https://github.com/{data.username}/{repo.name}
                                                        </a> 
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Profile;