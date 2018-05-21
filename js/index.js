var myHeaders = new Headers();
var clan;
myHeaders.append("auth", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mzk2LCJpZGVuIjoiMTg1MTc2MTMzOTg4Mzg0NzY5IiwibWQiOnt9fQ.gaIAhScJWhGsX9bbQwoWDVH5VOYLmbXeIXyoxzO08J0');
var data1 = JSON.parse(fetch("https://api.royaleapi.com/clan/2CCCP", {
    headers: myHeaders
}));
//alert(data1.description);
document.getElementById("container").innerHTML = "data1.description";
    
