async function Read() {
    const data = await fetch("/api")
    return (
        <>
            <p>this is read</p>
        </>
    )
}

export default Read
