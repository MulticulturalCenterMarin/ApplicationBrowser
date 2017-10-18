theme: {
      zones: {
        header: true,
        sidebar: true,
        main: true,
      },
      regions: {
        tabs: true,
        tray: true,
        panelLeft: true,
        panelRight: true,
      },
      sidebar: {
        layout: {
          mt: ['40px', '100px'],
          w: ['0', '170px', '300px']
        }
      },
      header: {
        layout: {
          h: ['40px', '80px'],
          p: ['5px 10px', '10px 15px']
        }
      },
      main: {
        layout: {
          w: ['100%', 'calc(100% - 170px)', 'calc(100% - 300px)'],
          mt: ['40px', '100px'],
          mb: ['40px', '10px'],
          ml: ['0', '40px', '200px'],
        },
        regions: {
          content: {
            enabled: true,
            mt: ['0'],
            mb: ['0'],
            ml: ['0'],
            w: ['100%'],
            areas: {
              left: {
                enabled: false,
                p: ['10']
              },
              center: {
                enabled: true,
                p: ['0']
              },
              right: {
                enabled: false,
                p: ['10']
              }
            }
          },
          tabs: {
            enabled: false,
            layout: {
              h: ['40px', '80px'],
              p: ['5px 10px', '10px 15px']
            }
          },
          tray: {
            enabled: false,
            mt: ['40px', '100px'],
            mb: ['40px', '20px'],
            w: ['0', '170px', '80px']
          },
        }
      },
    }