const database = {
    orderBuilder: {

    },
    paintColors: [
        {id: 1, name: "Silver", price: 1500},
        {id: 2, name: "Midnight Blue", price: 3000},
        {id: 3, name: "Firebrick Red", price: 3000},
        {id: 4, name: "Spring Green", price: 3000}
    ],
    interiorTypes: [
        {id: 1, name: "Beige Fabric", price: 2000},
        {id: 2, name: "Charcoal Fabric", price: 2500},
        {id: 3, name: "White Leather", price: 5500},
        {id: 4, name: "Black Leather", price: 5000}
    ],
    techPackages: [
        {id: 1, name: "Basic Package", price: 3500},
        {id: 2, name: "Navigation Package", price: 5500},
        {id: 3, name: "Visibility Package", price: 5500},
        {id: 4, name: "Ultra Package", price: 10000}
    ],
    wheels: [
        {id: 1, type: "17-inch Pair Radial", price: 500},
        {id: 2, type: "17-inch Pair Radial Black", price: 1250},
        {id: 3, type: "18-inch Pair Spoke Silver", price: 1250},
        {id: 4, type: "18-inch Pair Spoke Black", price: 2000}
    ],
    customOrders: [
        {id: 1, paintId: 1, interiorID: 1, techPackageId: 1, wheelId: 1, timestamp: 1614659931693 } // totalPrice property?
    ]
}

export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
}

export const getInteriorTypes = () => {
    return database.interiorTypes.map(interiorType => ({...interiorType}))
}

export const getTechPackages = () => {
    return database.techPackages.map(techPackage => ({...techPackage}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const setPaintColor = (id) => {
    database.orderBuilder.paintId = id
}

export const setInteriorType = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechPackage = (id) => {
    database.orderBuilder.techPackageId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}