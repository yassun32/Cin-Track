async function getData() {
    const url =  'https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}
