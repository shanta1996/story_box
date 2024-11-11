const arr=[
    {prPic:'https://images.unsplash.com/photo-1719079399612-f0126ca36562?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',story:'https://images.pexels.com/photos/2829373/pexels-photo-2829373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},

    {prPic:'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',story:'https://images.pexels.com/photos/977380/pexels-photo-977380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {prPic:'https://images.pexels.com/photos/1187822/pexels-photo-1187822.jpeg',story:'https://images.pexels.com/photos/2829373/pexels-photo-2829373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {prPic:'https://images.pexels.com/photos/28904025/pexels-photo-28904025/free-photo-of-young-woman-relaxing-in-sunlight-outdoors.jpeg',story:'https://images.pexels.com/photos/10601071/pexels-photo-10601071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {prPic:'https://images.pexels.com/photos/28904025/pexels-photo-28904025/free-photo-of-young-woman-relaxing-in-sunlight-outdoors.jpeg',story:'https://images.pexels.com/photos/10601071/pexels-photo-10601071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {prPic:'https://images.pexels.com/photos/28904025/pexels-photo-28904025/free-photo-of-young-woman-relaxing-in-sunlight-outdoors.jpeg',story:'https://images.pexels.com/photos/10601071/pexels-photo-10601071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },

]
const storyBox=document.querySelector('#storyBox')
let val=''
arr.forEach((element,index)=>{
    val+=`<div id="story" class="inline-block h-[100px] w-[100px]  overflow-hidden rounded-[50%] border-[5px] border-double border-red-500 mr-[10px]">
             
              <img class="h-[100%] w-[100%]" src="${element.prPic}" id="${index}" alt=""> 
            </div>`
})
document.querySelector('#storyBox').innerHTML=val
storyBox.addEventListener('click',(element)=>{
    document.querySelector("#fullScreen").style.display='block'
    document.querySelector('#fullScreen').style.backgroundImage=`url(${arr[element.target.id].story})`
    // console.log(arr[element.target.id].story)
//   arr[element.target.id].story
setTimeout(() => {
    document.querySelector("#fullScreen").style.display='none'
}, 2000);
})
