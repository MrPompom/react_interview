import { movies$ } from "../lib/movies";

function FilmCard() {
    var movie = Promise.all([movies$]).then((movie) => {
        return movie[0]
    });
    console.log(movie)
    return (
        <div>hezllo</div>
    );
};

export default FilmCard;