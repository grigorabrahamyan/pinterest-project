class User  {
    constructor(){
        this.isAuthorised = true;
        this.errMsg = "";
    }

/*    login(user){
        return axios
            .post('/api/login', {
                username: user.username,
                password: user.password,
            }).then(res => {
                if(res.data.msg==="success") {
                    localStorage.setItem('adminToken', res.data.JWT);
                    this.isAuthorised = true;
                    return res.data;
                }else if(res.data.msg==="error"){
                    this.isAuthorised=false;
                    this.errMsg = res.data.result[0];
                    return res.data;
                }
            }).catch((err, xhr) => {
                console.log(err, xhr);
            })
    }

    logout(){
        localStorage.removeItem('adminToken');
        this.isAuthorised=false;
    }

    ifAuthorised(){
        if(localStorage.getItem('adminToken')){
            this.isAuthorised=true
        }
        return this.isAuthorised;
    }*/
};
export default new User();