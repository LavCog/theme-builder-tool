$(document).ready(function()
{
    $.ajax({
    url: "http://206.189.135.207:3001/api/get-color-by-sitecode?siteCode=Site-A",
    type: "GET",
    dataType: "json",
    success: function (data) {
        console.log(data);
        const obj = data;
const myJSON = JSON.stringify(obj);
        console.log(myJSON);
        let root=document.documentElement;
	      root.style.setProperty('--font-color', obj.fontColor);
        root.style.setProperty('--font-size',obj.fontSize);
         root.style.setProperty('--background-color', obj.backgroundColor); 
        root.style.setProperty('--button-background-color', obj.BtnBgcolor); 
        root.style.setProperty('--button-text-color',obj.BtnTextColor);
        root.style.setProperty('--title-font-color',obj.titleColor);


    },
    error: function () {
        console.log("Error");
    }
});
})
