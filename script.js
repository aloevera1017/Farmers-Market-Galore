console.log("connected")

// GET Requests
async function getAPIData(URL) {
  let response = await fetch(URL) // make a call to our API 
  let json = await response.json() // turn the response into JSON
  console.log(json)
  return json
}

async function onSubmitPressed() {
  let API_URL = "https://data.cityofnewyork.us/resource/8vwk-6iz2.json"
  let apiData = await getAPIData(API_URL)
  // do stuff with the data here

  // updating the HTML with data
  // step 1: get a reference to the list HTML
  let farmTable = document.getElementById("farm-table")
  // console.log(farmTable)
  // step 2: pull out our data 

  // let farmArray = apiData[0].borough
  console.log(apiData)

  // .toUpperCase() makes the input upper case in data so it's easier to compare in the if statement
  let farmBorough = document.getElementById("user-input").value.toUpperCase()
  
  
  // We created an empty array to eventually hold all the matching boroughs from api
  let borough = []

  // Created a for loop to loop through all the data 
  for (let i = 0; i < apiData.length; i++) {
    let farm = apiData[i]
    console.log(farm)
    // If the current data (farm) matches our value, push into our empty array
    if (farm.borough.toUpperCase() == farmBorough) {
      borough.push(farm)
    }
  }
  
  // back ticks ``
  // step 3: AND... add items to the list HTML
  farmTable.innerHTML = `<thead>
    <tr>
      <th scope="col">Number</th>
      <th scope="col">Farmer's Market Name</th>
      <th scope="col">Borough</th>
      <th scope="col">Distributes Health Bucks?</th>
      <th scope="col">Offers A Nutrition Workshop Onsite?</th>
      <th scope="col">Accepts EBT?</th>
    </tr>
  </thead>`
  farmTable.innerHTML += borough.map((farm, index) =>`
    <tbody>
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${farm.marketname}</td>  
        <td>${farm.borough}</td>
        <td>${farm.distributes_health_bucks_}</td>
        <td>${farm.nyc_dept_of_health_cooking}</td>
        <td>${farm.accepts_ebt}</td>
      </tr>
    </tbody>
  `).join('');
}

onSubmitPressed() 


// Great job! :)
// Keep up the good work