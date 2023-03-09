document.addEventListener("DOMContentLoaded", function(){


    // фильтр 1002 на 152
  const 
  card1002_152_third_unit = document.querySelectorAll('.card1002_152_third_unit'),
  card1002_152_third_unit_in = document.querySelectorAll('.card1002_152_third_unit_in');
if(card1002_152_third_unit_in){
    card1002_152_third_unit_in.forEach(
        (item, i) => { item.addEventListener(
            "click", ()=>{
                item.classList.toggle('card1002_152_third_unit_in_active');
                card1002_152_third_unit[i].classList.toggle('card1002_152_third_unit_active');
            }
        )   
        }
    )
};

        // }
//  плюс мину в фильтре 1002 на 152

const card1002_152_first_counter_value = document.querySelector(".card1002_152_first_counter_value");
if(card1002_152_first_counter_value){
    document.querySelector(".card1002_152_first_counter_plus").onclick = function() {
        card1002_152_first_counter_value = ++card1002_152_first_counter_value;
    }
    document.querySelector(".card1002_152_first_counter_minus").onclick = function() {
      if (card1002_152_first_counter_value > 0) {
        card1002_152_first_counter_value = --card1002_152_first_counter_value;
      } 
    } 
}


const card1002_152_bg_purple_plus_wrap = document.querySelector('.card1002_152_bg_purple_plus_wrap'),
card1002_152_fourth = document.querySelector('.card1002_152_fourth'),
card1002_152_bg_purple_plus_after = document.querySelector('.card1002_152_bg_purple_plus_after'),
card1002_152_fifth = document.querySelector('.card1002_152_fifth');

if(card1002_152_bg_purple_plus_wrap){
    card1002_152_bg_purple_plus_wrap.addEventListener('click', ()=>{
        card1002_152_bg_purple_plus_after.classList.toggle('dn');
        card1002_152_fourth.classList.toggle('db');
        card1002_152_fifth.classList.toggle('df');
     
    })
}

  
    
const card_faq_img = document.querySelectorAll('.card_faq_img'),
card_faq_bg_purple = document.querySelectorAll('.card_faq_bg_purple'),
card_faq_descr = document.querySelectorAll('.card_faq_descr');
if(card_faq_img){
    card_faq_img.forEach( (t,i)=>{
        t.addEventListener("click", ()=>{
            t.classList.toggle('transform180deg')
            card_faq_descr[i].classList.toggle('db');
            card_faq_bg_purple[i].classList.toggle('height_auto');
        })
       
        });
}

        









} );
