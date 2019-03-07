import * as React from 'react'
import { useState, useEffect, FunctionComponent } from 'react'
import { Deck } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import './images'
import './style/font.css'
import './style/index.css'

require('normalize.css')

const theme = createTheme(
    {
        primary: '#616161',
        secondary: '#424242',
        tertiary: '#BDBDBD',
        quarternary: '#CECECE',
        't-primary': '#EEEEEE',
        teal: '#5CBFC8'
    },
    {
        primary: 'Oswald'
    }
)

export const Presentation: FunctionComponent = () => {
    const [slides, setSlides] = useState([] as React.ReactElement[])

    useEffect(() => {
        const slidesContext = require.context('./slides', true, /(.*\/.*.tsx)$/)
        const loadedSlides = slidesContext
            .keys()
            // tslint:disable-next-line:no-any
            .reduce<React.ReactElement<any>[]>((acc, id) => {
                const slideModule = slidesContext(id).default
                // I want to allow a folder which holds slides so I can group parts of the preso
                // making it easier to re-organise.
                if (slideModule instanceof Array) {
                    slideModule.forEach(sm => acc.push(sm))
                } else {
                    acc.push(slideModule)
                }
                return acc
            }, [])

        setSlides(loadedSlides)
    }, [])

    return (
        <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
            {slides.map((slide, index) => {
                return React.cloneElement(slide, { key: index })
            })}
        </Deck>
    )
}
