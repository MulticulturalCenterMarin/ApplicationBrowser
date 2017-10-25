/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {Flex} from 'particles'
import {Heading, Link} from 'atomic'

/* ------------------------------- Component -------------------------------- */
export default props => (
<Flex align="center" w={[0.5]} justify="space-evenly" py={[15]} w={[1]} >
    <Link to="/memberships/leaf" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Leaf</Heading></Link>
    <Link to="/memberships/branch" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Branch</Heading></Link>
    <Link to="/memberships/trunk" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Trunk</Heading></Link>
    <Link to="/memberships/root" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Root</Heading></Link>
</Flex>

)
