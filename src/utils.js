const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const filterByTitle = (arrayItem, query) => {
    return (arrayItem.title.toLowerCase().includes(query.toLowerCase()));
};

const capitalizeFirstLetterOfEachWord = (str) => {  
    return str.replace(/\w\S*/g, (txt) => (txt.charAt(0).toUpperCase() + txt.substr(1)));  
};


export {
    numberWithCommas,
    filterByTitle,
    capitalizeFirstLetterOfEachWord,
};