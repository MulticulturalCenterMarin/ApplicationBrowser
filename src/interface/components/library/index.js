import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Image, Heading } from 'atomic'


const LIBRARY_CATALOG_ADVANCED = {
  form: {

  },
  screenshot: {
    singlePage: <Image src={assets.screenshots.singlePage}/>,
    multiplePages: <Image src={assets.screenshots.multiplePages}/>,
    application: <Image src={assets.screenshots.application}/>,
  }
}

export default LIBRARY_CATALOG_ADVANCED