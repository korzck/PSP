import { ProductComponent } from "../../components/product/index.js";
import { BackButtonComponent } from "../../components/back-button/index.js";
import { MainPage } from "../main/index.js";
import { ajax } from "../../modules/ajax.js";
import { urls } from "../../modules/urls.js";
import { ID } from "../../modules/env.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id;
    }

    renderData(item) {
        const product = new ProductComponent(this.pageRoot);
        product.render(item[0]);
    }
    getData() {
        ajax.post(urls.getUserInfo(this.id), (data) => {
            this.renderData(data.response);
        });
    }

    get pageRoot() {
        return document.getElementById("product-page");
    }

    getHTML() {
        return `
                <div id="product-page"></div>
            `;
    }

    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    render() {
        this.parent.innerHTML = "";
        const html = this.getHTML();
        this.parent.insertAdjacentHTML("beforeend", html);

        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render(this.clickBack.bind(this));

        this.getData();
    }
}

await fetch("https://api.vk.com/method/friends.get", {
    credentials: "omit",
    headers: {
        "User-Agent":
            "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0",
        Accept: "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/x-www-form-urlencoded",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
    },
    referrer: "https://dev.vk.com/",
    body: "user_id=123&access_token=token&v=5.131",
    method: "POST",
    mode: "cors",
});
