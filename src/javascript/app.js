import {playerService} from './helpers/player.service'
import {wheelFortune} from './wheelFortuneView'

class App {
    constructor() {
        this.currentPlayer;
        this.startApp()
         
        
    }

    static rootElement = document.getElementById('root')
    static form = document.getElementById('login')
    static score = document.getElementById('count')
    startApp() {
        App.form.addEventListener('submit', this.login)
       
        
    }


    async login(event) {

        try {
            event.preventDefault()
            const password = App.form.password.value
            const name = App.form.username.value
            const player = await playerService.login({name, password})
            this.currentPlayer = player
            App.form.classList.toggle('active')
            App.rootElement.classList.toggle('active')
            console.log(player)
            App.score.innerHTML = player.score
            wheelFortune.startGame(player)
            
            
        } catch (error) {
            console.log(error)
        }
       
       
      
        
    }


}

export default App