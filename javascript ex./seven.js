let d = prompt("enter a date in YYYY-MM-DD form");
let date = new Date(d); 



let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

alert(monthNames[date.getMonth()]);
