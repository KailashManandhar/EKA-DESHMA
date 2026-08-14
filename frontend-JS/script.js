const read = document.getElementById('read')

read.addEventListener('click', async (e) => {
    e.preventDefault()
    const rawData = await fetch("/api")
    const data = await rawData.json()
    console.log(data);

})

