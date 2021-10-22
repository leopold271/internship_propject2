let initialState = {
    userName: 'leopold271',
    login: '',
    id: '',
    followers: ''
}


export const repoDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setRepoData':
            return {
                ...state,
                login: action.payload.login,
                id: action.payload.id,
                followers: action.payload.followers
            }

        default:
            return state
    }
}


export async function fetchRepoData(dispatch, getState) {
    const state = getState()
    const user = state.repoData.userName;
    try{
        let response = await fetch(`https://api.github.com/users/${user}`, { method: 'GET'})
        if(response.status == 200) {
            let repo = await response.json();
            dispatch({type: 'setRepoData', payload: repo})
        }
    }  catch (err) {
        console.log(err);
    }
    
}


            // async componentDidMount() {
            //     try {
            //         let response = await fetch(`https://api.github.com/users/${this.state.userName}`, { method: 'GET' })
            //         if (response.status == 200) {
            //             let repo = await response.json();
            //             let { login, id, followers } = await repo;
            //             this.setState((prevState) => ({
            //                 login,
            //                 id,
            //                 followers
            //             }))
            //         }
            //     } catch (err) {
            //         console.log(err);
            //     }

            // }