/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {Flex} from 'particles'
import {Heading, Link} from 'atomic'

/* ------------------------------- Component -------------------------------- */
export default props => (
<Flex align="center" direction={['column', 'column', 'row']} justify="space-evenly" wrap="wrap" py={[15]} w={[1]} >
    <Link to="/why/approach" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Approach</Heading></Link>
    <Link to="/why/impact" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Impact</Heading></Link>
    <Link to="/why/partnerships" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Partnerships</Heading></Link>
    <Link to="/why/philosophy" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Philosophy</Heading></Link>
    <Link to="/why/vision" color={['blueLight']}><Heading f={[3]} level={[5]} display='inline' px={10}>Vision</Heading></Link>
</Flex>

)
