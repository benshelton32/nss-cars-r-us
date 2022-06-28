import { getTechPackages, setTechPackage } from "./database.js";

const techPackages = getTechPackages()

export const techPackageOptions = () => {
    let html = `<h2>Technologies</h2>
    <select id='tech'>
    <option value="0">Select a technology package</option>`

    const listOptions = techPackages.map(techPackage => {
        return `<option value="${techPackage.id}">${techPackage.name}</option>`
    })

    html += listOptions.join("")
    html += "</select>"
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            const chosenOption = changeEvent.target.value
            setTechPackage(parseInt(chosenOption))
        }
    }
)