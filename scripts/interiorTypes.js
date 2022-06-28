import { getInteriorTypes, setInteriorType } from "./database.js";

const interiorTypes = getInteriorTypes()

export const interiorTypeOptions = () => {
    let html = `<h2>Interior</h2>
    <select id='interior'>
    <option value="0">Select an interior material</option>`

    const listOptions = interiorTypes.map(interiorType => {
        return `<option value="${interiorType.id}">${interiorType.name}</option>`
    })

    html += listOptions.join("")
    html += "</select>"
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            const chosenOption = changeEvent.target.value
            setInteriorType(parseInt(chosenOption))
        }
    }
)