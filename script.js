$(document).ready(function(){
  var devices = ["shop", "cinema", "pharmacy"];
  var emails = ["johnsmith@gmail.com", "johnsmithlegitmail@gmail.com", "test@test.com"];
  var alerts_container = $('[alert_div_container]');
  var alertTemplate = $('[alert_field]');
  var j = 0; //to będzie musiało być to id zgłoszenia, że jak renderuje to ogarnia data.id

  getAllAlerts();

  function getAllAlerts(){
    handleAlertRowRender(emails);
  }
  function handleAlertRowRender(data){
    data.forEach(i => {
      createAlertRow(i).appendTo(alerts_container);
    });

  }
  function createAlertRow(data){
    var element = $(alertTemplate).clone();
    element.attr("alert_id", j);
    var checkbox = element.find('[checkbox_element]');
    element.find('[email_input]').val(data);
    devices.forEach(i => {
      var element_checkbox = $(checkbox).clone();
      element_checkbox.find("[device_name]").text(i);
      element_checkbox.attr("alert_id", j);
      element_checkbox.appendTo(element);
    });
    j += 1;
    return element;
  }

  $('[checkbox]').on('click', function(){
    var id = $(this).attr("alert_id");
    if($(this).parent().find('[device_name]').text() == "ALL"){
      alert("yes " + $(this).attr("alert_id"));
      checkCheckboxes($(this), id);
    }
  });

  function checkCheckboxes(element, id){
    $("[checkbox]").each(function(){
      if($(this).attr("alert_id") == id){
        $(this).prop("checked", element.is(":checked"));
      }
    });
  }


});
