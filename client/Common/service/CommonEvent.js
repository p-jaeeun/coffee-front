import {
    CommonService
} from "../service/CommonService.js"

export class CommonEvent {
    constructor() {
        this.service = new CommonService()
    }

    async signin(userData) {
        let result

        try {
            result = await this.service.signin(userData)
        } catch (e) {
            console.log("error:" + e)
        }

        if (result === "undefined" || result === undefined) {
            console.log("Result is undefined:" + result)
        } else {
            return result
        }

    }

    async signup(userData) {
        let result

        try {
            result = await this.service.signup(userData)
        } catch (e) {
            console.log("error:" + e)
        }

        if (result === "undefined" || result === undefined) {
            console.log("Result is undefined:" + result)
        } else {
            return result
        }
    }
}