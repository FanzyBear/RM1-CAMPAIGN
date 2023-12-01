// For the regular form
var regularCanvas = document.getElementById('regular_signatureCanvas');
var regularSignaturePad = new SignaturePad(regularCanvas);
var regularClearButton = document.getElementById('regular_clearButton');

// For the kulliyah form
var kulliyahCanvas = document.getElementById('kulliyah_signatureCanvas');
var kulliyahSignaturePad = new SignaturePad(kulliyahCanvas);
var kulliyahClearButton = document.getElementById('kulliyah_clearButton');

// Event listeners for clearing signatures in each form
regularClearButton.addEventListener('click', function(event){
  event.preventDefault(); // Prevent the default 'click' action
  regularSignaturePad.clear();
});
kulliyahClearButton.addEventListener('click', function(event){
  event.preventDefault(); // Prevent the default 'click' action
  kulliyahSignaturePad.clear();
});


// Handle form submission for the regular form
document.getElementById('regular_form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission

  const submitButton = event.submitter;
  if (submitButton && submitButton.type === 'submit') {

    // Retrieve form data and entered name
    const formData = new FormData(this);
    const nameField = document.getElementById('regular_name');
    const name = nameField.value;

    // Create a JSON object from form data
    let jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    // Get the signature image from the canvas
    const signatureCanvas = document.getElementById('regular_signatureCanvas');
    const signatureImage = signatureCanvas.toDataURL('image/png');
    jsonData['signatureImage'] = signatureImage;

    // Convert JSON object to a string
    const jsonDataString = JSON.stringify(jsonData, null, 2);

    // Create a Blob containing the JSON data
    const blob = new Blob([jsonDataString], { type: 'application/json' });

    // Create a link element for download
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${name}_form_data.json`; // Set the file name

    // Trigger a click to download the file
    document.body.appendChild(a);
    a.click();

    // Clean up the link element
    document.body.removeChild(a);

    alert('Thanks for your donation!');
  }
});

// Handle form submission for the kulliyah form
document.getElementById('kulliyah_form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission

  const submitButton = event.submitter;
  if (submitButton && submitButton.type === 'submit') {

    // Retrieve form data and entered name for kulliyah form
    const formData = new FormData(this);
    const nameField = document.getElementById('kulliyah_name');
    const name = nameField.value.trim();

    // Create a JSON object from form data
    let jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    // Get the signature image from the canvas
    const signatureCanvas = document.getElementById('kulliyah_signatureCanvas');
    const signatureImage = signatureCanvas.toDataURL('image/png');
    jsonData['signatureImage'] = signatureImage;

    // Convert JSON object to a string
    const jsonDataString = JSON.stringify(jsonData, null, 2);

    // Create a Blob containing the JSON data
    const blob = new Blob([jsonDataString], { type: 'application/json' });

    // Create a link element for download
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${name}_kulliyah_form_data.json`; // Set the file name for kulliyah form

    // Trigger a click to download the file
    document.body.appendChild(a);
    a.click();

    // Clean up the link element
    document.body.removeChild(a);

    alert('Thanks for your donation!');
  }
});
