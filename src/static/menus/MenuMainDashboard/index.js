import assets from 'assets'
const drawerMenuItems = [
  {
    title: 'People',
    to: '/dashboard/people',
    svg: assets.svg.dna,
    gradient: 'crimson',
    childrenItems: [
      {
        title: 'Activity',
        to: '/dashboard/people/map',
        svg: assets.svg.mobileCity,
        gradient: 'crimson',
        gradientDir: '90deg',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
         wrapper: {
          display: 'flex',
          align: 'center',
        },
      },
      {
        title: 'Add',
        to: '/dashboard/person/add',
        svg: assets.svg.holePuzzle,
        gradient: 'crimson',
        gradientDir: '150deg',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
         wrapper: {
          display: 'flex',
          align: 'center',
        },
      },
      {
        title: 'Manage',
        to: '/dashboard/people/manage',
        svg: assets.svg.personGraph,
        gradient: 'crimson',
        gradientDir: '130deg',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
         wrapper: {
          display: 'flex',
          align: 'center',
        },
      },
    ]
  },
  {
    title: 'Organizations',
    to: '/dashboard/organizations',
    svg: assets.svg.castle,
    gradient: 'purple',
  },
  {
    title: 'Projects',
    to: '/dashboard/projects',
    svg: assets.svg.networkCentral,
    gradient: 'purpleTurqoise',
    childrenItems: [
      {
        title: 'Activity',
        to: '/dashboard/projects/map',
        svg: assets.svg.mobileCity,
        gradient: 'purpleTurqoise',
        gradientDir: '90deg',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
         wrapper: {
          display: 'flex',
          align: 'center',
        },
      },
      {
        title: 'Add',
        to: '/dashboard/project/add',
        svg: assets.svg.holePuzzle,
        gradient: 'purpleTurqoise',
        gradientDir: '150deg',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
         wrapper: {
          display: 'flex',
          align: 'center',
        },
      },
      {
        title: 'Manage',
        to: '/dashboard/projects/manage',
        svg: assets.svg.personGraph,
        gradient: 'purpleTurqoise',
        gradientDir: '130deg',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
         wrapper: {
          display: 'flex',
          align: 'center',
        },
      },
    ]
  },
  {
    title: 'Resources',
    to: '/dashboard/resources',
    svg: assets.svg.dataMining,
    gradient: 'turqoise',
    childrenItems: [
      {
        title: 'Activity',
        to: '/dashboard/resources/map',
        svg: assets.svg.mobileCity,
        gradient: 'purpleTurqoise',
        gradientDir: '90deg',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
         wrapper: {
          display: 'flex',
          align: 'center',
        },
      },
      {
        title: 'Add',
        to: '/dashboard/resources/add',
        svg: assets.svg.holePuzzle,
        gradient: 'purpleTurqoise',
        gradientDir: '150deg',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
         wrapper: {
          display: 'flex',
          align: 'center',
        },
      },
      {
        title: 'Manage',
        to: '/dashboard/resources/manage',
        svg: assets.svg.personGraph,
        gradient: 'purpleTurqoise',
        gradientDir: '130deg',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
         wrapper: {
          display: 'flex',
          align: 'center',
        },
      },
    ]
  },
 
]

export default drawerMenuItems