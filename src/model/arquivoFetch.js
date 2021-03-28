export async function request() {
    const response = await fetch (
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"mm
    );

    const dados = await response.json ();

    return dados.drinks;
};
