function createMenu() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu("Клиенты");
  menu.addItem("✌️Новый клиент", "openForm");
  // menu.addSeparator();
  menu.addToUi();
}


function openForm(){
    let html=HtmlService.createHtmlOutputFromFile('form')
    SpreadsheetApp.getUi().showSidebar(html)
}


function sendData(fullName, gender, dob, phone, email, discount, source) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Клиенты')
  const lastRow = sheet.getLastRow()
  const checkbox = ""
  let id = sheet.getRange(lastRow, 2).getValue()
  // if ((id == "") || (id < 1) || (/^\d+$/.test(id))) {
  if ((id == "") || (id < 1) || (typeof id === 'string')) {
    id = 1
  } else {
    id = id + 1
  }
  let today = new Date()
  const formattedToday = Utilities.formatDate(today, Session.getScriptTimeZone(), "dd.MM.yyyy")
  const newClient = [checkbox, id, formattedToday, fullName, gender, dob, phone, email, source]
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Клиенты').appendRow(newClient)
}
