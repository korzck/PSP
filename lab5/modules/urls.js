import { TOKEN, VERSION } from "./env.js";

class Urls {
    constructor() {
        this.url = "https://api.vk.com/method";
        this.commonInfo = `access_token=${TOKEN}&v=${VERSION}`;
    }

    getUserInfo(userId) {
        return `${this.url}/users.get?user_ids=${userId}&fields=photo_400_orig,&${this.commonInfo}`;
    }

    getGroupMembers(groupId) {
        return `${this.url}/groups.getMembers?group_id=${groupId}&fields=photo_400_orig&sort=id_asc&${this.commonInfo}`;
    } //задание по варику//
}

export const urls = new Urls();
