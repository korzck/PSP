export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">Акция</h5>
                        <p class="card-text">Вот тут информация об акции</p>
                        <button class="btn btn-primary"">Нажми на меня</button>
                    </div>
                </div>
            `
        )
    }

    render() {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
    }
}