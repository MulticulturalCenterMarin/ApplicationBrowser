import assets from 'assets'
const drawerMenuItems = [
  {
    title: 'Profile',
    branch: 'dashboard/organization',
    destination: '',
    svg: assets.svg.womanHead,
    icon: {
      svgColor: 'purple'
    }
  },
  {
    title: 'Activity',
    branch: 'dashboard/organization',
    destination: 'activity',
    svg: assets.svg.backpack,
    icon: {
      svgColor: 'red'
    }
  },
  {
    title: 'People',
    branch: 'dashboard/organization',
    destination: 'people',
    svg: assets.svg.dna,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Edit',
    branch: 'dashboard/organization',
    destination: 'edit',
    svg: assets.svg.cog,
    icon: {
      svgColor: 'green'
    }
  },
]

export default drawerMenuItems