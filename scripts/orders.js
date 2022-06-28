import { getOrders } from "./database.js";

const orders = getOrders()

export const customOrders = () => {
    return `<h2>Custom Car Orders</h2>`
}