import React, { useEffect, useState } from 'react';


const RepoData = (props) => {
    const [login, setLogin] = useState('leopold271');
    const [userName, setUserName] = useState('');
    const [userId, setUserID] = useState('');
    const [userFollowers, setUserFollowers] = useState('');

    useEffect( async () => {
        try {
            let response = await fetch(`https://api.github.com/users/${login}`, { method: 'GET' })
            if (response.status == 200) {
                let repo = await response.json();
                let { login, id, followers } = await repo;
                setUserName(login);
                setUserID(id)
                setUserFollowers(followers)
            }
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <div>
            <div>
                user login: {userName}
            </div>
            <div>
                user id: {userId}
            </div>
            <div>
                user followers: {userFollowers}
            </div>
        </div>
    )
}


export default RepoData;