const container = document.querySelector('.cards-container')
async function getData() {

    try {
        const raw_data = await fetch('/api')

        if (!raw_data.ok) {
            throw new Error(`Server returned status: ${raw_data.status}`)
        }

        const data = await raw_data.json()

        if (!Array.isArray(data)) {
            throw new Error("Expected an array from /api, but got a different data structure.")
        }

        // Clear existing cards before rendering
        container.innerHTML = ''

        for (const datum of data) {
            const card = document.createElement('div')
            card.classList.add('card')

            const title = document.createElement('h1')
            title.classList.add('title')
            title.textContent = datum.title || "Untitled"
            card.appendChild(title)

            const author = document.createElement('p')
            author.classList.add('author')
            author.textContent = datum.name || "anonymous"
            card.appendChild(author)

            const description = document.createElement('p')
            description.classList.add('description')
            description.textContent = datum.description || "No description provided."
            card.appendChild(description)

            container.appendChild(card)
        }
    }
    catch (err) {
        console.error("Error fetching or rendering data:", err)
    }
}


if (container) getData()




const form = document.querySelector('form')
if (form) {
    form.addEventListener('submit', handleSubmit)

}

async function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(form)
    const dataObj = {
        title: formData.get('title'),
        description: formData.get('description'),
        date: formData.get('date'),
        email: formData.get('email'),
        name: formData.get('name')
    }
    try {
        await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataObj)
        })
    }
    catch (error) {
        throw new Error("something wrong wile posting data")
    }

}

