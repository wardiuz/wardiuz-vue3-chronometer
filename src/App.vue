<script>
export default {
  data: () => ({
    clock: '00:00:00',    
    amount: 1,
    timer: null,
    sound: null,
    hours:0,
    minutes:0,
    seconds:0
  }),
  methods: {    
    initClock(){
      this.reset();
      let ArrayClock = this.clock.split(':');
      this.hours = Number(ArrayClock[0]);
      this.minutes = Number(ArrayClock[1]);
      this.seconds = Number(ArrayClock[2]);
      this.timer = setInterval(()=>{        
        this.seconds = Number(this.seconds) + 1;
        this.seconds = this.seconds.toString().padStart(2, '0');
        if(this.seconds == '60'){
          this.seconds = '00';
          this.minutes = Number(this.minutes) + 1;          
        }
        this.minutes = this.minutes.toString().padStart(2, '0');
        if(this.minutes == '60'){
          this.minutes = '00';
          this.hours = Number(this.hours) + 1;          
        }
        this.hours = this.hours.toString().padStart(2, '0');
        ArrayClock[0] = this.hours;
        ArrayClock[1] = this.minutes;
        ArrayClock[2] = this.seconds;
        this.clock = ArrayClock.join(':');
      },1000)
    },
    initChronometer(amount){
      this.reset();
      let ArrayClock = this.clock.split(':');
      this.hours = Number(ArrayClock[0]);
      this.minutes = Number(amount-1);
      this.seconds = Number('60');            
      this.timer = setInterval(()=>{        
        this.seconds = Number(this.seconds) - 1;
        this.seconds = this.seconds.toString().padStart(2, '0');
        if(this.seconds == '00'){          
          if(Number(this.minutes) - 1 > 0){
            this.minutes = Number(this.minutes) - 1;          
          } else {
            this.seconds = '60';
          }
        }
        this.minutes = this.minutes.toString().padStart(2, '0');
        if(this.minutes == '00' && this.seconds == '00'){          
          this.initAlarm();
        }
        this.hours = this.hours.toString().padStart(2, '0');
        ArrayClock[0] = this.hours;
        ArrayClock[1] = this.minutes;
        ArrayClock[2] = this.seconds;
        this.clock = ArrayClock.join(':');
      },1000)
    },
    
    increase(amount){
      let ArrayClock = this.clock.split(':');      
      this.minutes = Number(ArrayClock[1]);      
      if((this.minutes + amount) <= 60){
        this.minutes = this.minutes + amount;
        this.minutes = this.minutes.toString().padStart(2, '0');                        
        ArrayClock[1] = this.minutes;
        this.clock = ArrayClock.join(':');
      }  
    },
    decrease(amount){
      let ArrayClock = this.clock.split(':');      
      this.minutes = Number(ArrayClock[1]);      
      if((this.minutes - amount) >= 0){
        this.minutes = this.minutes - amount;
        this.minutes = this.minutes.toString().padStart(2, '0');                        
        ArrayClock[1] = this.minutes;
        this.clock = ArrayClock.join(':');
      }      
    },
    initAlarm(){      
      this.sound && this.stopAlarm();      
      this.sound = new sound("/alarm-clock.mp3");      
      this.sound.play();
    },
    stopAlarm(){         
      this.sound && this.sound.pause();      
    },
    reset(){
      clearInterval(this.timer); 
      this.contador = 0;
      this.clock = '00:00:00';
    }
  },
};
</script>

<template>
  <div class="container">
    <img src="./assets/logo.svg" alt="logo vue" width="125" height="125"/>
    <small>
      <h1>Cronómetro Vue.js 3</h1>
    </small>
    <hr />
    <div>
      <button @click="initChronometer(5)">5 min</button>
      <button @click="initChronometer(10)">10 min</button>
      <button @click="initChronometer(15)">15 min</button>
      <button @click="initChronometer(20)">20 min</button>
      <button @click="initChronometer(25)">25 min</button>
      <button @click="initChronometer(30)">30 min</button>
    </div>
    <h2>{{clock}}</h2>    
    <div>
      <button @click="aumentar(amount)">+1 min</button>
      <button @click="disminuir(amount)">-1 min</button>
    </div>
    <hr />
    <button @click="stopAlarm()">Detener Alarma</button>
    <button @click="initClock()">Iniciar</button>
    <button @click="reset()">Limpiar</button>    
  </div>
</template>

<style scoped>
  .container{
    text-align:center;    
  }
  h1 {
    font-weight: bolder;
  }
  h2 {
    font-size: 2.5rem
  }
  button{
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0px 6px;
  }
</style>
