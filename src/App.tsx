import * as React from 'react';
import { AppProps } from './App.props';
import { AppState } from './App.state';
import { Configuration } from './config/config';
import SearchUsers from './components/SearchUsers/SearchUsers';
import Profile from './components/Profile/Profile';
import Repository from './components/Repository/Repo';
import User from './components/Users/User';

// Main App Component - This is where all the data is controlled
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = new AppState();

    this.fetchProfile = this.fetchProfile.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.showRepository = this.showRepository.bind(this);
  }

// This is the function that calls the api and returns users.
  fetchUsers(username: string) {
    let url = `${Configuration.API_SEARCH_USERS}${username}`;
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          profile: false,
          search: true,
          users: data.items
        });
      })
      .catch((error) => alert('Oops! . There Is A Problem') );
  }
  // This function shows the specific repository and saves the data is state.

  // tslint:disable-next-line:no-any
  showRepository(repository: any) {
    this.setState({
      repository,
      search: false,
      profile: false,
      showRepository: true,
    } as {});

  }

  // This function fetches a Specific profile AND the repositories of that user.
  fetchProfile(username: string): void { 
    let url = `${Configuration.API_USER}/${username}`;
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        fetch(`${url}/repos`)
        .then((response) => response.json() )
        .then((repos) => {
          this.setState({
            user: {
              avatar_url: data.avatar_url,
              id: data.id,
              login: data.login,
              repos,
              username: data.login,
              name: data.name,
              avatar: data.avatar_url,
              email: data.email,
              bio: data.bio,
              createdAt: data.created_at,
              homeUrl: data.html_url,
              notFound: data.message,
            },
            profile: true,
            search: false,
            showRepository: false,
            users: []
          });
        });
      })
      .catch((error) => alert('Oops! . There Is A Problem') );
  }

  // the functions are passed into the Search Profile componant to be used from there later on. 
  //  This is how you push data back up the structure
  // Specific states are checked to determine what the user should be seeing.
  render() {
    let showProfile = this.state.profile;
    let showSearch = this.state.search;
    let showRepository = this.state.showRepository;
    return (
      <div>
            <SearchUsers fetchProfile={this.fetchProfile} fetchUsers={this.fetchUsers}/>
            {
            showProfile ?   
            <Profile 
              showRepository={this.showRepository} 
              fetchUsers={this.fetchUsers} 
              data={this.state.user} 
            /> : null
            }
            {
              showSearch ? 
              <User
                fetchProfile={this.fetchProfile}
                users={this.state.users}
                fetchUsers={this.fetchUsers}
              /> : null
            }
            {
              showRepository ? 
              <Repository 
                fetchProfile={this.fetchProfile}
                repos={this.state.repository}

              /> : null
            }
        
      </div>
    );
  }
}

export default App;