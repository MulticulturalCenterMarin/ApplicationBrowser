/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {Flex} from 'particles'
import {Heading, Link} from 'atomic'

/* ------------------------------- Component -------------------------------- */
export default props => (
<Flex align="center" w={[0.5]} justify="space-evenly" py={[15]} w={[1]} >
    <Link to="/opportunity/training" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Training</Heading></Link>
    <Link to="/opportunity/jobs" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Jobs</Heading></Link>
    <Link to="/opportunity/activism" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Activism</Heading></Link>
</Flex>

)
