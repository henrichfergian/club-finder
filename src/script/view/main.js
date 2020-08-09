import "../component/search-bar.js"
import "../component/club-list.js"
import DataSource from "../data/data-source.js"

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked = async () => {
        // const dataSource = new DataSource;
        // const dataSource = new DataSource(renderResult, fallbackResult);
        // dataSource.searchClub(searchElement.value)
        //     .then(renderResult)
        //     .catch(fallbackResult);
        try {
            // const results = await dataSource.searchClub(searchElement.value);
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
            // renderResult((await DataSource.searchClub(searchElement.value)));
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        clubListElement.club = results;
    };

    const fallbackResult = message => {
        clubListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;