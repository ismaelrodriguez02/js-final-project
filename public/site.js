
    const modal = document.getElementById("recipeModal")
    const div = document.querySelector('#wrapper-events')
    const logo = document.querySelector('.logo')

     const name = document.querySelector('.name')
    const locations = document.querySelector('.location')
    const date = document.querySelector('.date')
    const time = document.querySelector('.time')

    const getEvents = async()=>{
        const response = await fetch('/api/v1/events')
        return await response.json()
    }

    const getEvent = async (id) => {
        const resp = await fetch('/api/v1/events/' + id)
        return await resp.json()
    }

   const showEvents = events =>{
    events.forEach(p => {
        const event = document.createElement('h3')
        const loc = document.createElement('p')
        event.textContent = p.name
        loc.textContent = 'Location: ' + p.location
        div.appendChild(event)
        div.appendChild(loc)

        event.onclick = () =>{
            showEventDetails(p.num)
            
            modal.style.display = 'flex'
        }})


     } 

     const showEventDetails = async id =>{
        const event = await getEvent(id)
        
        name.textContent = event[0].name
        locations.textContent = event[0].location
        date.textContent = event[0].date
        time.textContent = event[0].time

        modal.style.display = 'flex'
     }

     window.onclick = event => {
        if (event.target === modal) modal.style.display = 'none'
    }
    

(async () => {
	const events = await getEvents()
	showEvents(events)

    const event = await getEvent(3)
    console.log(event[0].location)

})()

