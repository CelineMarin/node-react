// Pour importer une librairie entière on a un bon exemple ici.
// Dans notre code, on aurait pu appeler React.useState a la place de useState.
// importer des modules spécifiques (ce qui est entre accolade) nous permet deux choses:
// - avoir un code plus lisible
// - savoir ce qui a été utilisé dans notre composant (car OUI, App.tsx est un composant :) )
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button as MuiButton, TextField } from '@material-ui/core'
import Button from './components/Button'

// Nous voici dans le code principal de notre application.
// React utilise un systeme de one single page application.
// L'application fait une page, il n'y a pas de refresh de page quand on change de route
// Tout est géré pas la librairie React.
// C'est idéalement ici qu'on va définir le coeur et le routage de l'application.
// Le routage peut également être défini dans un composant <Route/> qui est un composant custom.
// Voila un bon exercice pour comprendre les principes de React :-)

function App() {
    //javascript

    // On défini l'URL de base ici. Ce n'est pas une bonne pratique! Utiliser dotEnv (.env) pour avoir un projet plus propre!
    const BASEURL = 'http://localhost:8080'

    // Un petit exemple d'array sur lequel on va utiliser la fonction map pour retourner plusieurs composants!
    const myValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // On défini les routes ici. Cela peut etre fait sur un fichier externe puis importé ici pour plus de propreté.
    const API = {
        helloWorld: `${BASEURL}/helloworld`,
        username: (username: string) => `${BASEURL}/user/${username}`,
    }

    //Les hooks useState, faut faire gaffe!!!!
    // A chaque fois qu'un state se met a jour, le composant concerné ET TOUT SES ENFANTS met a jour leur rendu.
    // Cela peut causer des soucis de performances!!!
    // Si cela arrive, il faut trouver un moyen pour ne pas que ça arrive.
    // Il a plusieures techniques pour éviter cela que nous verrons par la suite!
    // useState renvoie un array avec l'état et la fonction pour set l'état.
    // On déstructure le retour avec la technique de destructuration d'array pour un code plus lisible.
    // On est obligé d'utiliser une destructuration pour avoir un state et setState ici (car cela génrère une instance à l'appel)
    const [state, setState] = useState(false)

    const [helloH, setHelloH] = useState()
    const [username, setUsername] = useState('')
    const [displayedUsername, setDisplayedUsername] = useState('')

    // le useEffect s'exécute au premier rendu de la page. Il s'exécute également a chaque fois qu'une dépendance se met à jour.
    // Par exemple, ici notre dépendance est state! Un état qu'on a défini un peu plus haut en dessous des commentaires!
    useEffect(() => {
        const setup = async () => {
            const { data } = await axios.get(API.helloWorld)
            console.log(data)
            setHelloH(data)
        }

        setup()
    }, [state])

    // On effectue un call API avec la librairie axios dans cette fonction qui est appelée lors du click d'un bouton.
    const handleClick = async () => {
        const { data } = await axios.get(API.username(username))

        setDisplayedUsername(data)
    }

    return (
        <div>
            <MuiButton
                onClick={() => {
                    setState(!state)
                }}
                variant="contained"
            >
                Hello world
            </MuiButton>
            <Button text="test hihihoho">Tottatato</Button>
            <Button increment={8} text="test fdp">
                fdp
            </Button>
            <div>{helloH}</div>
            {/*Ce qui est super intéressant ici, c'est que si on défini un array avec des composants, React va automatiquement
            créé un rendu de cet array pour chaque composant qui est a l'intérieur, MAGIEEEE!!!*/}
            <div>
                {myValues.map((x) => {
                    return <Button increment={x}>hey</Button>
                })}
            </div>
            <div>
                <TextField
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                    variant="outlined"
                />
                <MuiButton
                    onClick={() => {
                        handleClick()
                    }}
                >
                    Display
                </MuiButton>
            </div>
            <div>{displayedUsername}</div>
        </div>
    )
}

export default App
