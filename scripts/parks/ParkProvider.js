// array to store park data in once it has been fetched
let parkCollection = []

// object to store chosen park
let natPark = {}

// get selection of state from drop down
let e = document.getElementById("state")
let stateValue = e.options[e.selectedIndex].value


let parkQuery = "https://developer.nps.gov/api/v1/parks?stateCode=" + stateValue + `&api_key=${keys.npsKey}`

//wheelchair amenity query
let wheelchairCollection = []
const wheelchairQuery = "https://developer.nps.gov/api/v1/amenities/parksplaces?id=EAB59B1F-2FA1-4545-A322-2C19149AF7FC&api_key=" + keys.npsKey

const getWheelchairData = () => {
    return fetch(wheelchairQuery).then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then(
        (wheelchairArray) => {
            //omg this works?? i can't believe nested array properties in objects was this simple
            wheelchairCollection = wheelchairArray.data[0][0].parks
            return wheelchairCollection
        }
    )
}

// fetch park data with sorted variable, the parse into json and put into parkCollection
const getParkData = () => {
    return fetch(`${parkQuery}`).then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then(
        (arrayOfParks) => {
            parkCollection = arrayOfParks
            return arrayOfParks
        }
    )
}

const checkCellFunction = () => {
  
    window.open("https://www.nperf.com/en/map/US/-/-/signal/?ll=47.93335932610921&lg=-123.45000000000002&zoom=3")
  }
  