import React from 'react'
import Nav from './Nav'
import Title from './Title'

const MainPageLayout = ({children}) => {
    return (
        <div>
            <Title title="Box Office" subtitle="Are you looking for movie, or an Actor?" />
            <Nav />
            {children}
       </div>
    )
}

export default MainPageLayout
