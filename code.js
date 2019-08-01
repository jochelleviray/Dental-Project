


//List view
var getAllRecords = function() {
    $.getJSON('https://api.airtable.com/v0/appMBj3gsjCWIL51E/Dental%20Treament?api_key=key2A5xNifikdckOS',
      function(airtable){
        var html = [];
        $.each(airtable.records, function(index, record) {
          var id = record.id;
          var picture = record.fields['Pictures'];
          var jobTitle = record.fields['Job Title'];
          var avgRate = record.fields['Average Bi-Weekly Rate'];
          html.push(listView(id, picture, jobTitle, avgRate));
        });
        $('.list-view').append(html);
      }
    );
  }
  
  var listView = function(id, picture, jobTitle, avgRate) {
    return `
      <div class="card border-dark" style="width: 18rem;">
      ${picture ? `<img src="${picture[0].url}">` : ``}
      <div class="card-body">
        <h2 class="card-title"><a href="index.html?id=${id}">${jobTitle}</h2></a>
        <p class="card-text"><u>Average Annual Salary:</u><p> $${toCommas(avgRate*24)}</p>
        </div>
      </div>
    `;
  }


