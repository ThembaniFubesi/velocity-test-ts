import * as React from 'react';
import { UserProps } from './User.props';

// This is the component that displays all the users after searching
class User extends React.Component<UserProps, {}> {
    constructor(props: UserProps) {
        super(props);
        this.fetchUser = this.fetchUser.bind(this);

    }
    fetchUser(username: string) {
        this.props.fetchProfile(username);
    }

    render() {
        let users = this.props.users;

        return (
            <div className="usersContainer">
                {
                    users.map((user) => {
                        return (                            
                            <div className="container " onClick={() => this.fetchUser(user.login)} key={user.id} >
                                <div className="row align-items-center userCard">
                                    <div className="col">
                                        <img className="userIcon" src={user.avatar_url} />
                                    </div>
                                    <div className="col">
                                        <div className="userName"> {user.login} </div>
                                    </div>
                                </div>

                            </div>
                        );
                    })
                }

            </div>
        );
    }
}

export default User;