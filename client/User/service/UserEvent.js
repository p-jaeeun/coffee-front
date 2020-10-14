import {
    UserService
} from '../service/UserService.js'

export class UserEvent {
    constructor() {
        this.service = new UserService()
    }

    // async signin(userData) {
    //     let result

    //     try {
    //         result = await this.service.signin(userData)
    //     } catch (e) {
    //         console.log("error:" + e)
    //     }

    //     if (result === "undefined" || result === undefined) {
    //         console.log("Result is undefined:" + result)
    //     } else {
    //         return result
    //     }

    // }

    // async signup(userData) {
    //     let result

    //     try {
    //         result = await this.service.signup(userData)
    //     } catch (e) {
    //         console.log("error:" + e)
    //     }

    //     if (result === "undefined" || result === undefined) {
    //         console.log("Result is undefined:" + result)
    //     } else {
    //         return result
    //     }
    // }

    async search(userData) {
        let result

        try {
            result = await this.service.search(userData)
        } catch (e) {
            console.log("error:" + e)
        }

        if (result === "undefined" || result === undefined) {
            console.log("Result is undefined:" + result)
        } else {
            return result
        }
    }

    async addReview(userData) {
        let result

        try {
            result = await this.service.addReview(userData)
        } catch (e) {
            console.log("error:" + e)
        }

        if (result === "undefined" || result === undefined) {
            console.log("Result is undefined:" + result)
        } else {
            return result
        }
    }

    async settings(userData) {
        let reuslt

        try {
            result = await this.service.settings(userData)
        } catch (e) {
            console.log("error: " + e)
        }

        if (result === "undefined" || result === undefined) {
            console.log("Result is undefined:" + result)
        } else {
            alert("성공적으로 변경되었습니다.")
            return result
        }
    }

    async headerMenu(clicked_by_user) {
        let result
        switch (clicked_by_user) {
            case "Home":
                try {
                    result = await this.service.callMain()
                } catch (e) {
                    console.log("error:" + e)
                }

                if (result === "undefined" || result === undefined) {
                    console.log("Result is undefined:" + result)
                } else {
                    return result
                }
                break;

            case "User":
                try {
                    result = await this.service.callDashboard()
                } catch (e) {
                    console.log("error:" + e)
                }

                if (result === "undefined" || result === undefined) {
                    console.log("Result is undefined:" + result)
                } else {
                    return result
                }
                break;

            case "Search":
                console.log("Search bar clicked")
                break;
            default:
                console.log("Invalid area clicked!")
                break;
        }
    }

    async userMenu(clicked_by_user) {
        let result

        switch (clicked_by_user) {
            case "Dashboard":
                try {
                    result = await this.service.callDashboard()
                } catch (e) {
                    console.log("error:" + e)
                }

                if (result === "undefined" || result === undefined) {
                    console.log("Result is undefined:" + result)
                } else {
                    return result
                }
                break;

            case "My Hidden Cafe":
                try {
                    result = await this.service.callVisitedCafe()
                } catch (e) {
                    console.log("error:" + e)
                }

                if (result === "undefined" || result === undefined) {
                    console.log("Result is undefined:" + result)
                } else {
                    return result
                }
                break;

            case "My Subscription":
                try {
                    result = await this.service.callSubscription()
                } catch (e) {
                    console.log("error:" + e)
                }

                if (result === "undefined" || result === undefined) {
                    console.log("Result is undefined:" + result)
                } else {
                    return result
                }
                break;
            case "Add New Hidden Cafe":
                console.log("Add cafe-client rendering")
            case "Bookmark":
                console.log("Bookmark-service-not-available")
            case "Settings":
                console.log("Settings-client rendering")
            default:
                break;
        }
    }

    async cafeList(cafe_id) {
        let result

        try {
            result = await this.service.searchCafeInfo(cafe_id)
        } catch (e) {
            console.log("error:" + e)
        }

        if (result === "undefined" || result === undefined) {
            console.log("Result is undefined:" + result)
        } else {
            return result
        }
    }

    async caffeineList(user_id) {
        let result

        try {
            result = await this.service.searchOtherUser(user_id)
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