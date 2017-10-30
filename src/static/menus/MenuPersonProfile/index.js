import assets from 'assets'
const drawerMenuItems = [
  {
    title: 'Profile',
    branch: 'dashboard/person',
    destination: '',
    svg: assets.svg.dna,
    icon: {
      svgColor: 'green'
    }
  },
  {
    title: 'Edit',
    branch: 'dashboard/person',
    destination: 'edit',
    svg: assets.svg.cog,
    icon: {
      svgColor: 'green'
    }
  },
   {
    title: 'Settings',
    branch: 'dashboard/person',
    destination: 'settings',
    svg: assets.svg.folderLinked,
    icon: {
      svgColor: 'green'
    }
  },
  {
    title: 'Activity',
    branch: 'dashboard/person',
    destination: 'activity',
    svg: assets.svg.dataAnalytics,
    icon: {
      svgColor: 'red'
    }
  },
  {
    title: 'Text Message (SMS)',
    branch: 'dashboard/person',
    destination: 'sms',
    svg: assets.svg.mobileSend,
    icon: {
      svgColor: 'red'
    }
  },
  {
    title: 'Call Records',
    branch: 'dashboard/person',
    destination: 'calls',
    svg: assets.svg.chat,
    icon: {
      svgColor: 'red'
    }
  },
  {
    title: 'Task Assignment',
    branch: 'dashboard/person',
    destination: 'tasks',
    svg: assets.svg.flowChart,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Administrator Settings',
    branch: 'dashboard/person',
    destination: 'settings',
    svg: assets.svg.folderLinked,
    icon: {
      svgColor: 'blue'
    }
  },
]

export default drawerMenuItems