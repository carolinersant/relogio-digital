const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function atualizarRelogio() {
    const agora = new Date();

    let hr = agora.getHours();
    let min = agora.getMinutes();
    let seg = agora.getSeconds();

    horas.textContent = hr.toString().padStart(2, '0');
    minutos.textContent = min.toString().padStart(2, '0');
    segundos.textContent = seg.toString().padStart(2, '0');
}

// Atualiza imediatamente ao carregar
atualizarRelogio();

// E continua atualizando a cada segundo
setInterval(atualizarRelogio, 1000);
