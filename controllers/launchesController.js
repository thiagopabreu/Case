const axios = require('axios')

module.exports = app => {
    
    axios.get('https://api.spacexdata.com/v4/launches/next')
    .then(res => {
        const nextLaunchData = res.data
        app.get('/nextLaunch', (req, res) => {
            res.send(nextLaunchData)
        } )
    })

    axios.get('https://api.spacexdata.com/v4/launches/latest')
    .then(res => {
        const lastLaunchData = res.data
        app.get('/lastLaunch', (req, res) => {
            res.send(lastLaunchData)
        })
    })

    axios.get('https://api.spacexdata.com/v4/launches/past')
    .then(res => {
        const pastLaunchesData = res.data
        app.get('/pastLaunches', (req, res) => {
            res.send(pastLaunchesData)
        })
    })

    axios.get('https://api.spacexdata.com/v4/launches/upcoming')
    .then(res => {
        const upcomingLaunches = res.data
        app.get('/upcomingLaunches', (req, res) => {
            res.send(upcomingLaunches)
        })
    })

    
}