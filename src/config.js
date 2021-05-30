
export const StoreToken = async (value) => {
    try{
        localStorage.setItem('token',value);

    }catch (e){
        console.log(e)
    }
};

export const Storeauthenticated = async (value) => {
    try{
        sessionStorage.setItem('isAuthenticted', value)
    }catch (e){
        console.log(e);
    }
};