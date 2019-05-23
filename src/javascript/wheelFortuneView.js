import View from "./view";
import {playerService} from './helpers/player.service'


class WheelFortune {
    constructor() {
      
        
    }

    static spin = document.getElementById('spin')
    static count = document.getElementById('count')
    static player = {}
  async startGame(play) {
     
       WheelFortune.player = play
        const segments = await playerService.getSegments()
        const r =  this.createWheelFortune(segments)
       
      
    
      WheelFortune.spin.addEventListener('click', ()=> {
          r.stopAnimation(false)
          r.rotationAngle = r.rotationAngle % 360;
          r.startAnimation()
        })
   
           
    }
    createWheelFortune(segments) {
        const a = segments.map(v => {return {'text' : v+''}})
        
        let theWheel =  new Winwheel({
            'numSegments'    : 16,
            'outerRadius'    : 212,        
            'innerRadius'    : 75,         
            'textFontSize'   : 24,         
            'textOrientation': 'vertical',
            'textAlignment'  : 'outer',
            'fillStyle'      : '#7de6ef',
           
            'segments'       :
            [
                ...a
            ],
            'animation' :                   
            {
                'type'     : 'spinToStop',  
                'duration' : 5,   
                'callbackFinished' : this.alertPrize,
                'spins'    : 8             
            }
        });
       
        return theWheel
    }
    
   async alertPrize(indicatedSegment) {
        WheelFortune.player.score += +indicatedSegment.text
        const a = await playerService.UpdateScore(WheelFortune.player)
        WheelFortune.count.innerHTML = a.player.score
        
    }

    
  
}


export const wheelFortune = new WheelFortune();