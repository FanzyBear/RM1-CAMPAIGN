Readme file for RM1 Campaign webpages by Zaid.

Overview

The JavaScript code provided within this repository consists of

Form Submission and Signature Handling:

1. This repository contains JavaScript code that enables the handling of form submissions, data collection, and signature pad functionalities for two distinct forms: the regular form and the kulliyah form.

Initialization of SignaturePad instances for two different forms
1. Event listeners to clear signatures upon button clicks.
2. Handling form submissions by capturing form data, extracting signature images as base64 data, and creating downloadable JSON files that encompass the entered data along with the signature image

Notes:
1. The Javascript mostly to add interaction of clear button, submit button, and canvas(for signature).
2. Clear button only clear the canvas pad(not other data field).
3. Submit button will save the data into json file and appreciation alert pop out.
4. As well as the signature image(save as base 64 file, can refer to the link github below for more detail).
5. Both data will saved locally since theres no dedicated server.
6. Every file name is uniqe since it save the "name_kulliyah_form_data" or "name_form_data" name = user name.
7. After the file downloaded(locally), the form data will be inside it and to view the signature, just copy data inside the "" and paste it in website


reference : 
https://github.com/szimek/signature_pad   -Signature pad repository
https://stackoverflow.com/questions/41431322/how-to-convert-formdata-html5-object-to-json   -How to convert Formdata to json file
https://stackoverflow.com/questions/26158468/create-json-file-using-blob   -Used it to create downloadable file (temp)
https://stackoverflow.com/questions/10673122/how-to-save-canvas-as-an-image-with-canvas-todataurl   -save image (base64 url)
https://www.youtube.com/watch?v=8dWL3wF_OMw 

