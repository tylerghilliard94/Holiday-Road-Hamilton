const eventList = (eventsObject) => {
    
    const eventsHTML= eventsConverter(eventsObject)
    const eventsDivElement= document.querySelector(".event__details")
    eventsDivElement.innerHTML = eventsHTML
}

const noEventList = () => {
    const eventsHTML= `<p>Event:<br>
    No events listed for this location.</p>`
    const eventsDivElement= document.querySelector(".event__details")
    eventsDivElement.innerHTML += eventsHTML
}


let detailCounter = 0
const itinerariesList = (itineraries) =>{
        const itinerariesHTML= itinerariesConverter(itineraries)
        const itinerariesdivelement= document.querySelector(".aside__saved__itineraries")
        itinerariesdivelement.innerHTML += itinerariesHTML
        let attractioncounter = -1
        let eaterycounter = -1

        for (const attraction of itineraries.attractions){
            
            attractioncounter++
            const itinerariesAttractionsHTML= itinerariesAttractionsConverter(itineraries.attractions,attractioncounter)
            
            const itinerariesattractionsdivelement= document.querySelector(`.itinerary__attractions__${itineraries.parks.id}`)
            itinerariesattractionsdivelement.innerHTML += itinerariesAttractionsHTML
        }

        for (const eatery of itineraries.eateries){
            
            eaterycounter++
            const itinerariesEateriesHTML= itinerariesEateriesConverter(itineraries.eateries,eaterycounter)
            const itinerarieseateriesdivelement= document.querySelector(`.itinerary__eateries__${itineraries.parks.id}`)
            itinerarieseateriesdivelement.innerHTML += itinerariesEateriesHTML
        }

        const eventDetailVisibilityButtons = document.querySelectorAll(`.button__events__${itineraries.parks.parkCode}`)
        
        detailCounter ++
        for (let i = 0; i < detailCounter; i++){
        eventDetailVisibilityButtons.forEach(button => {
            button.addEventListener("click", clickEvent => {
                document.getElementById(`details__${clickEvent.target.id}`).classList.toggle("hidden__details")
            })
        })
    }
}