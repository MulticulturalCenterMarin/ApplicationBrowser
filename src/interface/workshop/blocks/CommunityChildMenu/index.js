/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {Flex} from 'particles'
import {Heading, Link} from 'atomic'

/* ------------------------------- Component -------------------------------- */
export default props => (
<Flex align="center" w={[0.5]} justify="space-evenly" py={[15]} w={[1]} >
    <Link to="/community/challenges" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Challenges</Heading></Link>
    <Link to="/community/leaders" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Leaders</Heading></Link>
    <Link to="/community/projects" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Projects</Heading></Link>
</Flex>

)
