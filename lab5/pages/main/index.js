import { ProductCardComponent } from "../../components/product-card/index.js";
import { ProductPage } from "../product/index.js";
import { ajax } from "../../modules/ajax.js";
import { urls } from "../../modules/urls.js";
import { ID } from "../../modules/env.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    getData() {
        let res = ajax.post(urls.getGroupMembers(ID), (data) => {
            this.renderData(data.response.items);
            console.log(data.response.items);
        });
        // console.log;
    }

    renderData(items) {
        items.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot);
            productCard.render(item, this.clickCard.bind(this));
        });
    }
    get pageRoot() {
        return document.getElementById("main-page");
    }

    getHTML() {
        return `
                <button onclick="postvk()">_x_rAnDoMiZeR_x_</button>
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `;
    }

    clickCard(e) {
        const cardId = e.target.dataset.id;
        console.log("pressed ", cardId);

        const productPage = new ProductPage(this.parent, cardId);
        productPage.render();
    }

    render() {
        this.parent.innerHTML = "";
        const html = this.getHTML();
        this.parent.insertAdjacentHTML("beforeend", html);

        this.getData();
    }
}
