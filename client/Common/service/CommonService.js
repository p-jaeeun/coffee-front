import {
    CommonApi
} from "../api/CommonApi.js"

export class CommonService {
    constructor() {
        this.api = new CommonApi()
    }

    //화면
    async callMain() {
        let result;

        try {
            result = await this.api.callMain();
        } catch (e) {
            console.log("Service-error:" + e);
        }

        return result; //dto를 저장
    }

    async callHome() {
        let result;

        try {
            result = await this.api.callHome();
        } catch (e) {
            console.log("Service-error: " + e);
        }
        return result;
    }

    //정보
    async signin(userData) {
        var result;

        try {
            result = await this.api.signin(userData);
        } catch (e) {
            console.log("Service-error: " + e);
        }

        console.log("id");
        console.log("type:" + typeof result);

        switch (result) {
            case "true":
                let result_of_main = await this.callMain();
                if (result_of_main === undefined || result_of_main === "undefined") {
                    console.log("Service-result-undefined:" + result_of_main);
                    alert("로그인 중 오류가 발생했습니다.");
                    this.callHome();
                    return;
                } else {
                    console.log("Service-result:" + result_of_main);

                    localStorage.clear()
                    localStorage.setItem("user_id", userData.get("user_id"));
                    return ["member", result_of_main];
                }

                case "admin_true":
                    let result_of_admin = await this.api.callMain();
                    if (result_of_admin === undefined || result_of_admin === "undefined") {
                        console.log("Service-result-undefined:" + result_of_admin);
                        alert("로그인 중 오류가 발생했습니다.");
                        this.callHome();
                        return;
                    } else {
                        console.log("Service-result:" + result_of_admin);

                        localStorage.clear()
                        localStorage.setItem("user_id", userData.get("user_id"));
                        return ["admin", result_of_admin];
                    }
                    case "false":
                        alert("아이디 혹은 비밀번호를 확인하세요.");
                        this.callHome();
                        break;
                    case "blockUser":
                        alert("접근이 거부된 유저 입니다.");
                        this.callHome();
                        break;
                    default:
                        alert("로그인중 문제가 발생했습니다. 다시 시도 하세요.");
                        this.callHome();
                        break;
        }
    }

    async signup(userData) {
        var result;
        try {
            result = await this.api.signup(userData);
        } catch (e) {
            console.log("error:" + e);
        }

        console.log("id");
        console.log("type" + typeof result);

        if (result === undefined || result === "undefined") {
            console.log("Service-result-undefined:" + result);
            this.callHome();
            return;
        } else if (result.includes("Sorry")) {
            alert("이미 사용중인 아이디 입니다.");
        } else {
            console.log("Service-result:" + result);
            alert("환영합니다.");
            this.callHome();
            return result;
        }
    }
}