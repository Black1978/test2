//---------As a parent backgound img--------------------//
function ibg() {
    let ibg = document.querySelectorAll('.ibg')
    for (var i = 0; i < ibg.length; i++) {
        console.log(ibg[i])
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage =
                'url(' + ibg[i].querySelector('img').getAttribute('src') + ')'
        }
    }
}
ibg()
//-----------------------------//
//---Mobile menu-------------//
window.onload = function () {
    document.querySelector('.header-icon').onclick = function () {
        document.querySelector('.header-menu').classList.toggle('active')
        document.querySelector('.header-icon').classList.toggle('active')
        document.querySelector('body').classList.toggle('lock')
    }
    const menuLinks = document.querySelectorAll(
        'a.menu-top-button-1, a.menu-top-button-2, a.menu-link, a.sub-menu-link'
    )
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener('click', () => {
            document.querySelector('.header-menu').classList.toggle('active')
            document.querySelector('.header-icon').classList.toggle('active')
            document.querySelector('body').classList.toggle('lock')
        })
    })
}
//---------------Drop-down-menu---------------//
let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        )
    },
}
let body = document.querySelector('body')
if (isMobile.any()) {
    body.classList.add('touch')
    let arrow = document.querySelectorAll('.arrow-mobile')

    for (i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling.previousElementSibling
        let subMenu = arrow[i].nextElementSibling
        let thisArrow = arrow[i]

        thisLink.classList.add('parent')
        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open')
            thisArrow.classList.toggle('active')
        })
    }
} else {
    body.classList.add('mouse')
}
//------------------------------//
//----------------Accordion-----//
var boxes = Array.from(document.querySelectorAll('.accord-label'))
boxes.forEach((box) => {
    box.addEventListener('click', boxHandler)
})
function boxHandler(e) {
    e.preventDefault()
    var currentBox = e.target.closest('.accord-box')
    var currentContent = e.target.nextElementSibling
    currentBox.classList.toggle('active')
    if (currentBox.classList.contains('active')) {
        currentContent.style.maxHeight = currentContent.scrollHeight + 'px'
    } else {
        currentContent.style.maxHeight = 0
    }
}
//-----------------------------//
//------Smooth scroll-----------------------//
// const anchors = document.querySelectorAll('a[href*="#"]')
// for (let anchor of anchors) {
//     anchor.addEventListener('click', function (event) {
//         event.preventDefault()
//         const blockId = anchor.getAttribute('href')
//         document.querySelector('' + blockId).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start',
//         })
//     })
// }
//-----------------------------//
//------Slaider-----------------------//
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const slides = document.querySelectorAll('.slaider-item')
const bottom = document.querySelector('.slaider-bottom')

let currentSlideIndex = 0
const paginationCircles = []


function createPaginationCircle() {
    const div = document.createElement('div')
    div.className = 'pagination-circle'
    bottom.appendChild(div)
    paginationCircles.push(div)
}

function changeSlide(slideIndex) {
    hideSlide()
    removeActiveClass()
    currentSlideIndex = slideIndex
    addActiveClass()
    showSlide()
}

function addPagination() {
    slides.forEach(createPaginationCircle)
    paginationCircles[0].classList.add('pagination-active')
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener('click', () => changeSlide(index))
    })
}

function showSlide() {
    slides[currentSlideIndex].classList.add('block')
}
function hideSlide() {
    slides[currentSlideIndex].classList.remove('block')
}

function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add('pagination-active')
}
function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove('pagination-active')
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1
    if (newSlideIndex > slides.length - 1) {
        newSlideIndex = 0
    }
    changeSlide(newSlideIndex)
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1
    if (newSlideIndex < 0) {
        newSlideIndex = slides.length - 1
    }
    changeSlide(newSlideIndex)
}
if(slides.length > 0) {
    showSlide()
addPagination()

arrowRight.addEventListener('click', nextSlide)
arrowLeft.addEventListener('click', previousSlide)
    
}

//-----------------------------//
//-----------Animation------------------//
function offset(el) {
    const rect = el.getBoundingClientRect()
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            const scrollTop = window.pageYOffset || document.documentElement.scrollTop

            if (
                scrollTop > animItemOffset - animItemPoint &&
                scrollTop < animItemOffset + animItemHeight
            ) {
                animItem.classList.add('_active')
            } else {
                if (!animItem.classList.contains('_anim-rev-hide')) {
                    animItem.classList.remove('_active')
                }
            }
        }
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}

//-----------------------------//
