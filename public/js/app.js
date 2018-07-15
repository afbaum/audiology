// jquery template string to create outcomes table
function listTableTemplate(data) {
  var compiled = '';
  data.forEach(item => {
    compiled += `
    <tr>
      <td>${item.make}</td>
      <td>${item.style}</td>
      <td>${item.model}</td>
      <td>${item.ioiha}</td>
      <td><span class="glyphicon glyphicon-pencil" onclick="handleEditShirtClick(this)" data-shirt-id="${item._id}" style="cursor: pointer;"></span>
      <span class="glyphicon glyphicon-remove" onclick="handleDeleteShirtClick(this)" data-shirt-id="${item._id}"   style="cursor: pointer;"></span></td>
    </tr>`;
  });
  return compiled;
}

//get data from mongodb
function getAids() {
  return $.ajax('/api/hearingaids')
    .then(res => {
      console.log("Results from getAids()", res);
      return res;
    })
    .fail(err => {
      console.log("Error in getAids()", err);
      throw err;
    });
}

//create the main table based on the mongodb data
function refreshAidsList() {
  getAids()
    .then(aids => {
      const data = {aids: aids};
      window.aids = data;
      $('#list-table-content').html(listTableTemplate(data.aids));
    });
}

// Hide form on page load
$('#form-container').show();
// When button is pressed show the form
function showAddAidForm() {
   $('#form-container').show();
}

function submitHAForm() {
  console.log("you clicked submit");

  const aidData = {
    make: $('#makeSelect').val(),
    style: $('#styleSelect').val(),
    model: $('#modelTextarea').val(),
    ioiha: $('#ioihaTextarea').val()
  }
  console.log("hearing aid data", aidData);

  fetch('/api/hearingaids', {
      method: 'post',
      body: JSON.stringify(aidData),
      headers: {
          'Content-Type': 'application/json'
      }})
      .then(response => response.json())
      .then(aids => {
          console.log("we have posted the data", aids);
          refreshAidsList();
      })
      .catch(err => {
          console.error("A terrible thing has happened", err);
      })
}
// When cancel is pressed hide the form and clear the form
function cancelHAForm() {
  $('#form-container').hide();
}