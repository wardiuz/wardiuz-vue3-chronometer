
export default {
 
    data: () => ({
        clock: {
            hours:'00',    
            minutes:'00',
            seconds:'00'
        },
        amount: 1,
        timer: null,
        soundAlarm: null,                
    }),
    methods: {   
        numberToStringClock(number){
            return number.toString().padStart(2, '0');
        },
        initClock(){
            this.reset();            
            this.timer = setInterval(()=>{        
                let seconds = Number(this.clock.seconds) + 1;
                this.clock.seconds = this.numberToStringClock(seconds);
                if(this.clock.seconds == '60'){
                    this.clock.seconds = '00';
                    this.clock.minutes = this.numberToStringClock(Number(this.minutes) + 1);                          
                }                
                if(this.clock.minutes == '60'){
                    this.clock.minutes = '00';                    
                    this.clock.hours = this.numberToStringClock(Number(this.hours) + 1);
                }
            },1000)
        },
        initChronometer(amount){
            this.reset();                        
            this.clock.minutes = this.numberToStringClock(Number(amount - 1));
            this.clock.seconds = this.numberToStringClock(Number('59'));
            this.timer = setInterval(()=>{                        
                if(this.clock.seconds == '00'){
                    if(Number(this.clock.minutes) > 0){
                        this.clock.minutes = this.numberToStringClock(Number(this.clock.minutes) - 1);
                        this.clock.seconds = '59';
                    }
                } else {
                    this.clock.seconds = this.numberToStringClock(Number(this.clock.seconds) - 1);
                }
                if(this.clock.minutes == '00' && this.clock.seconds == '00'){
                    this.reset();
                    this.initAlarm();
                }
            },1000)
        },        
        increase(amount){        
            let minutes = Number(this.clock.minutes);
            if(minutes + amount <= 60){
                this.clock.minutes = this.numberToStringClock(minutes + amount);            
            }  
        },
        decrease(amount){        
            let minutes = Number(this.clock.minutes);
            if((minutes - amount) >= 0){
                this.clock.minutes = this.numberToStringClock(minutes - amount);                
            }
        },
        initAlarm(){      
            this.soundAlarm && this.stopAlarm();      
            this.soundAlarm = new Audio('/alarm-clock.mp3');
            this.soundAlarm.loop = true;
            this.soundAlarm.play();
        },
        stopAlarm(){         
            this.reset();
            this.soundAlarm.loop = false;
            this.soundAlarm && this.soundAlarm.pause();                  
        },
        reset(){
            clearInterval(this.timer);       
            this.clock = {
                hours:'00',    
                minutes:'00',
                seconds:'00'
            };
        }
    },
};