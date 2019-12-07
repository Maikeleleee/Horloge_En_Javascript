

const secondDiv = document.querySelector('.second-hand');        // Récupère la classe des secondes.
const minDiv = document.querySelector('.min-hand');         // Récupère la classe des minutes.
const hourDiv = document.querySelector('.hour-hand');        // Récupère la classe des heures.

function setDate() {
     const now = new Date();       // Récupère la date actuelle.
     const seconds = now.getSeconds();       // Extrait les secondes de now qui contient la date actuelle.
     const secDeg = ((seconds / 60) * 360 + 90);       // Divise les secondes par 60, les multiplie par  (360 + 90)  on ajoute +90 car la position de l'aiguille est a 90 de base ( on aurait un décalage autrement )
     secondDiv.style.transform = `rotate(${secDeg}deg)`;         // Crée une rotation sur la classe seconde.


     const mins = now.getMinutes();          // Extrait les minutes de now qui contient la date actuelle.
     const minDeg = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
     minDiv.style.transform = `rotate(${minDeg}deg)`;       // Crée une rotation sur la classe minutes.


     const hour = now.getHours();       // Extrait les heures de now qui contient la date actuelle.
     const hourDeg = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;        // On divise par 12 car il y a 12 heures + les minutes qui se sont déjà écouler dans l'heure.
     hourDiv.style.transform = `rotate(${hourDeg}deg)`;          // Crée une rotation sur la classe heures.
}
setInterval (setDate,1000);   // Appelle la fonction setDate toute les 1000ms (1 seconde).

