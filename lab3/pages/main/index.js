import { ProductCardComponent } from "../../components/product-card/index.js";
import { ProductPage } from "../product/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    getData() {
        return [
            {
                id: 1,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 1",
                count: counts[0],
            },
            {
                id: 2,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 2",
                count: counts[1],
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3",
                count: counts[2],
            },
        ];
    }

    get pageRoot() {
        return document.getElementById("main-page");
    }

    getHTML() {
        return `
                <div id="main-page" class="d-flex flex-wrap"><div/>
                <div class="">
                    <button
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#popup">
                        КНОПКА
                    </button>
                        <div class="modal fade" id="popup">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Крутое всплывающее сообщение</h5>
                                    </div>
                                    <div class="modal-body">
                                        <p>Зачтите пж лабу 3</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button
                                            type="button"
                                            class="btn btn-secondary"
                                            data-dismiss="modal">
                                            Закрыть
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>        
                    </div>
            `;
    }

    clickCard(e) {
        // console.log(e.target.dataset.id);
        const cardId = e.target.dataset.id;

        console.log("pressed ", cardId);
        counts[cardId - 1]++;
        console.log(counts[cardId - 1]);

        const productPage = new ProductPage(this.parent, cardId);
        productPage.render();
    }

    render() {
        this.parent.innerHTML = "";
        const html = this.getHTML();
        this.parent.insertAdjacentHTML("beforeend", html);

        const data = this.getData();
        data.forEach((i) => {
            const productCard = new ProductCardComponent(this.pageRoot);
            productCard.render(i, this.clickCard.bind(this));
        });
    }
}
