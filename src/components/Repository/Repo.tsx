import * as React from 'react';
import { RepoProps } from './Repo.props';

// This component is for Specific repositories
class Repository extends React.Component<RepoProps, {}> {
    constructor(props: RepoProps) {
        super(props);
        this.back = this.back.bind(this);

    }

    processDate(timestamp: string) {
        let date = new Date(timestamp);
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();

        let h = new Date(timestamp).getHours();
        let m = new Date(timestamp).getMinutes();

        h = ((h < 10) ? '0' + h : h) as number;
        m = ((m < 10) ? '0' + m : m) as number;

        var time = h + ':' + m;
        return `${year}-${month}-${day} ${time}`;
    }

    back() {
        let user = this.props.repos.owner.login;
        this.props.fetchProfile(user);
    }
    render() {

        let repository = this.props.repos;
        let user = this.props.repos.owner;
        return (
            <div>
                <div className="repositoryContainer">
                    <button 
                        className="btn btn-primary left" 
                        onClick={() => this.back()}
                    > 
                        <i className="fas fa-caret-left icon"/> 
                        Back 
                    </button>
                    <div className="repositoryName"> {repository.name} </div>
                    <div className="repositoryDesc"> {repository.description} </div>
                    <div>Size: {repository.size / 1000}KB </div>
                    <div>Language: {repository.language} </div>
                    <div>Created At:  {this.processDate(repository.created_at)}</div>
                    <div>Updated At: {this.processDate(repository.updated_at)}</div>
                    <div>Pushed At: {this.processDate(repository.pushed_at)}</div>
                    <div>Stars:  {repository.stargazers_count}</div>
                    <div>Watchers:  {repository.watchers}</div>
                    <div> 
                        <i className="fas fa-code-branch icon-large" /> 
                        <a 
                            target="_blank" 
                            href={`https://github.com/${user.login}/${repository.name}`}
                        > 
                            https://github.com/{user.login}/{repository.name} 
                        </a> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Repository;