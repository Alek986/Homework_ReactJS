export function Trips (){
    const trips = ["London", "Paris", "Tokyo", "New York", "Skopje"];

    return (
        <div>
            <ol>
                {trips.map((city) => {
                    return <li key={city}>{city}</li>
                    })}
            </ol>
        </div>
    )
}