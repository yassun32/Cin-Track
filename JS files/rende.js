import { getData } from "./api.js"
import { affichieCards } from "./main.js"


const data = await getData()
const input = document.getElementById("filtre")
export function filtre() {
    if (input.value === "series") {
        let filtred = data.filter(e => e.type === "series")
        affichieCards(filtred)
    }
    else if (input.value === "movie") {
        let filtred = data.filter(e => e.type === "movie")
        affichieCards(filtred)

    }
    else {
        affichieCards(data)

    }
}
input.addEventListener("input", filtre)