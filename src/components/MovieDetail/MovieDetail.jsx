import "./MovieDetail.css"

const MovieDetail = ({ film_year, episode_name, country_club, poster_link, episode_number, embed_link, episode_description, original_film_name }) => {
    return (
        <div className="movieDetail">
            <h2> {original_film_name} {film_year}</h2>
            <div>
                <img src={poster_link} alt="" />
                <div>
                    <h3>Episodio {episode_number}: <span>"{episode_name}"</span> {country_club ? "del country club" : "del gratis"} </h3>
                    <p>{episode_description}</p>
                    {country_club
                        ? <p>Escuchalo <a href="https://hoytrasnoche.com">ACA</a></p>
                        : <iframe src={embed_link} width="100%" height="190" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    }
                </div>
            </div>
        </div>
    )
}
export default MovieDetail