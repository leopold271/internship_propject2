import React from 'react';


class RepoData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user1: 'leopold271',
            login: '',
            id: '',
            followers: ''
        }

        const getUser = async (name) => {
            try {
                let response = await fetch(`https://api.github.com/users/${name}`, { method: 'GET' })
                if (response.status == 200) {
                    let repo = await response.json();
                    let { login, id, followers } = await repo;
                    // this.setState({
                    //     login,
                    //     id,
                    //     followers
                    // })
                    this.setState((prevState) => ({ login, id, followers }))
                }
            } catch (err) {
                console.log(err);
            }
        }


        getUser(this.state.user1);

    }

    render() {

        const e = React.createElement;

        return (
            e('div', null, [
                e('div', null, `user login: ${this.state.login}`),
                e('div', null, `user id: ${this.state.id}`),
                e('div', null, `user followers: ${this.state.followers}`)
            ])
        )
    }

}

export default RepoData;