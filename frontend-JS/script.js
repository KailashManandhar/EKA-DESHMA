async function getData() {
    const container = document.querySelector('.cards-container')
    try {
        const raw_data = await fetch('/api')
        const data = await raw_data.json()
        console.log(data);

        for (const datum of data) {
            const card = document.createElement('div')
            card.classList.add('card')

            const title = document.createElement('h1')
            title.classList.add('title')
            title.textContent = datum.title
            card.appendChild(title)

            const author = document.createElement('p')
            author.classList.add('author')
            author.textContent = datum.name || "anoynomous"
            card.appendChild(author)

            const description = document.createElement('p')
            description.classList.add('description')
            description.textContent = datum.description
            card.appendChild(description)

            container.appendChild(card)
        }
    }
    catch (err) {
        throw new Error("some error occurred..")
    }

}

getData()


// // <div class="card">
// < h1 class="title" > Title</h1 >
//         <p class="author">author name</p>
//         <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti autem dolores
//             distinctio voluptate unde rerum minus, ipsa quod sapiente facilis!
//         </p>
//     </div >