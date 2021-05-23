import React, { useState } from 'react'
import { Button as MuiButton } from '@material-ui/core'

// voici notre premier composant!!! WELCOME FIRST COMPONENT

// Ici on défini une interface pour typer notre composant.
// Cela a deux utilités:
// - éviter les erreurs lors de la ré-utilisation de ces composants
// - si l'IDE fourni cette fonctionnalité, il proposera le type des props ou les props a définir (ce qui permet d'avoir une documentation en live.
// PRATIQUE!!!
// Quand il y a un ? avant les :, c'est que c'est une valeur optionnelle. Pas d'erreur de type si non défini.
interface ButtonProps {
    children?: string
    text?: string
    increment?: number
}

// Ici, on défini notre fonction.
// Chaque composant commence par une majuscule, en PascalCase.
// Le prop children, on oublie pas! C'est un prop spécial!
// Ici, <Button>Hello World</Button>
// Hello World est considéré comme étant assigné au child.
// En gros, ça revient au même, d'écrire <Button child="Hello world/> et ce qu'il y a un peu plus haut.
// On voit également que increment vaut 1. C'est la valeur par défaut au cas ou ce n'est pas défini.
function Button({ children, text, increment = 1 }: ButtonProps) {
    // ici c'est toute la partie javascript.
    const [state, setState] = useState(0)
    // const buttonName = "Yey";

    const handleClick = () => {
        window.alert(text)
    }

    // Ici c'est le retour du composant.
    // Pour intégrer du javascript dans du JSX, on utilise des accolades.
    // Des fois, dans le cas des map, on retourne du JSX. Il faut encore mettre des accolandes si on souhaite y re-mettre du javascript.
    // Les dev react sont très friands des opérateurs ternaires!
    return (
        <>
            {/*<button onClick={handleClick}>{children}</button>*/}
            <MuiButton
                onClick={() => setState(state + increment)}
                style={{ width: 100, height: 100, fontSize: 30 }}
            >
                {state}
            </MuiButton>
        </>
    )
}

export default Button
