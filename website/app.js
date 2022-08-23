// to add date
   let d = new Date();
   let newDate = d.getMonth()+'.'+d.getDate()+'.'+d.getFullYear();
   console.log(d)
//API credentials from OpenWeatherMap.com
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = ',us&appid=3cb937893a4d8a713e99c4b3e5453b9c&units=imperial';

//adding event listener to the generate button
document.getElementById('generate').addEventListener('click', performAction)

/* Function called by event listener */
function performAction(e){
    const zipCode =document.getElementById('zip').value
    const feelings =document.getElementById('feelings').value
    getWeatherData(baseURL,zipCode,apiKey)

    // New Syntax!
  .then(function(data){
    // Add data
    console.log(data);
    postData('/addWeather', {temp:data.main.temp, content: feelings, date:d} );
  })
  
  .then(
    updateUI()
  )
  
}


/*Function to get the data*/ 
const getWeatherData = async(baseURL,zipCode,apiKey) => {
    const res = await fetch (baseURL+zipCode+apiKey)
    try{
        const data = await res.json
        console.log(data)
    }catch(error){
        console.log('error',error);
    }
}

/*Function to post the data*/
const postWeatherData = async ( url = '', data = {})=>{
    console.log(data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
    try {
        const newData = await response.json();
         console.log(newData);
        return newData;
      }catch(error) {
      console.log('error', error);
      // appropriately handle the error
      }
  }

  
/* Function to GET Project Data */
  
const updateUI = async () =>{
    const request = await fetch('/all');
    try {
    // Transform into JSON
    const allData = await request.json()
    console.log(allData)
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
    document.getElementById('content').innerHTML = allData.content;
    document.getElementById('date').innerHTML =allData.date;
    }
    catch(error) {
      console.log('error', error);
      // appropriately handle the error
    }
   }

  
   /*
   const retrieveData = async () =>{
    const request = await fetch('/all');
    try {
    // Transform into JSON
    const allData = await request.json()
    console.log(allData)
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
    document.getElementById('content').innerHTML = allData.feel;
    document.getElementById('date').innerHTML =allData.date;
    }
    catch(error) {
      console.log('error', error);
      // appropriately handle the error
    }
   }
   */