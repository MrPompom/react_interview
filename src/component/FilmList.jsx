import React, { useEffect, useState } from "react";
import { movies$ } from "../lib/movies"
import  FilmCard from "./FilmCard";
import "../styles/filmlist.css"



function FilmList() {
    let tamp = [];
    const [ movies, setmovie ] = useState()
    const [ nbrMovies, setNbrMovies ] = useState(4)
    const [ catList, setCatList ] = useState([])
    const [ catSelect, setCatSelect ] = useState([])

    useEffect(() => {
        const fetchdata = async() => {
            let cat = await movies$
            setmovie(cat)
            
            const tab = []
            cat.map((x) => {
                if(tab.filter((el) => el === x.category).length === 0) {
                    tab.push(x.category)
                }
            })
         
            setCatList(tab)
            setCatSelect(tab)
            tamp = cat
            
        }
        fetchdata()
    }, [])

    function cardDelete(id) {
        console.log(id);
        let tab = [];
        let tab2 = [];
        tab = movies.filter((el) => el.id != id)
        setmovie(tab)
        catList.map((x) => {
            tab.filter((el) => {
                if(el.category === x) {
                    if(tab2.indexOf(x) < 0) {
                        tab2.push(x)
                    }
                }
            })
        })
        console.log(tab2)
        setCatList(tab2)
    }
 
    return (
        <div>
            <div className="navbar">
                <h3 onClick={() => setCatSelect(catList, setNbrMovies(4))} key={'Tous'}>Tous</h3>
                {
                    catList !== undefined && 
                        catList.map((x) => {
                            return (
                                <h3 onClick={() => setCatSelect([x], setNbrMovies(4))} key={x}>{x}</h3>
                            )
                        })
                }
            </div>
            <div className="cardlist">
                { movies !== undefined && catSelect !== undefined &&
                movies.filter((x) => catSelect.filter((y) => y === x.category ).length !== 0 ).slice(0, nbrMovies).map((x) => {
                    return (
                        <FilmCard cardDelete={() => cardDelete(x.id)} data={x} key={x.id}>
                        </FilmCard>
                    )
                })}
            </div>
            <div className="moreMovie">
                {
                    movies !== undefined && nbrMovies < movies.filter((x) => catSelect.filter((y) => y === x.category ).length).length &&  <button className="seeMoreMovies" onClick={() => setNbrMovies(nbrMovies + 4)}>Voir plus</button>

                }
            </div>
        </div>
    );

}

export default FilmList;