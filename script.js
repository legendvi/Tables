new_list = []
btn1 = document.createElement('button')
btn1.innerText = 'Edit'
document.body.appendChild(btn1)
sub = document.getElementById('submit')
sub.onclick = function () { clicked() }

function clicked() {
  new_row = {}
  nam = document.getElementById('nam')
  age = document.getElementById('age')
  email = document.getElementById('email')

  new_row['Name'] = nam.value
  new_row['Age'] = age.value
  new_row['Email'] = email.value
  new_list.push(new_row)
  console.log(new_list)
  div = document.getElementById('right-div')
  display(new_row)


}

function display(new_row) {
  if (nam.value && age.value && email.value) {
    tr = document.createElement('tr')
    td1 = document.createElement('td')
    td2 = document.createElement('td')
    td3 = document.createElement('td')

    console.log(tr, td1)
    tabl = document.getElementById('tabl')
    td1.innerText = new_row.Name
    td2.innerText = new_row.Age
    td3.innerText = new_row.Email
    console.log(td1.innerText)
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tabl.append(tr)
    console.log(tabl)
    nam.value = ''
    age.value = ''
    email.value = ''
  }

}
/*
(function() {
    document.getElementById("button").onclick = function() {
      var table = document.getElementById("table");
      var people = [];
      for (var i = 1; i < table.rows.length; i++) {
          people.push({
            firstName: table.rows[i].cells[0].innerHTML,
          lastName: table.rows[i].cells[1].innerHTML,
          age: table.rows[i].cells[2].innerHTML
        });
      }
    };
  })();
  */