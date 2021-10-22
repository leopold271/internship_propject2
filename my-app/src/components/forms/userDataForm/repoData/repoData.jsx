import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const RepoData = () => {

    const userLogin = useSelector(state => state.repoData.login);
    const userId = useSelector(state => state.repoData.id);
    const userFollowersNumber = useSelector(state => state.repoData.followers);

    return (
        <div>
            <div>
                user login: {userLogin}
            </div>
            <div>
                user id: {userId}
            </div>
            <div>
                user followers: {userFollowersNumber}
            </div>
        </div>
    )
}

export default RepoData;