import assets from 'assets'
const drawerMenuItems = [
  {
    title: 'Project Profile',
    branch: 'dashboard/project',
    destination: '',
    svg: assets.svg.laptop,
    icon: {
      svgColor: 'green'
    }
  },
  {
    title: 'Edit Project',
    branch: 'dashboard/project',
    destination: 'edit',
    svg: assets.svg.flowChart,
    icon: {
      svgColor: 'green'
    }
  },
  {
    title: 'Settings',
    branch: 'dashboard/project',
    destination: 'settings',
    svg: assets.svg.folderLinked,
    icon: {
      svgColor: 'green'
    }
  },
  {
    title: 'Recent Activity',
    branch: 'dashboard/project',
    destination: 'activity',
    svg: assets.svg.dataAnalytics,
    icon: {
      svgColor: 'red'
    }
  },
  {
    title: 'Status Updates',
    branch: 'dashboard/project',
    destination: 'activity',
    svg: assets.svg.mobileSend,
    icon: {
      svgColor: 'red'
    }
  },
  {
    title: 'Contributors',
    branch: 'dashboard/project',
    destination: 'people',
    svg: assets.svg.girl,
    icon: {
      svgColor: 'red'
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