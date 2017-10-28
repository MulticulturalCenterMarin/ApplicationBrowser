import assets from 'assets'
const drawerMenuItems = [
  {
    title: 'Article Preview',
    branch: 'dashboard/article',
    destination: '',
    svg: assets.svg.laptop,
    icon: {
      svgColor: 'red'
    }
  },
  {
    title: 'Edit Article',
    branch: 'dashboard/article',
    destination: 'edit',
    svg: assets.svg.cog,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Contributors',
    branch: 'dashboard/article',
    destination: 'people',
    svg: assets.svg.girl,
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