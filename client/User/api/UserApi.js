import { Ajax } from '/Users/김청하/Desktop/coffee-front/coffee/client/Common/lib/Ajax'

export class UserApi {
    constructor() {
    this.api = new Ajax()
    }

    userLogin(userData) {
        let result;
        
        let str = JSON.stringify(userData)
        
        try {
            result = await this.api.sendAjaxPost("/api/login",str)
        } catch (e) {
            console.log("error:" + e)
        }
        return result 
    }
    
    callMain(userData) {
        let result;
        let {user_id} = userData
        try {
            result = await this.api.sendAjaxGet(`/api/${user_id}/main`)
        } catch (e) {
            console.log("error:" + e)
        }

        return result
    }
}