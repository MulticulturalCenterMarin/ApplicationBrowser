import assets from 'assets'
const drawerMenuItems = [
  {
    title: 'Event Preview',
    branch: 'dashboard/event',
    destination: '',
    svg: assets.svg.bookmark,
    icon: {
      svgColor: 'red'
    }
  },
  {
    title: 'Edit Events',
    branch: 'dashboard/event',
    destination: 'edit',
    svg: assets.svg.cog,
    icon: {
      svgColor: 'red'
    }
  },
  {
    title: 'Contributors',
    branch: 'dashboard/event',
    destination: 'people',
    svg: assets.svg.girl,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Task Assignment',
    branch: 'dashboard/event',
    destination: 'tasks',
    svg: assets.svg.flowChart,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Administrator Settings',
    branch: 'dashboard/event',
    destination: 'settings',
    svg: assets.svg.folderLinked,
    icon: {
      svgColor: 'blue'
    }
  },
]

export default drawerMenuItems