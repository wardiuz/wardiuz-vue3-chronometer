
<template>
    <div class="container">
        <img src="../../assets/logo.svg" alt="logo vue" width="125" height="125"/>
        <small>
        <h1>Cronómetro Vue.js 3</h1>
        </small>
        <hr />
        <div class="container-buttons">
        <button @click="initChronometer(5)">05 min</button>
        <button @click="initChronometer(10)">10 min</button>
        <button @click="initChronometer(15)">15 min</button>
        <button @click="initChronometer(20)">20 min</button>
        <button @click="initChronometer(25)">25 min</button>
        <button @click="initChronometer(30)">30 min</button>
        </div>
        <div class="clock-strap">
            <div class="clock-container">                
                <h2 class="clock">{{`${clock.hours}:${clock.minutes}:${clock.seconds}`}}</h2>    
            </div>
        </div>
        <div class="container-buttons">
        <button @click="increase(amount)">+1 min</button>
        <button @click="decrease(amount)">-1 min</button>
        </div>
        <hr />
        <div class="container-buttons">
        <button @click="stopAlarm()">Detener Alarma</button>
        <button @click="initClock()">Iniciar</button>
        <button @click="reset()">Limpiar</button>    
        </div>
    </div>
</template>
<script type="text/javascript" src="./clock.js"></script>
<style scoped>
    @import "./clock.css";
</style>

  