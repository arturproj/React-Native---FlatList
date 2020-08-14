const fetchData = (url) => {
    return fetch( url )
        .then(res => res.json())
            .then(data => data)
}

class Api {

    getCountries(){
        return fetchData('http://restcountries.eu/rest/v2/all').then(data => data );
    }
}

export default new Api();