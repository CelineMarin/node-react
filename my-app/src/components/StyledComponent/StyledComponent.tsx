import React from 'react'
import classNames from 'classnames'
import * as css from './StyledComponent.css'
import { height } from './StyledComponent.css'

interface StyledComponentProps {
    backgroundColor: 'blue' | 'red'
}
// Voici comment on utilise du style conditionnel sur un composant
// classNames est une fonction de type helper qui fournit du style a un composant pour faire simple.
// Le premier argument de la fonction classNames est un array (ou un élément) avec plusieures propriétés CSS venant de StyledComponent.css.ts.
// Le deuxieme argument est un objet json où la clé est la propriété CSS et la valeur un boolean.
// Si le boolean est vrai, alors la clé qui contient du CSS s'applique au composant.
// Ici, si on importe StyledComponent dans App.js a la racine du projet, on peut définir le prop color a blue ou red (type string strict)
// Si il vaut "blue" alors css.backgroundBlue s'applique. Idem pour "red".
export default function StyledComponent({
    backgroundColor,
}: StyledComponentProps) {
    return (
        <div
            className={classNames([css.width, height], {
                [css.blueBackground]: backgroundColor === 'blue',
                [css.redBackground]: backgroundColor === 'red',
            })}
        />
    )
}
