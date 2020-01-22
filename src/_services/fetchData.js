export function fetchData() {
    return fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2015-01-09&endtime=2015-01-10').then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        if(response.status === 401 || response.status === 403){
            //todo
        }
        return Promise.reject(response.status);
    }
    return response.json();
}