import {dataClocks} from "./data.js";
import {hambMenu} from "./hambMenu.js";
import {accordion} from "./accordion.js";
import {swiper} from "./swiper.js";

hambMenu();
accordion();
swiper();

/*-----------------------dataMaping----------------*/

const clocksItem = document.querySelectorAll("._clock");
const clocksItemImg = document.querySelectorAll("._imgclock");
console.log(clocksItemImg);
let i = 0;

const createClookDesc = (item) => {
    item.insertAdjacentHTML('afterbegin',
    `<p>${dataClocks[i].name}</p>
     <p>${dataClocks[i].price}</p>`);
}

clocksItem.forEach((item,index) => {
        if (dataClocks[index] === undefined) {
            createClookDesc(item);
             i+=1;
             if (i === 7) {
                i = 0;
             }
        }
       else { 
        createClookDesc(item);
       }
});

i = 0;
clocksItemImg.forEach((itemImg,index) => {
       if (i === 5) {
        
       } 
       if (i === 7) {
            i = 0;
            itemImg.setAttribute('src',`./img/main/Clocks/62050 2-${i}.png`);
       }
       else { 
            itemImg.setAttribute('src',`./img/main/Clocks/62050 2-${i}.png`);
       }
       i+=1;

})

