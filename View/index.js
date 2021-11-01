
const form = document.querySelector('.container-input')
const button = document.querySelector("#launch-button")
const content = document.querySelector('#p1')


button.addEventListener('click', (event) => {
    event.preventDefault()
    if(form.launchs.value === 'next') {
        fetch('http://localhost:3000/nextLaunch')
        .then((response) => response.json())
        .then(next => {
            let output = ''
            for(let user of next.crew) {
                output += `<li>${user}</li>`
            }

            content.innerHTML = `O lançamento ${next.name}, com o id de ${next.id}, será lançado às ${next.date_utc} pela crew: ${output} O nome do foguete utilizado é chamado de ${next.rocket}`
        })  
    }
    if(form.launchs.value === 'last') {
        fetch('http://localhost:3000/lastLaunch')
        .then((response) => response.json())
        .then(next => {
            let output = ''
            for(let user of next.crew) {
                output += `<li>${user}</li>`
            }

            content.innerHTML = `O lançamento ${next.name}, com o id de ${next.id}, será lançado às ${next.date_utc} pela crew: ${output} O nome do foguete utilizado é chamado de ${next.rocket}`
        })
    }
    if(form.launchs.value === 'upcoming') {
        console.log('Clicked')
        fetch('http://localhost:3000/upcomingLaunches')
        .then((response) => response.json())
        .then(next => {
            let output = ''
            let crew = ''
            for(var i = 0 in next) {
                output += `O lançamento do ${next[i].name}, com o id de ${next[i].id}, será lançado às ${next[i].date_utc}<br>O nome do foguete utilizado é chamado de ${next[i].rocket}<br><br>`

        }
        content.innerHTML = output
            
        
    })
    }
    if(form.launchs.value === 'lastest') {
        console.log('Clicked')
        fetch('http://localhost:3000/pastLaunches')
        .then((response) => response.json())
        .then(next => {
            let output = ''
            let crew = ''
            for(var i = 0 in next) {
                output += `O lançamento do ${next[i].name}, com o id de ${next[i].id}, será lançado às ${next[i].date_utc}<br>O nome do foguete utilizado é chamado de ${next[i].rocket}<br><br>`

        }
        content.innerHTML = output
            
        
    })
    }
})
