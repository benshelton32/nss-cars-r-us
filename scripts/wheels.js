import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

export const wheelOptions = () => {
    let html = `<h2>Wheels</h2>
    <select id='wheels'>
    <option value="0">Select a wheel style</option>`

    const listOptions = wheels.map(wheel => {
        return `<option value="${wheel.id}">${wheel.type}</option>`
    })

    html += listOptions.join("")
    html += "</select>"
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            const chosenOption = changeEvent.target.value
            setWheels(parseInt(chosenOption))
        }
    }
)