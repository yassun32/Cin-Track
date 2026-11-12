import { getData } from "./api.js"
import { filtre, searchByName } from "./rende.js"

const section = document.getElementById('card')
let data ;

try {
    data = await getData()
} catch (error) {
    section.innerHTML = `<p>les données ne se chargent pas</p>
`

}
export function affichieCards(data) {
section.innerHTML = data.map(element => {
    return `
        <article class="hover:cursor-pointer bg-gray-800 rounded-xlshadow-lg">
                    <img src="${element.image}" alt="${element.title}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="text-xl font-bold">${element.title}</h3>
                        <p class="text-gray-400 text-sm mt-2">${element.releaseYear}</p>
                        <p class="text-yellow-400 mt-2">${element.type}</p>
                        <button class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg mt-4 w-full">
                            ❤️ Ajouter aux favoris
                        </button>
                    </div>
                </article>
                `
}).join("");
}
filtre()
searchByName()