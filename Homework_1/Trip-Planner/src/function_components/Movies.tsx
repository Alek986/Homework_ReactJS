interface MoviesProps {
    movies: string []
};


export const Movies = (props: MoviesProps) => {
    return (
        <ul>
            {props.movies.map((movie) => {
                return <li>{movie}</li>
            })}
        </ul>
    )
} 