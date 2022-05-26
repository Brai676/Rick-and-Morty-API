export default function Characters(props) {
    const {characters, setCharacters} = props;
    const resetCharacter = () => {
        setCharacters(null);
    }

    return(
        <div className="chaacters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacter}>Volver a la home</span>
            <div container-characters>
                {characters.map((character, index) => (
                    <div className="charatcer-containter" key={index}>
                        <p>{character.name}</p>
                        <div>
                            <img src={character.image} alt={character.name}></img>
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === 'Alive' ? (
                                    <><span className="alive" />Alive</>
                                ) : (
                                    <><span className="dead" />Dead</>
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetCharacter}>Volver a la home</span>
        </div>
    );
}