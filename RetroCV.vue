<script setup>
import { ref, reactive } from 'vue'

const open = ref(false)
const cards = reactive([
  { t:'⚔️ EXP', txt:'Full-Stack Dev @ Coanda Technologies · Java 21 + Spring Boot + React · Despliegues multi-sede · APIs REST + JWT + Spring Security', hit:false, done:false },
  { t:'🛡️ SKILLS', txt:'Java · Spring Boot · React · Vite · TailwindCSS · PostgreSQL · MySQL · Docker · Git · API REST · JavaScript', hit:false, done:false },
  { t:'📜 EDUCACIÓN', txt:'DAW @ Ilerna Sevilla · Cisco CCNA v7 · Doble Certificación IA & ML · SMR @ IES Hermanos Machado', hit:false, done:false },
  { t:'🧙 SOBRE MÍ', txt:'Desarrollador proactivo que pasó de gestionar equipos en retail a construir software empresarial de alto nivel.', hit:false, done:false },
  { t:'🏆 PROYECTOS', txt:'SitoInformatic: eCommerce + Motor IA · App Inventario QR: 15K registros migrados · Automatización comercial', hit:false, done:false },
  { t:'📡 CONTACTO', txt:'Dos Hermanas, Sevilla · alonsoarriaza03@gmail.com · github.com/alonsoarriaza · LinkedIn: alonsoferiaarriaza', hit:false, done:false },
].map(c=>({...c,dust:Array.from({length:6},(_,i)=>({x:`${(Math.random()-.5)*120}px`,y:`${-Math.random()*60-20}px`,d:`${i*45}ms`}))})))

function punch(c) {
  if (c.hit || c.done) return
  c.hit = true
  setTimeout(() => { c.hit = false; c.done = true }, 950)
}
</script>

<template>
  <div class="retro">
    <nav>
      <span class="logo">ALONSO<b>.</b>dev</span>
      <button @click="open=!open">{{ open ? '⏸ PAUSE' : '🪙 INSERT COIN' }}</button>
    </nav>
    <Transition name="drop">
      <section v-if="open" class="grid">
        <div v-for="(c,i) in cards" :key="i" class="block" :class="{bump:c.hit,revealed:c.done}" @click="punch(c)">
          <template v-if="!c.done">
            <div class="char" :class="{jump:c.hit}"><i class="px"></i></div>
            <span class="qm">?</span>
          </template>
          <div v-if="c.hit" class="coin">🪙</div>
          <span v-for="(d,j) in (c.hit ? c.dust : [])" :key="j" class="dust" :style="{'--dx':d.x,'--dy':d.y,'animation-delay':d.d}"/>
          <div v-if="c.done" class="rpg">
            <strong>{{ c.t }}</strong>
            <p>{{ c.txt }}</p>
            <em>▼</em>
          </div>
        </div>
      </section>
    </Transition>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.retro{font-family:'Press Start 2P',monospace;background:#0b0618;min-height:100vh;color:#fff}

nav{display:flex;align-items:center;justify-content:space-between;padding:1.2rem 2rem;border-bottom:4px solid #1a1333;background:#0f0a1f}
.logo{font-size:1rem;color:#fff;letter-spacing:1px}
.logo b{color:#a855f7}
button{font-family:inherit;font-size:.55rem;padding:.7rem 1.4rem;background:linear-gradient(180deg,#f5c542,#c8961a);color:#1a1333;border:3px solid #8b6914;cursor:pointer;transition:transform .1s;letter-spacing:.5px}
button:hover{transform:scale(1.06)}
button:active{transform:scale(.94)}

.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:2rem;padding:3rem 2rem;max-width:920px;margin:0 auto}

.block{
  position:relative;min-height:220px;display:flex;flex-direction:column;align-items:center;justify-content:center;
  background:linear-gradient(180deg,#f5c542,#c8961a);border:4px solid #8b6914;border-radius:4px;cursor:pointer;overflow:visible;
  box-shadow:inset 3px 3px 0 #ffe680,inset -3px -3px 0 #8b6914,0 6px 16px rgba(0,0,0,.5);
  transition:transform .15s
}
.block:hover:not(.revealed){transform:translateY(-3px)}
.block.bump{animation:landAnim .2s ease-out}
.block.revealed{
  background:linear-gradient(180deg,#120d24,#0b0618);border-color:#6c5ce7;cursor:default;
  box-shadow:inset 2px 2px 0 #1e1640,inset -2px -2px 0 #06030f,0 0 24px rgba(108,92,231,.25)
}

.qm{font-size:2.2rem;color:#fff;text-shadow:2px 2px 0 #8b6914,0 0 10px rgba(255,224,102,.3);animation:idleAnim 1.5s ease-in-out infinite;margin-top:.4rem}

.char{position:relative;z-index:2;margin-bottom:.6rem}
.char:not(.jump){animation:idleAnim 1.5s ease-in-out infinite}
.char.jump{animation:jumpAnim .6s cubic-bezier(.33,1,.68,1) forwards;pointer-events:none}

.px{
  display:block;width:4px;height:4px;position:relative;transform:scale(2.8);transform-origin:center bottom;image-rendering:pixelated
}
.px::after{
  content:'';position:absolute;width:4px;height:4px;background:transparent;
  box-shadow:
    4px -20px #4a3728,8px -20px #4a3728,
    0 -16px #ffd699,4px -16px #ffd699,8px -16px #ffd699,12px -16px #ffd699,
    4px -12px #6c5ce7,8px -12px #6c5ce7,
    0 -8px #6c5ce7,4px -8px #ffd699,8px -8px #ffd699,12px -8px #6c5ce7,
    4px -4px #2d3436,8px -4px #2d3436,
    0 0 #8b4513,12px 0 #8b4513
}

.coin{position:absolute;top:0;left:50%;font-size:1.4rem;animation:coinSpin .8s steps(8) forwards;pointer-events:none;z-index:5}

.dust{
  position:absolute;bottom:20%;left:50%;width:5px;height:5px;background:#8b6914;
  animation:dustScatter .45s ease-out forwards;pointer-events:none;z-index:3
}

.rpg{padding:1.2rem;text-align:left;width:100%}
.rpg strong{display:block;font-size:.6rem;color:#ffe066;margin-bottom:.7rem;text-shadow:1px 1px 0 #6c5ce7}
.rpg p{font-size:.42rem;line-height:2.2;color:#d1d5db;margin:0}
.rpg em{display:block;text-align:right;font-style:normal;margin-top:.6rem;font-size:.5rem;color:#ffe066;animation:idleAnim 1s ease-in-out infinite}

@keyframes idleAnim{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-5px)}
}
@keyframes jumpAnim{
  0%{transform:translateY(0)}
  42%{transform:translateY(-90px)}
  75%{transform:translateY(-8px)}
  100%{transform:translateY(0)}
}
@keyframes landAnim{
  0%{transform:scaleY(1) scaleX(1)}
  40%{transform:scaleY(.9) scaleX(1.06)}
  70%{transform:scaleY(1.05) scaleX(.96)}
  100%{transform:scaleY(1) scaleX(1)}
}
@keyframes coinSpin{
  0%{transform:translateX(-50%) translateY(0) scaleX(1);opacity:1}
  25%{transform:translateX(-50%) translateY(-22px) scaleX(.1)}
  50%{transform:translateX(-50%) translateY(-48px) scaleX(1)}
  75%{transform:translateX(-50%) translateY(-66px) scaleX(.1)}
  100%{transform:translateX(-50%) translateY(-78px) scaleX(1);opacity:0}
}
@keyframes dustScatter{
  0%{transform:translate(0,0) scale(1);opacity:1}
  100%{transform:translate(var(--dx),var(--dy)) scale(0);opacity:0}
}

.drop-enter-active{transition:all .4s ease-out}
.drop-leave-active{transition:all .3s ease-in}
.drop-enter-from,.drop-leave-to{opacity:0;transform:translateY(-20px)}
</style>
