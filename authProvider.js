import { savedData } from "./fakeServer/data";

export default {
    login: ({ username, password }) => {
        
        var user = savedData.users.filter((user) => {return user.username === username })

        //console.log(user);
        
        if(user.length > 0) { 
            if(user[0].password === password) { 
                localStorage.setItem('username', username);
                return Promise.resolve();} 
            else { return Promise.reject();} 
             } 
        else { return Promise.reject();}
        
    },
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>
        localStorage.getItem('username') ? Promise.resolve() : Promise.reject(),
    getPermissions: () => Promise.reject('Unknown method'),
};
