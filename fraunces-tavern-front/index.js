function reservationLoad() {
  event.preventDefault()
  console.log("hello")
  let bodyDiv = document.createElement("div")
  bodyDiv.id= "bodyDiv"
  let container = document.getElementById("container")
  let resForm = document.createElement("form")
  container.appendChild(bodyDiv)
  bodyDiv.innerHTML = ""
  resForm.id = "resForm"
  resForm.innerHTML = `
  <input type="text" placeholder="Name" class="transparent-input"><br><input type="text" placeholder="Phone number" class="transparent-input"><br>
  <input type="text" placeholder="email" class="transparent-input"><br><input type="date" id="date" min="2018-01-01" max="2018-12-01" class="transparent-input"><br>
  <input type="time" id="time" value="13:30" class="transparent-input"><br><textarea placeholder="Notes..." class="transparent-input"></textarea><br>
  <button type="submit" name="button" class="button456">Submit</button>

  `
  container.appendChild(resForm)
  resForm.addEventListener("submit", submition)
}



function submition(e) {
  e.preventDefault()
  let name = e.target[0].value
  let phone = e.target[1].value
  let email = e.target[2].value
  let date = e.target[3].value
  let time = e.target[4].value
  let notes = e.target[5].value
  let userObj = {name: name, phone: phone, email: email}
  fetch("http:localhost:3000/users", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(userObj)
  })
  .then(res => res.json())
  .then(json => {
    let resObj = {date: date, time: time, notes: notes, user: json}
    fetch("http:localhost:3000/reservations", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(resObj)
    })
    .then(res => res.json())
    .then(alert(json.user.name))
  })


}
