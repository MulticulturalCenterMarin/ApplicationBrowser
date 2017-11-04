import assets from 'assets'
export default eid => [
  {
    title: 'Profile',
    to: `/dashboard/person/${eid}`,
    svg: assets.svg.dna,
    icon: {
      svgColor: 'green'
    },
    childrenItems: [
      {
        title: 'Edit',
        to: `/dashboard/person/${eid}/edit`,
        destination: 'edit',
        svg: assets.svg.cog,
        icon: {
          svgColor: 'red'
        }
      },
      {
        title: 'Settings',
        to: `/dashboard/person/${eid}/settings`,
        destination: 'settings',
        svg: assets.svg.folderLinked,
        icon: {
          svgColor: 'red'
        }
      },
    ]
  },
  {
    title: 'Projects',
    to: `/dashboard/person/${eid}/projects`,
    destination: 'edit',
    svg: assets.svg.flowChart,
    icon: {
      svgColor: 'green'
    }
  },
  {
    title: 'Tasks',
    to: `/dashboard/person/${eid}/tasks`,
    destination: 'settings',
    svg: assets.svg.chatDrawn,
    icon: {
      svgColor: 'green'
    }
  },
  {
    title: 'Account',
    to: `/dashboard/person/${eid}/account`,
    destination: 'settings',
    svg: assets.svg.cloudSecurity,
    icon: {
      svgColor: 'green'
    }
  },

]