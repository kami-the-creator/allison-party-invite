const eventDate=new Date("2026-12-19T12:00:00-07:00").getTime();
document.querySelector("#open").addEventListener("click",()=>document.querySelector("#cover").classList.add("open"));
function tick(){const d=Math.max(0,eventDate-Date.now());const values={days:Math.floor(d/86400000),hours:Math.floor(d/3600000)%24,minutes:Math.floor(d/60000)%60,seconds:Math.floor(d/1000)%60};Object.entries(values).forEach(([id,value])=>document.querySelector("#"+id).textContent=String(value).padStart(2,"0"))}tick();setInterval(tick,1000);
document.querySelector("#copy").addEventListener("click",async e=>{try{await navigator.clipboard.writeText("4027 6657 1234 4321");e.currentTarget.textContent="¡Cuenta copiada!"}catch{e.currentTarget.textContent="Cuenta: 4027 6657 1234 4321"}});
