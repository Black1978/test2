const arrowLeft=document.querySelector('.arrow-left')
const arrowRight=document.querySelector('.arrow-right')
const slides=document.querySelectorAll('.slaider-item')
const bottom=document.querySelector('.slaider-bottom')
let currentSlideIndex=0
const paginationCircles=[]
function createPaginationCircle(){const div=document.createElement('div')
div.className='pagination-circle'
bottom.appendChild(div)
paginationCircles.push(div)}
function changeSlide(slideIndex){hideSlide()
removeActiveClass()
currentSlideIndex=slideIndex
addActiveClass()
showSlide()}
function addPagination(){slides.forEach(createPaginationCircle)
paginationCircles[0].classList.add('pagination-active')
paginationCircles.forEach((circle,index)=>{circle.addEventListener('click',()=>changeSlide(index))})}
function showSlide(){slides[currentSlideIndex].classList.add('block')}
function hideSlide(){slides[currentSlideIndex].classList.remove('block')}
function addActiveClass(){paginationCircles[currentSlideIndex].classList.add('pagination-active')}
function removeActiveClass(){paginationCircles[currentSlideIndex].classList.remove('pagination-active')}
function nextSlide(){let newSlideIndex=currentSlideIndex+1
if(newSlideIndex>slides.length-1){newSlideIndex=0}
changeSlide(newSlideIndex)}
function previousSlide(){let newSlideIndex=currentSlideIndex-1
if(newSlideIndex<0){newSlideIndex=slides.length-1}
changeSlide(newSlideIndex)}
if(slides.length>0){showSlide()
addPagination()
arrowRight.addEventListener('click',nextSlide)
arrowLeft.addEventListener('click',previousSlide)}
var boxes=Array.from(document.querySelectorAll('.accord-label'))
boxes.forEach((box)=>{box.addEventListener('click',boxHandler)})
function boxHandler(e){e.preventDefault()
var currentBox=e.target.closest('.accord-box')
var currentContent=e.target.nextElementSibling
currentBox.classList.toggle('active')
if(currentBox.classList.contains('active')){currentContent.style.maxHeight=currentContent.scrollHeight+'px'}else{currentContent.style.maxHeight=0}}