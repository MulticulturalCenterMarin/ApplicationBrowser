import assets from 'assets'
const drawerMenuItems = [
  {
    title: 'News/Articles',
    to: '/dashboard/news',
    svg: assets.svg.idea,
    gradient: 'redOrange',
    
    childrenItems: [
      {
        title: 'Latest Articles',
        to: '/dashboard/news/latest',
        svg: assets.svg.lightening,
        gradient: 'redOrange',
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
        title: 'Upcoming Schedule',
        to: '/dashboard/news/schedule',
        svg: assets.svg.flowChart,
        gradient: 'redOrange',
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
        title: 'Recent Reports',
        to: '/dashboard/news/reporting',
        svg: assets.svg.graphVisualization,
        gradient: 'redOrange',
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
    title: 'Rapid Response',
    to: '/dashboard/volunteer/hotline/rapid-response',
    svg: assets.svg.chatHeads,
    gradient: 'cherry',
    
    childrenItems: [
      {
        title: 'Activity',
        to: '/dashboard/volunteer/hotline/rapid-response/activity',
        svg: assets.svg.lightening,
        gradient: 'cherry',
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
        title: 'Schedule',
        to: '/dashboard/volunteer/hotline/rapid-response/schedule',
        svg: assets.svg.flowChart,
        gradient: 'cherry',
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
        title: 'Reporting',
        to: '/dashboard/volunteer/hotline/rapid-response/reporting',
        svg: assets.svg.graphVisualization,
        gradient: 'cherry',
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
     childrenItems: [
      {
        title: 'Activity',
        to: '/dashboard/organizations/map',
        svg: assets.svg.laptop,
        gradient: 'purple',
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
        to: '/dashboard/organization/add',
        svg: assets.svg.networkCentral,
        gradient: 'purple',
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
    ]
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
  {
    title: 'Activism',
    to: '/dashboard/activism',
    svg: assets.svg.mobileCity,
    gradient: 'turqoiseMoss'
  },
  {
    title: 'Opportunity',
    to: '/dashboard/opportunity',
    svg: assets.svg.mobileMoney,
    gradient: 'orange'
  },
  {
    title: 'Partners',
    to: '/dashboard/partners',
    svg: assets.svg.earth,
    gradient: 'yellow'
  },
  {
    title: 'Learning',
    to: '/dashboard/learning',
    svg: assets.svg.brain,
    gradient: 'limeHarmonic'
  },

  {
    title: 'Programs',
    to: '/dashboard/events',
    svg: assets.svg.community,
    gradient: 'ibize'
  },
  {
    title: 'Youth',
    to: '/dashboard/events',
    svg: assets.svg.cultureEagle,
    gradient: 'turqoiseMoss'
  },
  {
    title: 'Governance',
    to: '/dashboard/events',
    svg: assets.svg.government,
    gradient: 'politics'
  },
]

export default drawerMenuItems