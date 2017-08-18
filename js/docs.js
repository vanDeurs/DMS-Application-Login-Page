// Change the results into an array
/*var fieldName = responseData.getDocumentType.RSP.DOCSTP[0]; //Object
var elements = Object.keys(fieldName); // Array
var outputData = []; // Empty array to put the results

//Pull the Document Type Name
$('#DocTypeName').text(fieldName.NM);

  
  for (var key in elements){ // Loop through the array
    if (elements[key].indexOf('FLD') > -1){ // Check if object contains 'FLD'
      // Save the results in a array named outputData.
      outputData.push({TAG: elements[key], NM: fieldName[elements[key]].NM});
      // Set the results to the HTML.
      $('#output').append('<div class="fld">'+elements[key]+'</div>');
      $('#output').append('<div class="fieldName">'+fieldName[elements[key]].NM+'</div>');
    }  
    // Log the outputData results to the consol
    console.log(outputData);
  */
// Folders
var fieldName = responseData.getDocumentType.RSP.DOCSTP[0];
//Pull the Document Type Name
$('#DocTypeName').text(fieldName.NM); // DOCSTP print out
var outputData = []; // Empty array to put the results

// Maybe change this to a normal loop, look further into it
for (var key in responseData.getDocumentType.RSP.DOCSTP) {
   var obj = responseData.getDocumentType.RSP.DOCSTP[key];
   for (var prop in obj) {
       var secprop = obj[prop];
       for (var fld in secprop){
           if (secprop.hasOwnProperty(fld)){
               if (fld.indexOf('NM') > -1){
                   // Save the results in a array named outputData.
                   outputData.push({TAG: obj[prop], NM: secprop[fld]});
                   // Set the results to the HTML.
                   $('#output').append('<div class="fld">'+prop+'</div>');
                   $('#output').append('<div class="fieldName">'+secprop[fld]+'</div>');
                   // Log the outputData results to the consol
                   console.log(outputData)
                   //console.log(Object.keys(fieldName)); // Array
                   //console.log(fieldName); // Object
               }
           }
       }
   }
}
    
    