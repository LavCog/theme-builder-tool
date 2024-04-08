$(document).ready(function()
{
    $.ajax({
    url: "http://206.189.135.207:3001/api/get-colors",
    type: "GET",
    dataType: "json",
    success: function (data) {
        console.log(data);
        const obj = data;
const myJSON = JSON.stringify(obj);
        console.log(myJSON);
        let root=document.documentElement;
	      root.style.setProperty('--font-color', obj[1].fontColor);
        root.style.setProperty('--font-size',obj[1].fontSize);
         root.style.setProperty('--background-color', obj[1].backgroundColor); 
        root.style.setProperty('--button-background-color', obj[1].BtnBgcolor); 
        root.style.setProperty('--button-text-color',obj[1].BtnTextColor);
        root.style.setProperty('--title-font-color',obj[1].titleColor);


    },
    error: function () {
        console.log("Error");
    }
});
})
