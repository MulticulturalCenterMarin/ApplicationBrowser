import assets from 'assets'
const drawerMenuItems = [
  {
    title: 'Project Profile',
    branch: 'dashboard/project',
    destination: '',
    svg: assets.svg.dna,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Edit Profile',
    branch: 'dashboard/project',
    destination: 'edit',
    svg: assets.svg.cog,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Recent Activity',
    branch: 'dashboard/project',
    destination: 'activity',
    svg: assets.svg.dataAnalytics,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Status Updates',
    branch: 'dashboard/project',
    destination: 'activity',
    svg: assets.svg.mobileSend,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Contributors',
    branch: 'dashboard/project',
    destination: 'people',
    svg: assets.svg.girl,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Task Assignment',
    branch: 'dashboard/project',
    destination: 'tasks',
    svg: assets.svg.flowChart,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Administrator Settings',
    branch: 'dashboard/project',
    destination: 'settings',
    svg: assets.svg.folderLinked,
    icon: {
      svgColor: 'blue'
    }
  },
]

export default drawerMenuItems