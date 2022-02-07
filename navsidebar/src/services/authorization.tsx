
export const authen = (response:any, next:any) => {
    if(window !== undefined){
        sessionStorage.setItem("token", JSON.stringify(response.data.token));
        sessionStorage.setItem("username", JSON.stringify(response.data.username));
        sessionStorage.setItem("id", JSON.stringify(response.data._id));
        sessionStorage.setItem("isAdmin", JSON.stringify(response.data.isAdmin));
    }
    next()
};


export const getToken = () => {
    if(window !== undefined){
        if(sessionStorage.getItem("token")){
            return JSON.parse(sessionStorage.getItem("token") || '{}');
        }else{
            return false
        }
    }
}


export const getUser = () => {
    if(window !== undefined){
        if(sessionStorage.getItem("username")){
            return JSON.parse(sessionStorage.getItem("username") || '{}');
        }else{
            return false
        }
    }
}


export const getId = () => {
    if(window !== undefined){
        if(sessionStorage.getItem("id")){
            return JSON.parse(sessionStorage.getItem("id") || '{}');
        }else{
            return false
        }
    }
}


export const getIsAdmin = () => {
    if(window !== undefined){
        if(sessionStorage.getItem("isAdmin")){
            return JSON.parse(sessionStorage.getItem("isAdmin") || '{}');
        }else{
            return false
        }
    }
}


export const logout = (next:any) => {
    if(window !== undefined){
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("isAdmin");
    }
    next()
}