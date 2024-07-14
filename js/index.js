
let row = document.getElementById('row')
let searchPage = document.getElementById('searchPage')
let search = document.getElementById('offcanvasScrollingLabel1')
let category = document.getElementById('offcanvasScrollingLabel2')
let area = document.getElementById('offcanvasScrollingLabel3')
let ingredient = document.getElementById('offcanvasScrollingLabel4')
let contact = document.getElementById('offcanvasScrollingLabel5')
let contactPage = document.getElementById('contactPage')

let byName = document.getElementById('byName')
let byLetter =document.getElementById('byLetter')

let rowSearch = document.getElementById('rowSearch')
let rowArea =document.getElementById('rowArea')
let rowCat =document.getElementById('rowCat')
let rowIn = document.getElementById('rowIn')

let loading = document.querySelector('.loader')



// contact
contact.addEventListener('click',function(){
    contactPage.classList.replace('d-none','d-block')

    row.classList.add('d-none')
    searchPage.classList.add('d-none')
    rowArea.classList.add('d-none')
    rowCat.classList.add('d-none')
    rowIn.classList.add('d-none')

})

// functions ----------------------------------------------------------------------------------

// search by meal name
async function searchByName(x){
    try{
        let mealName = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`)
        let response = await mealName.json()
    
        displayData(response)
        loading.classList.replace('d-flex','d-none')

    }
   catch(error){
    console.log('errorr')
    loading.classList.replace('d-none','d-flex')
   }
}


byName.addEventListener('input', function(e){
    searchByName(e.target.value)
})
// display
let searchArr;
function displayData(d){
    searchArr = d.meals
    console.log("🚀 ~ displayData ~ array:", searchArr)

    let cartona = ""

    for(let i = 0 ; i < searchArr.length ; i++ ){

        cartona+= `  <div class="col-md-3 ">
            <div class="item card" onclick='infoSearch("${i}")'>
        <img src=${searchArr[i].strMealThumb} alt="" class="w-100 card-img" >
        <div class="caption d-flex align-items-center ps-2 ">
            <p class="fs-4 ">${searchArr[i].strMeal}</p>
        </div>
            </div>
        </div>`

    }

    rowSearch.innerHTML = cartona
}

// search by letter 

async function searchByLetter(x){
    try{
        let mealName = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?f=${x}`)
        let response = await mealName.json()
    
        displayData(response)
        loading.classList.replace('d-flex','d-none')

    }
   catch(error){
    console.log('errorr')
    loading.classList.replace('d-none','d-flex')
   }
}

byLetter.addEventListener('input', function(e){
    searchByLetter(e.target.value)
})

search.addEventListener('click', function(){
    searchPage.classList.replace('d-none','d-block')

    row.classList.add('d-none')
    contactPage.classList.add('d-none')
    rowArea.classList.add('d-none')
    rowCat.classList.add('d-none')
    rowIn.classList.add('d-none')

})

// category function----------------------------------------------------
async function categories(){
    try{
        let catName = await fetch (`https://www.themealdb.com/api/json/v1/1/categories.php`)
        let response = await catName.json()
      console.log(response)
        displayCat(response)
        loading.classList.replace('d-flex','d-none')

    }
   catch(error){
    console.log('errorr')
    loading.classList.replace('d-none','d-flex')
   }
}

let arrCat;
function displayCat(d){
     arrCat = d.categories
    let cartona = ""
    console.log(arrCat)

    for(let i = 0 ; i < arrCat.length ; i++ ){

        cartona+= `  <div class="col-md-3">
            <div class="item card" onclick='filterCat("${arrCat[i].strCategory}")'>
        <img src=${arrCat[i].strCategoryThumb} alt="" class="w-100 card-img">
        <div class="caption  ps-2  pt-2 ">
            <p class="fs-4 pb-1 fw-bold">${arrCat[i].strCategory}</p>
            <p class="mini px-1" >${arrCat[i].strCategoryDescription.slice(0,300)}</p>

        </div>
            </div>
        </div>`
    //    console.log(arrCat[i])
    }
  
    rowCat.innerHTML = cartona
}

category.addEventListener('click',function(){
    categories()
    rowCat.classList.remove('d-none')

    row.classList.add('d-none')
    contactPage.classList.add('d-none')
    searchPage.classList.add('d-none')
    rowArea.classList.add('d-none')
    rowIn.classList.add('d-none')

})

// area function-------------------------------------------------------------
async function areaShow(){
    try{
        let areaName = await fetch (`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        let response = await areaName.json()
      displayArea(response)
        loading.classList.replace('d-flex','d-none')

    }
   catch(error){
    console.log('errorr')
    loading.classList.replace('d-none','d-flex')
   }
}

function displayArea(d){
    let array = d.meals
    let cartona = ""

    for(let i = 0 ; i < array.length ; i++ ){

        cartona+= ` <div class="col-md-3">
            <div class="icon">
            <i class=" pb-2 fa-solid fa-hotel d-block"></i>
            <p >${array[i].strArea}</p>
            </div>
            </div>`
    }
    console.log(array)

   rowArea.innerHTML = cartona
}
area.addEventListener('click',function(){
    areaShow()
    rowArea.classList.remove('d-none')

    row.classList.add('d-none')
    contactPage.classList.add('d-none')
    searchPage.classList.add('d-none')
    rowCat.classList.add('d-none')
    rowIn.classList.add('d-none')

})

// ingredient function
async function ingredShow(){
    try{
        let ingredName = await fetch (`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        let response = await ingredName.json()
      displayIngred(response)
        loading.classList.replace('d-flex','d-none')

    }
   catch(error){
    console.log('errorr')
    loading.classList.replace('d-none','d-flex')
   }
}
function displayIngred(d){
    let array = d.meals
    let cartona = ""
console.log(array)
    for(let i = 0 ; i < 21 ; i++ ){

        cartona+= ` <div class="col-md-3">
            <div class="icontwo">
            <i class=" pb-3 ps-2 fa-solid fa-drumstick-bite d-block"></i>
            <p class="first">${array[i].strIngredient}</p>
            <p class="special">${array[i].strDescription.slice(0,109)}</p>
            </div>
            </div>`
    }
    console.log(array)

   rowIn.innerHTML = cartona
}

ingredient.addEventListener('click',function(){
    ingredShow()
    rowIn.classList.remove('d-none')

    row.classList.add('d-none')
    contactPage.classList.add('d-none')
    searchPage.classList.add('d-none')
    rowCat.classList.add('d-none')
    rowArea.classList.add('d-none')
})

// random selection

async function landingPage(){
    try{
        let random = await fetch ('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        let response = await random.json()
        displayRandom(response)
        loading.classList.replace('d-flex','d-none')

    }
   catch(error){
    console.log('errorr')
    loading.classList.replace('d-none','d-flex')
   }
}

let array ;
function displayRandom(d) {
    array = d.meals;
    let cartona = "";

    for (let i = 0; i < array.length; i++) {
        let current = array[i];

            cartona += `
            <div class="col-md-3">
                <div class="item card" onclick='info("${i}")'>
                    <img src="${current.strMealThumb}" alt="" class="w-100 card-img">
                    <div class="caption d-flex align-items-center ps-2">
                        <p class="fs-4 pb-1 fw-bold">${current.strMeal}</p>
                    </div>
                </div>
            </div>`;
    }

    console.log(array);

    row.innerHTML = cartona;
}


landingPage()


function info (index){

    try {
        console.log(array);

        row.innerHTML = ""
        
        document.getElementById('inside').innerHTML = `
        
        <div class="col-md-6 ">
               <div class="itemInside">
               <img src=${array[index].strMealThumb} alt="">
               <div class="cap text-white fs-4 pt-3">${array[index].strMeal}</div>
               </div>
               </div>
        
               <div class="col-md-6 text-white">
                   <h2 >Instructions</h2>
                   <p class="fs-6">${array[index].strInstructions}</p>
                   <h4 class="pb-2 pt-4">Area :  <span class="text-white">${array[index].strArea}</span> </h4>
                   <h4 class="pb-2">Category :<span class="text-white"> ${array[index].strCategory}</span> </h4> 
                   <h4 class="pb-2 pb-3">Recipes :</h4>
                   
                  <p class="bg-danger me-2 px-1">${array[index].strMeasure1} ${array[index].strIngredient1} </p>
                  <p class="bg-danger me-2 px-1">${array[index].strMeasure2} ${array[index].strIngredient2} </p>
                  <p class="bg-danger me-2 px-1">${array[index].strMeasure1} ${array[index].strIngredient1} </p>
                  <p class="bg-danger  me-2 px-1">${array[index].strMeasure4} ${array[index].strIngredient4} </p>
                  <p class="bg-danger  me-2 px-1">${array[index].strMeasure5} ${array[index].strIngredient5} </p>
                  <p class="bg-danger me-2 px-1">${array[index].strMeasure6} ${array[index].strIngredient6} </p>
                  <p class="bg-danger me-2 px-1">${array[index].strMeasure7} ${array[index].strIngredient7} </p>
                  <p class="bg-danger me-2 px-1">${array[index].strMeasure8} ${array[index].strIngredient8} </p>
                  <p class="bg-danger me-2 px-1">${array[index].strMeasure9} ${array[index].strIngredient9} </p>
                  <p class="bg-danger me-2 px-1">${array[index].strMeasure10} ${array[index].strIngredient10} </p>
                  <p class="bg-danger me-2 px-1">${array[index].strMeasure11} ${array[index].strIngredient11} </p>
                  <p class="bg-danger me-2 px-1">${array[index].strMeasure12} ${array[index].strIngredient12} </p>
                  <p class="bg-danger me-2 px-1">${array[index].strMeasure13} ${array[index].strIngredient13} </p>
                  <p class="bg-danger me-2 px-1">${array[index].strMeasure14} ${array[index].strIngredient14} </p>
                  <p class="bg-danger me-2 px-1">${array[index].strMeasure15} ${array[index].strIngredient15} </p>

                   <h4 class="pt-3">Tags :</h4><span class="text-white fs-5"> ${array[index].strTags} </span>  
        
           </div> `

    } catch (error) {
        console.error("Error parsing JSON:", error);
    }


}


function infoSearch (index){

    try {
        console.log("infoSearch: ",searchArr);

        rowSearch.innerHTML = ""
        
        document.getElementById('rowSearch').innerHTML = `
        
        <div class="col-md-6 ">
               <div class="itemInside">
               <img src=${searchArr[index].strMealThumb} alt="">
               <div class="cap text-white fs-4 pt-3">${searchArr[index].strMeal}</div>
               </div>
               </div>
        
               <div class="col-md-6 text-white">
                   <h2 >Instructions</h2>
                   <p class="fs-6">${searchArr[index].strInstructions}</p>
                   <h4 class="pb-2 pt-4">Area :  <span class="text-white">${searchArr[index].strArea}</span> </h4>
                   <h4 class="pb-2">Category :<span class="text-white"> ${searchArr[index].strCategory}</span> </h4> 
                   <h4 class="pb-2 pb-3">Recipes :</h4>
                   
                  <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure1} ${searchArr[index].strIngredient1} </p>
                  <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure2} ${searchArr[index].strIngredient2} </p>
                  <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure1} ${searchArr[index].strIngredient1} </p>
                  <p class="bg-danger  me-2 px-1">${searchArr[index].strMeasure4} ${searchArr[index].strIngredient4} </p>
                  <p class="bg-danger  me-2 px-1">${searchArr[index].strMeasure5} ${searchArr[index].strIngredient5} </p>
                  <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure6} ${searchArr[index].strIngredient6} </p>
                  <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure7} ${searchArr[index].strIngredient7} </p>
                  <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure8} ${searchArr[index].strIngredient8} </p>
                  <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure9} ${searchArr[index].strIngredient9} </p>
                  <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure10} ${searchArr[index].strIngredient10} </p>
                  <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure11} ${searchArr[index].strIngredient11} </p>
                  <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure12} ${searchArr[index].strIngredient12} </p>
                  <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure13} ${searchArr[index].strIngredient13} </p>
                  <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure14} ${searchArr[index].strIngredient14} </p>
                  <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure15} ${searchArr[index].strIngredient15} </p>

                   <h4 class="pt-3">Tags :</h4><span class="text-white fs-5"> ${searchArr[index].strTags} </span>  
        
           </div> `

    } catch (error) {
        console.error("Error parsing JSON:", error);
    }


}


async function filterCat(m){
    try{
        let random = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${m}`)
        let response = await random.json()
        console.log(response)
        loading.classList.replace('d-flex','d-none')
        console.log(m)

        infoCat(response)
    }
   catch(error){
    console.log('errorr')
    loading.classList.replace('d-none','d-flex')
   }
}

let categor;

function infoCat (m){
console.log(m.meals)
 categor = m.meals
let cartona = ""
  
       for(let i = 0 ; i<categor.length ; i++){
        
        
        cartona +=
`  <div class="col-md-3">
            <div class="item card" onclick=" byId(${categor[i].idMeal})">
        <img src=${categor[i].strMealThumb}  alt="" class="w-100 card-img">
        <div class="caption  ps-2  pt-2 ">
            <p class="fs-4 pb-1 fw-bold">${categor[i].strMeal}</p>

        </div>
        </div>
        </div>`
       
    }
        rowCat.innerHTML = cartona

       
}

// function categoryInfo (index){

//     try {

//         rowCat.innerHTML = ""
        
//         rowCat.innerHTML = `
        
//         <div class="col-md-6 ">
//                <div class="itemInside">
//                <img src=${categor[index].strMealThumb} alt="">
//                <div class="cap text-white fs-4 pt-3">${categor[index].strMeal}</div>
//                </div>
//                </div>
        
              
//               `

//     } catch (error) {
//         console.error("Error parsing JSON:", error);
//     }


// }

// {/* <div class="col-md-6 text-white">
// <h2 >Instructions</h2>
// <p class="fs-6">${categor[index].strInstructions}</p>
// <h4 class="pb-2 pt-4">Area :  <span class="text-white">${categor[index].strArea}</span> </h4>
// <h4 class="pb-2">Category :<span class="text-white"> ${categor[index].strCategory}</span> </h4> 
// <h4 class="pb-2 pb-3">Recipes :</h4>

// <p class="bg-danger me-2 px-1">${categor[index].strMeasure1} ${categor[index].strIngredient1} </p>
// <p class="bg-danger me-2 px-1">${categor[index].strMeasure2} ${categor[index].strIngredient2} </p>
// <p class="bg-danger me-2 px-1">${categor[index].strMeasure1} ${categor[index].strIngredient1} </p>
// <p class="bg-danger  me-2 px-1">${categor[index].strMeasure4} ${categor[index].strIngredient4} </p>
// <p class="bg-danger  me-2 px-1">${categor[index].strMeasure5} ${categor[index].strIngredient5} </p>
// <p class="bg-danger me-2 px-1">${categor[index].strMeasure6} ${categor[index].strIngredient6} </p>
// <p class="bg-danger me-2 px-1">${categor[index].strMeasure7} ${categor[index].strIngredient7} </p>
// <p class="bg-danger me-2 px-1">${categor[index].strMeasure8} ${categor[index].strIngredient8} </p>
// <p class="bg-danger me-2 px-1">${categor[index].strMeasure9} ${categor[index].strIngredient9} </p>
// <p class="bg-danger me-2 px-1">${categor[index].strMeasure10} ${categor[index].strIngredient10} </p>
// <p class="bg-danger me-2 px-1">${categor[index].strMeasure11} ${categor[index].strIngredient11} </p>
// <p class="bg-danger me-2 px-1">${categor[index].strMeasure12} ${categor[index].strIngredient12} </p>
// <p class="bg-danger me-2 px-1">${categor[index].strMeasure13} ${categor[index].strIngredient13} </p>
// <p class="bg-danger me-2 px-1">${categor[index].strMeasure14} ${categor[index].strIngredient14} </p>
// <p class="bg-danger me-2 px-1">${categor[index].strMeasure15} ${categor[index].strIngredient15} </p>

// <h4 class="pt-3">Tags :</h4><span class="text-white fs-5"> ${categor[index].strTags} </span>  

// </div>  */}

// function categoryInfo (index){

//     try {
//         console.log(categor);

//         rowCat.innerHTML = ""
        
//         rowCat.innerHTML = `
        
//         <div class="col-md-6 ">
//                <div class="itemInside">
//                <img src=${categor[index].strMealThumb} alt="">
//                <div class="cap text-white fs-4 pt-3">${categor[index].strMeal}</div>
//                </div>
//                </div>
        
//                <div class="col-md-6 text-white">
//                    <h2 >Instructions</h2>
//                    <p class="fs-6">${categor[index].strInstructions}</p>
//                    <h4 class="pb-2 pt-4">Area :  <span class="text-white">${array[index].strArea}</span> </h4>
//                    <h4 class="pb-2">Category :<span class="text-white"> ${array[index].strCategory}</span> </h4> 
//                    <h4 class="pb-2 pb-3">Recipes :</h4>
                   
//                   <p class="bg-danger me-2 px-1">${array[index].strMeasure1} ${array[index].strIngredient1} </p>
//                   <p class="bg-danger me-2 px-1">${array[index].strMeasure2} ${array[index].strIngredient2} </p>
//                   <p class="bg-danger me-2 px-1">${array[index].strMeasure1} ${array[index].strIngredient1} </p>
//                   <p class="bg-danger  me-2 px-1">${array[index].strMeasure4} ${array[index].strIngredient4} </p>
//                   <p class="bg-danger  me-2 px-1">${array[index].strMeasure5} ${array[index].strIngredient5} </p>
//                   <p class="bg-danger me-2 px-1">${array[index].strMeasure6} ${array[index].strIngredient6} </p>
//                   <p class="bg-danger me-2 px-1">${array[index].strMeasure7} ${array[index].strIngredient7} </p>
//                   <p class="bg-danger me-2 px-1">${array[index].strMeasure8} ${array[index].strIngredient8} </p>
//                   <p class="bg-danger me-2 px-1">${array[index].strMeasure9} ${array[index].strIngredient9} </p>
//                   <p class="bg-danger me-2 px-1">${array[index].strMeasure10} ${array[index].strIngredient10} </p>
//                   <p class="bg-danger me-2 px-1">${array[index].strMeasure11} ${array[index].strIngredient11} </p>
//                   <p class="bg-danger me-2 px-1">${array[index].strMeasure12} ${array[index].strIngredient12} </p>
//                   <p class="bg-danger me-2 px-1">${array[index].strMeasure13} ${array[index].strIngredient13} </p>
//                   <p class="bg-danger me-2 px-1">${array[index].strMeasure14} ${array[index].strIngredient14} </p>
//                   <p class="bg-danger me-2 px-1">${array[index].strMeasure15} ${array[index].strIngredient15} </p>

//                    <h4 class="pt-3">Tags :</h4><span class="text-white fs-5"> ${array[index].strTags} </span>  
        
//            </div> `

//     } catch (error) {
//         console.error("Error parsing JSON:", error);
//     }


// }

// function categoryInfo (index){

//     try {
//         console.log("infoSearch: ",searchArr);

//         rowCat.innerHTML = ""
        
//         rowCat.innerHTML = `
        
//         <div class="col-md-6 ">
//                <div class="itemInside">
//                <img src=${searchArr[index].strMealThumb} alt="">
//                <div class="cap text-white fs-4 pt-3">${searchArr[index].strMeal}</div>
//                </div>
//                </div>
        
//                <div class="col-md-6 text-white">
//                    <h2 >Instructions</h2>
//                    <p class="fs-6">${searchArr[index].strInstructions}</p>
//                    <h4 class="pb-2 pt-4">Area :  <span class="text-white">${searchArr[index].strArea}</span> </h4>
//                    <h4 class="pb-2">Category :<span class="text-white"> ${searchArr[index].strCategory}</span> </h4> 
//                    <h4 class="pb-2 pb-3">Recipes :</h4>
                   
//                   <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure1} ${searchArr[index].strIngredient1} </p>
//                   <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure2} ${searchArr[index].strIngredient2} </p>
//                   <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure1} ${searchArr[index].strIngredient1} </p>
//                   <p class="bg-danger  me-2 px-1">${searchArr[index].strMeasure4} ${searchArr[index].strIngredient4} </p>
//                   <p class="bg-danger  me-2 px-1">${searchArr[index].strMeasure5} ${searchArr[index].strIngredient5} </p>
//                   <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure6} ${searchArr[index].strIngredient6} </p>
//                   <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure7} ${searchArr[index].strIngredient7} </p>
//                   <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure8} ${searchArr[index].strIngredient8} </p>
//                   <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure9} ${searchArr[index].strIngredient9} </p>
//                   <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure10} ${searchArr[index].strIngredient10} </p>
//                   <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure11} ${searchArr[index].strIngredient11} </p>
//                   <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure12} ${searchArr[index].strIngredient12} </p>
//                   <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure13} ${searchArr[index].strIngredient13} </p>
//                   <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure14} ${searchArr[index].strIngredient14} </p>
//                   <p class="bg-danger me-2 px-1">${searchArr[index].strMeasure15} ${searchArr[index].strIngredient15} </p>

//                    <h4 class="pt-3">Tags :</h4><span class="text-white fs-5"> ${searchArr[index].strTags} </span>  
        
//            </div> `

//     } catch (error) {
//         console.error("Error parsing JSON:", error);
//     }


// }


async function byId(d){
    try{
        console.log("🚀 ~ byId ~ d:", d)
        let random = await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${d}`)
        let response = await random.json()
        console.log(response)
        loading.classList.replace('d-flex','d-none')
        displayId(response)
    }
   catch(error){
    console.log('errorr')
    loading.classList.replace('d-none','d-flex')
   }
}

let arrId;
function displayId(d){
     arrId = d.meals
    let cartona = ""
    console.log(arrId)

        let current = arrId[0];
        console.log("🚀 ~ displayId ~ current:", current)

        cartona +=
        `  <div class="col-md-3">
        <div class="item card" onclick="test()">
        <img src=${current.strMealThumb}  alt="" class="w-100 card-img">
        <div class="caption  ps-2  pt-2 ">
        <p class="fs-4 pb-1 fw-bold">${current.strMeal}</p>
        
        </div>
        </div>
        </div>`
    
    rowCat.innerHTML = ""
    rowCat.innerHTML = cartona
}

 function test (){
console.log("🚀 ~ test ~ test:")

  

        rowCat.innerHTML=""
        rowCat.innerHTML=
        
       `
        <div class="col-md-6 ">
               <div class="itemInside">
               <img src=${arrId[0].strMealThumb} alt="">
               <div class="cap text-white fs-4 pt-3">${arrId[0].strMeal}</div>
               </div>
               </div>
        
               <div class="col-md-6 text-white">
                   <h2 >Instructions</h2>
                   <p class="fs-6">${arrId[0].strInstructions}</p>
                   <h4 class="pb-2 pt-4">Area :  <span class="text-white">${arrId[0].strArea}</span> </h4>
                   <h4 class="pb-2">Category :<span class="text-white"> ${arrId[0].strCategory}</span> </h4> 
                   <h4 class="pb-2 pb-3">Recipes :</h4>
                   
                  <p class="bg-danger me-2 px-1">${arrId[0].strMeasure1} ${arrId[0].strIngredient1} </p>
                  <p class="bg-danger me-2 px-1">${arrId[0].strMeasure2} ${arrId[0].strIngredient2} </p>
                  <p class="bg-danger me-2 px-1">${arrId[0].strMeasure1} ${arrId[0].strIngredient1} </p>
                  <p class="bg-danger  me-2 px-1">${arrId[0].strMeasure4} ${arrId[0].strIngredient4} </p>
                  <p class="bg-danger  me-2 px-1">${arrId[0].strMeasure5} ${arrId[0].strIngredient5} </p>
                  <p class="bg-danger me-2 px-1">${arrId[0].strMeasure6} ${arrId[0].strIngredient6} </p>
                  <p class="bg-danger me-2 px-1">${arrId[0].strMeasure7} ${arrId[0].strIngredient7} </p>
                  <p class="bg-danger me-2 px-1">${arrId[0].strMeasure8} ${arrId[0].strIngredient8} </p>
                  <p class="bg-danger me-2 px-1">${arrId[0].strMeasure9} ${arrId[0].strIngredient9} </p>
                  <p class="bg-danger me-2 px-1">${arrId[0].strMeasure10} ${arrId[0].strIngredient10} </p>
                  <p class="bg-danger me-2 px-1">${arrId[0].strMeasure11} ${arrId[0].strIngredient11} </p>
                  <p class="bg-danger me-2 px-1">${arrId[0].strMeasure12} ${arrId[0].strIngredient12} </p>
                  <p class="bg-danger me-2 px-1">${arrId[0].strMeasure13} ${arrId[0].strIngredient13} </p>
                  <p class="bg-danger me-2 px-1">${arrId[0].strMeasure14} ${arrId[0].strIngredient14} </p>
                  <p class="bg-danger me-2 px-1">${arrId[0].strMeasure15} ${arrId[0].strIngredient15} </p>

                   <h4 class="pt-3">Tags :</h4><span class="text-white fs-5"> ${arrId[0].strTags} </span>  
        
           </div> `

  

}