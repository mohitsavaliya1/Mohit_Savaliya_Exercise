let unixtime = prompt("enter an unix time stamp");

let date = new Date(unixtime*1000);
alert(date);