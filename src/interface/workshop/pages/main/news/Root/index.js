/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { FirestoreList, FirestoreDocument } from 'containers'
import { Flex, Box, BackgroundImage, BackgroundGradient, Heading, Image, Paragraph, Container, Section, Span, SVG } from 'atomic'
import { CommunityPrograms } from 'workshop/blocks'
import { Actions, WhyApproach, ToolsDashboardFeatures, TechnologyBenefits } from 'workshop/sections'

/* ------------------------------- Component -------------------------------- */
export default ({ ...props }) => (<div>
  <FirestoreList
      collection='articles'
      delta='ArticleSearch'
      entity='article'
      foundry='EntityCardLarge'
      styled={{
        w: [1],
      }}
    />
</div>)