import { fetchData } from "../_services/fetchData";

const dataFormat = data => ({
  id: data.id,
  place: data.properties.place,
  mag: data.properties.mag,
  lng: data.geometry.coordinates[0],
  lat: data.geometry.coordinates[1]
});

export function fetchDataAction() {
  return function(dispatch) {
    return fetchData().then(json => {
      dispatch({ type: "GET_DATA", payload: json.features.map(dataFormat) });
    });
  };
}
