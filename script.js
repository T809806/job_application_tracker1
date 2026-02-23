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
const filterSection = document.getElementById('filtered_section');


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

    console.log(event.target.classList.contains('interview_btn'));

    if(event.target.classList.contains('interview_btn')) {

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

  const interviewSelect = interviewList.find(item=> item.Mobile == cardInfo.Mobile)

  if(!interviewSelect) {

    interviewList.push(cardInfo)
  }

  renderInterview()

}

 
} )

function renderInterview() {

    filterSection.innerHTML = ''

    for(let interview of interviewList) { 
        console.log(interview);

        let div = document.createElement('div');

        div.className = 'flex flex-col md:flex-row md:justify-between gap-6 bg-white border border-black/15 rounded-2xl p-6 mt-5'
        div.innerHTML = `  <div class="space-y-6  "> 

        <h4 class=" Mobile text-[#002C5C] font-semibold text-xl"> Mobile First Corp </h4>
        <p class=" React text-[#323B49] text-[18px]"> React Native Developer </p>
        <p class=" Remote text-[#323B49]"> Remote • Full-time • $130,000 - $175,000 </p>
        <p class=" Not bg-[#F1F2F4] text-[#002C5C] font-semibold inline-block px-3 py-1"> NOT APPLIED  </p>
        <p class=" Build text-[#323B49]"> Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide. </p>

    <div class="space-x-1"> 

    <button class="text-[#10B981] text-xl font-bold rounded border border-[#10B981] px-8 py-2 mt-5"> Interview </button>
    <button class="text-[#EF4444] text-xl font-bold rounded border border-[#EF4444] px-8 py-2 mt-5"> Rejected </button>

    </div>

    </div>
                           
<div > 

    <button class=" w-12 h-12 border border-black/15 rounded-full " > <span> <i class="fa-regular fa-trash-can"></i> </span></button>
                    
</div>

`
    }
}    