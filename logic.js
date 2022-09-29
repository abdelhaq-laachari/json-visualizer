function uploadFileJson() {
  const fileInput = document.getElementById("UploadFileJson");

  let filePath = fileInput.value;
  let allowedExtensions = /(\.json)$/i;
  if (!allowedExtensions.exec(filePath)) {
    alert("Please upload file having extensions .json only.");
    fileInput.value = "";
    return false;
  } else {
    // Json preview
    if (fileInput.files && fileInput.files[0]) {
      let reader = new FileReader();
    //   reader.onload = function (e) {
    //     document.getElementById("JsonPreview").innerHTML =
    //       '<img src="' + e.target.result + '"/>';
    //   };
    console.log(reader.result);
      reader.readAsDataURL(fileInput.files[0]);
    }
  }
}
