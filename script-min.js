function ibg(){let ibg=document.querySelectorAll('.ibg')
    for(var i=0;i<ibg.length;i++){if(ibg[i].querySelector('img')){ibg[i].style.backgroundImage='url('+ibg[i].querySelector('img').getAttribute('src')+')'}}}
    ibg()
    window.onload=function(){document.querySelector('.header-icon').onclick=function(){document.querySelector('.header-menu').classList.toggle('active')
    document.querySelector('.header-icon').classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')}
    const menuLinks=document.querySelectorAll('a.menu-top-button-1, a.menu-top-button-2, a.menu-link, a.sub-menu-link')
    menuLinks.forEach((menuLink)=>{menuLink.addEventListener('click',()=>{document.querySelector('.header-menu').classList.toggle('active')
    document.querySelector('.header-icon').classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')})})}
    let isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows())},}
    let body=document.querySelector('body')
    if(isMobile.any()){body.classList.add('touch')
    let arrow=document.querySelectorAll('.arrow-mobile')
    for(i=0;i<arrow.length;i++){let thisLink=arrow[i].previousElementSibling.previousElementSibling
    let subMenu=arrow[i].nextElementSibling
    let thisArrow=arrow[i]
    thisLink.classList.add('parent')
    arrow[i].addEventListener('click',function(){subMenu.classList.toggle('open')
    thisArrow.classList.toggle('active')})}}else{body.classList.add('mouse')}
    function offset(el){const rect=el.getBoundingClientRect()
    scrollLeft=window.pageXOffset||document.documentElement.scrollLeft
    scrollTop=window.pageYOffset||document.documentElement.scrollTop
    return{top:rect.top+scrollTop,left:rect.left+scrollLeft}}
    const animItems=document.querySelectorAll('._anim-items')
    if(animItems.length>0){window.addEventListener('scroll',animOnScroll)
    function animOnScroll(){for(let index=0;index<animItems.length;index++){const animItem=animItems[index]
    const animItemHeight=animItem.offsetHeight
    const animItemOffset=offset(animItem).top
    const animStart=4
    let animItemPoint=window.innerHeight-animItemHeight/animStart
    if(animItemHeight>window.innerHeight){animItemPoint=window.innerHeight-window.innerHeight/animStart}
    const scrollTop=window.pageYOffset||document.documentElement.scrollTop
    if(scrollTop>animItemOffset-animItemPoint&&scrollTop<animItemOffset+animItemHeight){animItem.classList.add('_active')}else{if(!animItem.classList.contains('_anim-rev-hide')){animItem.classList.remove('_active')}}}}
    setTimeout(()=>{animOnScroll()},300)}