let interviewList =[];
let rejectedList =[]
let currentStatus ='all'


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
     currentStatus = id
     //console.log(selected);

     selected.classList.remove('bg-white','text-[#64748B]')
     selected.classList.add('bg-[#3B82F6]','text-white')

     if(id == 'interview_filter_btn') {

        all_cards_section.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderInterview()

  } else if(id =='all_btn') {

    all_cards_section.classList.remove('hidden');
     filterSection.classList.add('hidden')


  } else if (id =='rejected_filter_btn') {
      all_cards_section.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderReject()

  }

}


mainContainer.addEventListener('click', function(event) {

    if(event.target.classList.contains('interview_btn')) {

 const parentNode = event.target.parentNode.parentNode;
 const Mobile = parentNode.querySelector('.Mobile').innerText
 const React = parentNode.querySelector('.React').innerText
 const Remote = parentNode.querySelector('.Remote').innerText
 const Not = parentNode.querySelector('.Not').innerText
 const Build = parentNode.querySelector('.Build').innerText

 parentNode.querySelector('.Not').innerText = 'Applied'

  const cardInfo = {

    Mobile,
    React,
    Remote,
    Not:'Applied',
    Build
}

  const interviewSelect = interviewList.find(item=> item.Mobile == cardInfo.Mobile)
  

  if(!interviewSelect) {

    interviewList.push(cardInfo)
  }

     rejectedList = rejectedList.filter(item=> item.Mobile != cardInfo.Mobile)

      if (currentStatus =='rejected_filter_btn') {

       renderReject();

  }


calculateCounting ()
  renderInterview()

}

  else if(event.target.classList.contains('rejected_btn')) {

 const parentNode = event.target.parentNode.parentNode;
 const Mobile = parentNode.querySelector('.Mobile').innerText
 const React = parentNode.querySelector('.React').innerText
 const Remote = parentNode.querySelector('.Remote').innerText
 const Not = parentNode.querySelector('.Not').innerText
 const Build = parentNode.querySelector('.Build').innerText

 parentNode.querySelector('.Not').innerText = 'Rejected'

  const cardInfo = {

    Mobile,
    React,
    Remote,
    Not:'Rejected',
    Build
}

  const rejectSelect = rejectedList.find(item=> item.Mobile == cardInfo.Mobile)
  

  if(!rejectSelect) {

    rejectedList.push(cardInfo)
  }

  interviewList = interviewList.filter(item=> item.Mobile != cardInfo.Mobile)

  if (currentStatus =='interview_filter_btn') {

       renderInterview();

  }

calculateCounting ()
  
}

} )

function renderInterview() {

    filterSection.innerHTML = ''

     if(interviewList.length === 0) {
        showEmptyMessage('Interview')
        return
    }

    for(let interview of interviewList) {
        
    }

}

    for(let interview of interviewList) { 
        console.log(interview);

        let div = document.createElement('div');

        div.className = 'flex flex-col md:flex-row md:justify-between gap-6 bg-white border border-black/15 rounded-2xl p-6 mt-5'
        div.innerHTML = `  <div class="space-y-6  "> 

        <h4 class=" Mobile text-[#002C5C] font-semibold text-xl"> ${interview.Mobile} </h4>
        <p class=" React text-[#323B49] text-[18px]"> ${interview.React} </p>
        <p class=" Remote text-[#323B49]"> Remote • Full-time • $130,000 - $175,000"> ${interview.Remote} </p>
        <p class=" Not bg-[#F1F2F4] text-[#002C5C] font-semibold inline-block px-3 py-1">  Applied  </p>
        <p class=" Build text-[#323B49]"> ${interview.Build} </p>

    <div class="space-x-1"> 

    <button class="interview_btn text-[#10B981] text-xl font-bold rounded border border-[#10B981] px-8 py-2 mt-5"> Interview </button>
    <button class="rejected_btn text-[#EF4444] text-xl font-bold rounded border border-[#EF4444] px-8 py-2 mt-5"> Rejected </button>

    </div>

    </div>
                           
<div > 

    <button class=" w-12 h-12 border border-black/15 rounded-full " > <span> <i class="fa-regular fa-trash-can"></i> </span></button>
                    
</div>

`

filterSection.appendChild(div)


 }
    

function renderReject() {

    filterSection.innerHTML = ''


 if(rejectedList.length === 0) {
        showEmptyMessage('Rejected')
        return
    }

    for(let reject of rejectedList) {
        
    }

}


 for(let reject of rejectedList) { 
        console.log(reject);

        let div = document.createElement('div');

        div.className = 'flex flex-col md:flex-row md:justify-between gap-6 bg-white border border-black/15 rounded-2xl p-6 mt-5'
        div.innerHTML = `  <div class="space-y-6  "> 

        <h4 class=" Mobile text-[#002C5C] font-semibold text-xl"> ${reject.Mobile} </h4>
        <p class=" React text-[#323B49] text-[18px]"> ${reject.React} </p>
        <p class=" Remote text-[#323B49]"> Remote • Full-time • $130,000 - $175,000"> ${reject.Remote} </p>
        <p class=" Not bg-[#F1F2F4] text-[#002C5C] font-semibold inline-block px-3 py-1"> Rejected  </p>
        <p class=" Build text-[#323B49]"> ${reject.Build} </p>

    <div class="space-x-1"> 

    <button class="text-[#10B981] text-xl font-bold rounded border border-[#10B981] px-8 py-2 mt-5"> Interview </button>
    <button class="text-[#EF4444] text-xl font-bold rounded border border-[#EF4444] px-8 py-2 mt-5"> Rejected </button>

    </div>

    </div>
                           
<div > 

    <button class=" w-12 h-12 border border-black/15 rounded-full " > <span> <i class="fa-regular fa-trash-can"></i> </span></button>
                    
</div>

`

filterSection.appendChild(div)

 }


function showEmptyMessage(type) {

    filterSection.innerHTML = `
        <div class="flex flex-col items-center justify-center mt-20 text-center">

             <img src="jobs.png" class="w-24 h-24 mb-6" alt="No Jobs Icon">

            <h2 class="text-2xl font-semibold text-[#002C5C]">
                No Jobs Available
            </h2>

            <p class="text-[#64748B] mt-2">
                Check back soon for new job opportunities
            </p>

        </div>
    `
}