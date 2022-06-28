import { getPaintColors, setPaintColor } from "./database.js";

const paintColors = getPaintColors()

export const paintColorOptions = () => {
    let html = `<h2>Paints</h2>
    <select id='paint'>
    <option value="0">Select a paint color</option>`

    const listOptions = paintColors.map(paintColor => {
        return `<option value="${paintColor.id}">${paintColor.name}</option>`
    })

    html += listOptions.join("")
    html += "</select>"
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            const chosenOption = changeEvent.target.value
            setPaintColor(parseInt(chosenOption))
        }
    }
)