import React, { Component } from 'react'

export class User extends Component {
componentDidMount(){
    this.props.getUsers(this.props.match.params.login);
}

    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        }=this.props.users;

        const { loading } = this.props;
        return (
            <div>
              {name};
            </div>
        )
    }
}

export default User
