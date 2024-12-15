

// content section

const loadContentData=()=>{
    fetch(`https://f24-1-mid-1.vercel.app/content`)
    .then(res=>res.json())
    .then(data=>showContentData(data))
}
const showContentData=(values)=>{
    const mainDiv = document.getElementById('container')
    for(const value of values){
        // console.log(value)
        const {category,title,author,description,image,isActive,comment_count,view_count,posted_time} = value
        const div = document.createElement('div')
        div.innerHTML=`
        <div class="bg-base-100 rounded-2xl flex gap-8 p-3">
        <div class="h-[80px] w-[120px] rounded-full">
         ${isActive === true ?
        '<div class="h-2 w-2 bg-green-600 rounded-full"></div>' :
        '<div class="h-2 w-2 bg-red-600 rounded-full"></div>'}
        <img  class="h-[40px] w-[60px] rounded bg-cover" src="./Images/image.jpg" alt="" />
        </div>
        <div class="flex flex-col gap-5">
        <div class="flex gap-5">
        <h1>${category}</h1>
        <h1>${author.name}</h1>
        </div>
        <h1>${title}</h1>
        <h1>${description}</h1>
        <div class="flex gap-3 items-center justify-between">
        <h1>${comment_count}</h1>
        <h1>${view_count}</h1>
        <h1>${posted_time}</h1>
        <button class="h-[45px] w-[70px] bg-blue-600 rounded-md text-white font-semibold" onclick='add(${JSON.stringify(value)})'>Add</button>
        </div>
        </div>
        </div>
        `
        mainDiv.appendChild(div)
    }
}
loadContentData()

const add=(clicked)=>{
  console.log(clicked)
    const {title,view_count} = clicked
    const contain = document.getElementById('contain')
    const counted = document.getElementById('counted')
    const div = document.createElement('div')
    div.innerHTML=`
   <div class="flex justify-around h-10 items-center bg-white rounded-lg mb-5 mt-10">
   <h1>${title}</h1>
   <h1>${view_count}</h1>
   </div>
    `
    div.setAttribute('class','clicked')
    contain.appendChild(div)
    counted.innerText = contain.childElementCount
}

// content section end


// blog section 

const blogLoadData=()=>{
  fetch('https://f24-1-mid-1.vercel.app/blogs')
  .then(res=>res.json())
  .then(data=>blogShowData(data))
}
const blogShowData=(values)=>{
  const blog = document.getElementById('blog')
  for(const value of values){
    // console.log(value)
    const {cover_image,profile_image,title,description,author} = value
    const div = document.createElement('div')
    div.innerHTML =`
    <div class="bg-cyan-400 rounded-md">
    <img class="h-72 w-screen" src="${cover_image}" alt=""/>
    <div class="flex flex-col gap-5 p-3">
    <h1>${author.posted_date ||'No Posted Date'}</h1>
    <h1>${title}</h1>
    <h1>${description}</h1>
    <div class="flex gap-5">
    <img class="h-14 w-20 rounded-full" src="${profile_image}" alt="" />
    <div>
    <h1>${author.name}</h1>
    <h1>${author.designation ||'UnKnown'}</h1>
    </div>
    </div>
    </div>
    </div>
    
    
    `
    blog.appendChild(div)
  }
}

blogLoadData()

// blog section end