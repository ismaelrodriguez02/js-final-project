(async () => {

    const div2 = document.querySelector('#wrapper')
    const result2 = await fetch('/api/v1/menu')
    const menu = await result2.json()
    
    menu.forEach(p =>{
        const item = document.createElement('h3')
        const desc = document.createElement('p')
        const price = document.createElement('p')

        item.textContent = p.name
        desc.textContent = p.description
        price.textContent ='Price:' + p.price

        div2.appendChild(item)
        div2.appendChild(desc)
        div2.appendChild(price)
    })
})()