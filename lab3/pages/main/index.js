import { ButtonComponent } from "../../components/button/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent
    }
    
    render() {
        const button = new ButtonComponent(this.parent)
        button.render()
    }
}