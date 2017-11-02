import assets from 'assets'
const drawerMenuItems = [
  {
    title: 'Profile',
    to: '/dashboard/profile',
    svg: assets.svg.idea,
    gradient: 'redOrange',
    gradientDir:'180deg',
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
    title: 'Articles',
    to: '/dashboard/profile/communications',
    svg: assets.svg.chatHeads,
    gradient: 'cherry',
    
    childrenItems: [
      {
        title: 'Create Schedule',
        to: '/dashboard/communications/hotline/',
        svg: assets.svg.flowChartShapes,
        gradient: 'cherry',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
        wrapper: {
          display: 'flex',
          align: 'center',
        },
        childrenItems: [
          {
            title: 'Call Logs',
            to: '/dashboard/communications/hotlines/calls/log',
            svg: assets.svg.chat,
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
            title: 'Messages',
            to: '/dashboard/communications/hotlines/messages',
            svg: assets.svg.chatHeads,
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
        ],
      },
      {
        title: 'Rapid Response',
        to: '/dashboard/communications/hotline/immigration',
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
        childrenItems: [
          {
            title: 'Call Logs',
            to: '/dashboard/communications/hotline/immigration/calls/log',
            svg: assets.svg.chat,
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
            title: 'Messages',
            to: '/dashboard/communications/hotline/immigration/messages',
            svg: assets.svg.chatHeads,
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
        ],
      },
      {
        title: 'General Information',
        to: '/dashboard/communications/hotline/general',
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
        childrenItems: [
          {
            title: 'Call Logs',
            to: '/dashboard/communications/hotline/general/calls/log',
            svg: assets.svg.chatDrawn,
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
            title: 'Recent Activity',
            to: '/dashboard/communications/hotline/immigration/activity/recent',
            svg: assets.svg.chatHeads,
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
        ],
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
 
]

export default drawerMenuItems