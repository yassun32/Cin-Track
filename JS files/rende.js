import { getData } from "./api.js"
import { affichieCards } from "./main.js"


const data = await getData()
const input = document.getElementById("filtre")
const search = document.getElementById("search")

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

export function searchByName() {
    let searched = data.filter(movie =>
        movie.title.toLowerCase().includes(search.value.toLowerCase().trim())
    )
    affichieCards(searched)
}

input.addEventListener("input", filtre)
search.addEventListener("input", searchByName)
