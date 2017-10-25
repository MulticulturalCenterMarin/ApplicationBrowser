/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {Flex} from 'particles'
import {Heading, Link} from 'atomic'

/* ------------------------------- Component -------------------------------- */
export default props => (
<Flex align="center" w={[0.5]} justify="space-evenly" py={[15]} w={[1]} >
    <Link to="/tools/dashboard" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Dashboard</Heading></Link>
    <Link to="/tools/alerts" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Community Alerts</Heading></Link>
    <Link to="/tools/messaging" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Secure Messaging</Heading></Link>
    <Link to="/tools/translation" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Instant Translation</Heading></Link>
</Flex>

)
