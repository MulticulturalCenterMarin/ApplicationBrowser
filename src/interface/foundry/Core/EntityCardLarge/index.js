/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import idx from './idx';

/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute} from 'particles'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'


import {
  FormGalleryAdd,
  ImageList,
} from 'foundry'
/* ------------------------------- Component -------------------------------- */
const mainLayout = {
  flex:['2 1 0'],
  bg:'white',
  bs:'1',
  br: 5,
  of:'hidden',
  pb:[30,60],
}

export default (props) => {
  /*--- Extraction ---*/
  const{ data } = props
  /*--- Extraction ---*/
  const id = idx(props, _ => _.id)
  const nameDisplay = idx(props.data, _ => _.name.nameDisplay)
  const nameAlias = idx(props.data, _ => _.name.nameAlias)
  const mission = idx(props.data, _ => _.biography.biographyMission)
  const objective = idx(props.data, _ => _.biography.biographyObjective)
  const summary = idx(props.data, _ => _.biography.biographySummary)
  const imageBanner = idx(props.data, _ => _.images.imageBanner)

  if (!data) return null
  /*--- Component ---*/
  return <Flex direction={['row']} align='stretch' justify='center' p={[10]} {...props} key={id} >
      <Box {...mainLayout}>
        {!imageBanner ? null : 
          <Box
            py={[40,80,220]}
            of='hidden'
          >
            <BackgroundImage src={imageBanner}/>
            <BackgroundGradient gradient='ibize' o={0.65} />
              <Container
                color='white'
                w={[500]} >
                <Link to={`/dashboard/${props.entity}/${id}`} color='blue' >
                  <Heading 
                    f={[6,7]}
                    fw={300}
                    level={3}
                    ts='light'
                    children={nameDisplay} 
                  />
                </Link>
                { !mission?null:
                  <Box>
                    <Paragraph f={[1]}>{mission}</Paragraph>
                  </Box>
                  }
              </Container>
          </Box>
        }
        <Container p={[10]} w={600}  >
          <Box w={[1]} mt={[null,null, '-70px']} bg='white' br={10} bs={2} p={[10,15,25]}>
            { !mission?null:
            <Box>
              <Paragraph f={[1]}>{mission}</Paragraph>
            </Box>
            }
            { !objective?null:
            <Box>
              <Paragraph f={[1]}>{objective}</Paragraph>
            </Box>
            }
            { !summary?null:
            <Box>
              <Paragraph f={[1]}>{summary}</Paragraph>
            </Box>
            }
          </Box>
          <Box py={[20,40]} >
            <ImageList data={idx(props.data, _ => _.images.imageGallery)} />
          </Box>
        </Container>
      </Box>
    </Flex>
}