import assets from 'assets'
const drawerMenuItems = [
  {
    title: 'Profile',
    branch: 'dashboard/article',
    destination: '',
    svg: assets.svg.laptop,
    icon: {
      svgColor: 'red'
    }
  },
  {
    title: 'Write',
    branch: 'dashboard/article',
    destination: 'edit',
    svg: assets.svg.idea,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Settings',
    branch: 'dashboard/article',
    destination: 'edit/settings',
    svg: assets.svg.cog,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Status Updates',
    branch: 'dashboard/article',
    destination: 'activity',
    svg: assets.svg.bell,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Contributors',
    branch: 'dashboard/article',
    destination: 'people',
    svg: assets.svg.dna,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Task Assignment',
    branch: 'dashboard/article',
    destination: 'tasks',
    svg: assets.svg.flowChart,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Administrator Settings',
    branch: 'dashboard/article',
    destination: 'settings',
    svg: assets.svg.folderLinked,
    icon: {
      svgColor: 'blue'
    }
  },
]

export default drawerMenuItems