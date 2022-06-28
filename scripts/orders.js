import { getOrders, getPaintColors, getInteriorTypes, getTechPackages, getWheels } from "./database.js";

const buildOrderList = (order) => {

    const paints = getPaintColors()
    const interiors = getInteriorTypes()
    const techPackages = getTechPackages()
    const wheels = getWheels()

    const foundPaint = paints.find(paint => {
        return paint.id === order.paintId
        }
    )

    const foundInterior = interiors.find(interior => {
        return interior.id === order.interiorId
        }
    )

    const foundTechPackage = techPackages.find(techPackage => {
        return techPackage.id === order.techPackageId
        }
    )

    const foundWheel = wheels.find(wheel => {
        return wheel.id === order.wheelId
        }
    )

    const totalCost = foundPaint.price + foundInterior.price + foundTechPackage.price + foundWheel.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<section class="orders" id="order--${order.id}">${foundPaint.name} car with ${foundWheel.type} wheels, ${foundInterior.name} interior, and the ${foundTechPackage.name} for a total cost of ${costString}</section>`
}

export const customOrders = () => {
    const orders = getOrders()

    let html = `<h2>Custom Car Orders</h2>`

    const listItems = orders.map(buildOrderList)

    html += listItems.join("")

    return html
}