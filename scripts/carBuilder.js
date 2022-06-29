import { paintColorOptions } from "./paintColors.js";
import { interiorTypeOptions } from "./interiorTypes.js";
import { techPackageOptions } from "./techPackages.js";
import { wheelOptions } from "./wheels.js";
import { customOrders } from "./orders.js";
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const carBuilderHTML = () => {
    return `
    <h1>Cars 'R Us: Personal Car Builder</h1>

    <article class="choices">
        <section class="choices__paints options">
            ${paintColorOptions()}
        </section>
        <section class="choices__interiors options">
            ${interiorTypeOptions()}
        </section>
        <section class="choices__technologies options">
            ${techPackageOptions()}
        </section>
        <section class="choices__wheels options">
            ${wheelOptions()}
        </section>
    </article>

    <article>
        <button id="orderButton">Place Car Order</button>
    </article>

    <article class="customOrders">
        ${customOrders()}
    </article>
    `
}