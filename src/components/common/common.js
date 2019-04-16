/*公用操作类 */
const common={
    //判断用户是否登录
    isLogin(){
        let userInfo=localStorage.getItem('ms_userinfo');
        if(userInfo&&userInfo!=''){
            return true;
        }else{
            return false;
        }
    },
    //获取用户信息，自定义业务逻辑
    getLoginInfo(){
        let userInfo=localStorage.getItem('ms_userinfo');
        return userInfo;
    },
    //获取用户名
    getUserName(){
        return 'admin';
    },
    //登出
    logout(){
        localStorage.removeItem('ms_userinfo');
    },
    hasPermission(uri){
        return true;
    }

}
export default common;