const fs = require('fs');
let flag = 1;
let space = -5;
let set = new Set();

//main directory name
let mainDir = __dirname.split('/');
let dirName = mainDir[mainDir.length-1]; 

//directory tree structure
let treeStruct = (dir,space) => {
	let files = fs.readdirSync(dir);
	for(let file of files) {

		if (fs.statSync(dir + '/' + file).isFile()) {
      space += 5;
      let split = dir.split('/');
			let last = split[split.length-1];
			if(!set.has(last)){
				if(last !== dirName){				
					console.log(" ".repeat(space) + last);
					set.add(last);
				}
			}
			console.log(" ".repeat(space) + "     " + file);
			space -= 5;		
    }

		else {
			space += 5;
			if(flag){
				console.log(dirName);
				flag = 0;
			}
			treeStruct(dir + '/' + file,space);
			space -= 5;
		}
	};
};

treeStruct(__dirname,space);
