export async function getData() {
    const url = 'https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json';

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result
}
