// Create new component AboutMe. This component should accept the following props: fullName :string, from: string, favouriteMovies: string[]
// In this component in a paragraph display the property fullName and the property from.
// Create new component Movies that is going to accept 1 props which is array of movies.
// This new Movies component call it in the component AboutMe and pass the favouriteMovies prop as coresponding property.
// As expected, iterate through the list of movies in the Movies component and show them on the screen.
// Finally call the AboutMe component in App.tsx
import { Movies } from "./Movies"

interface AboutMeProps {
    fullName: string,
    from: string,
    favoriteMovies: string[]
};

export const AboutMe = (props: AboutMeProps) => {
    return (
        <>
            <p>
                {props.fullName} from {props.from}
            </p>
            <Movies movies={props.favoriteMovies}/>
        </>
    )
}