import React from 'react';
import Hero from '../components/hero'

const SliceZone = ({ body }) => {
    return (
        <>
            {
                body.map((bodyContent, i) => {
                    if (bodyContent.type === 'hero') {
                        return (
                            <Hero
                                key={i}
                                title={bodyContent.primary.hero_title}
                                content={bodyContent.primary.hero_content}
                                backgroundImage={bodyContent.primary.background_image.url} />
                        )
                    } else {
                        return null
                    }
                })
            }
        </>
    )
}
export default SliceZone