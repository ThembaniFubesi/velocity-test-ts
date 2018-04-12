import * as React from 'react';
import { SearchUsersProps } from './SearchUsers.props';

// Component for searchbar
class SearchUsers extends React.Component<SearchUsersProps, {}> {
    username: React.RefObject<HTMLInputElement>;
    constructor(props: SearchUsersProps) {
        super(props);
        this.username = React.createRef();
        this.search = this.search.bind(this);
        this.findUser = this.findUser.bind(this);
    }
    // Initiates a search on page load.
    componentWillMount() {
        this.props.fetchUsers('dylan');
    }

    // Renders Searchbar and Buttons
    render() {
        return (
            <div className="form-group searchBoxContainer">
                <input
                    className="form-control searchBox"
                    type="search"
                    ref={this.username}
                    placeholder="Enter username to search"
                />
                <div className="buttonContainer">
                    <button
                        className="searchBtn btn btn-primary"
                        onClick={this.search}
                    >
                        Search Users
                        <i
                            className="fas fa-search icon"
                        />

                    </button>
                    <button
                        className="searchBtn btn btn-primary"
                        onClick={this.findUser}
                    >
                        Find User
                    </button>
                </div>
            </div>
        );
    }

    // Function that calls api for searching users.
    search(event: React.MouseEvent<HTMLButtonElement>) {
        if (this.username && this.username.current) {
            let username = this.username.current.value;
            this.props.fetchUsers(username);
            this.username.current.value = '';
        }
    }
    // Function that calls api for user.
    findUser(event: React.MouseEvent<HTMLButtonElement>) {
        if (this.username.current) {
            let username = this.username.current.value;
            this.props.fetchProfile(username);
            this.username.current.value = '';
        }
    }

}

export default SearchUsers;
