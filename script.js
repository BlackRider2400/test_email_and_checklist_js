$(document).ready(function(){
  var devices = ["shop", "cinema", "pharmacy"];
  var emails = ["johnsmith@gmail.com", "johnsmithlegitmail@gmail.com", "test@test.com"];
  var alerts_container = $('[alert_div_container]');
  var alertTemplate = $('[alert_field]').children()[0];

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
    var checkbox = element.find('[device_checkbox]').children()[0];
    element.find('[email_input]').val(data);
    devices.forEach(i => {
      var element_checkbox = $(checkbox).clone();
      element_checkbox.find("[device_name]").text(i);
      element_checkbox.appendTo(element);
    });
    return element;
  }
});
