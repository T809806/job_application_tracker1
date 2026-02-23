let interviewList =[];
let rejectedList =[];


let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');

const allBtn = document.getElementById('all_btn')
const interviewFilterBtn = document.getElementById('interview_filter_btn')
const rejectedFilterBtn = document.getElementById('rejected_filter_btn')


const all_cards_section = document.getElementById('all_cards');
const mainContainer = document.querySelector('main');


function calculateCounting () {

       total.innerText = all_cards_section.children.length
       interview.innerText = interviewList.length
       rejected.innerText = rejectedList.length


}

calculateCounting ()

function toggleStyle(id) {

    allBtn.classList.remove('bg-[#3B82F6]','text-white')
     interviewFilterBtn.classList.remove('bg-[#3B82F6]','text-white')
     rejectedFilterBtn.classList.remove('bg-[#3B82F6]','text-white')

     allBtn.classList.add('bg-white','text-[#64748B]')
     interviewFilterBtn.classList.add('bg-white','text-[#64748B]')
     rejectedFilterBtn.classList.add('bg-white','text-[#64748B]')

     const selected = document.getElementById(id)
     //console.log(selected);

     selected.classList.remove('bg-white','text-[#64748B]')
     selected.classList.add('bg-[#3B82F6]','text-white')

}


mainContainer.addEventListener('click', function(event) {

  const parentNode = event.target.parentNode.parentNode;
  const Mobile = parentNode.querySelector('.Mobile').innerText
  const React = parentNode.querySelector('.React').innerText
   const Remote = parentNode.querySelector('.Remote').innerText
    const Not = parentNode.querySelector('.Not').innerText
     const Build = parentNode.querySelector('.Build').innerText

  const cardInfo = {

    Mobile,
    React,
    Remote,
    Not,
    Build


  }

  console.log(cardInfo);


} )