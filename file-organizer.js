const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "output", "messy-files");
const organizedDir = path.join(__dirname, "output", "organized");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
  audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};
const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "data.csv",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
];


function initailizeDirectories(){
  /*🔹 messy-files ফোল্ডার না থাকলে তৈরি করে*/
    if(!fs.existsSync(sourceDir)){
        fs.mkdirSync(sourceDir,{recursive:true});

        /*🔹 তারপর test files গুলো তৈরি করে*/
        testFiles.forEach((file)=>{
            fs.writeFileSync(path.join(sourceDir,file),`Content of ${file}`)
        }) /*এতে ১৬টা fake ফাইল তৈরি হয়।*/
    }
    console.log("Messy file created...");

    /*🔹 organized folder বানায়*/
    if(!fs.existsSync(organizedDir)){
      fs.mkdirSync(organizedDir,{recursive:true});
    }

      /*🔹 তারপর catagory folders তৈরি করে*/
    Object.keys(categories).forEach((categories)=>{
      const categoryPath =path.join(organizedDir,categories);
      fs.mkdirSync(categoryPath);
    })
}

function getCatagory(filename){
  /*📌 5. getCategory(filename)>>>ফাইলের extension বের করে, কোন গ্রুপে পড়বে তা ঠিক করা।*/

  const ext =path.extname(filename).toLocaleLowerCase();   /*>>>>>".pdf",".jpg"*/
  //  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  for(const [categories, extensions] of Object .entries(categories)){
    if(extensions.includes(ext)){
      return categories;
    }
  }
  return "others";
}

/*📌 6. organizeFile()

সিস্টেম কিভাবে ফাইল সাজায়:

messy-files থেকে সব ফাইল পড়বে

প্রতিটি ফাইলের category বের করবে

তারপর copy করে organized/category folder এ রাখবে
*/

function organizeFile(){
  console.log("file organizer \n");
  console.log("source:",sourceDir);
  console.log("Destinstion:",organizedDir);
 console.log("\n"+"-".repeat(57)+"\n");

 const files =fs.readdirSync(sourceDir);

 if(files.length === 0){
  console.log("No files to work on!!")
  return
 }
 console.log(`found ${files.length} files to oraganize \n`);

 const stats ={
  total:0,
  byCategory:{}
 }

 files.forEach(file=>{
  const soursePath =path.join(sourceDir,file);
  const stat =fs.statSync(sourceDir);
  if(stat.isDirectory()){
    return;
  }
  const category=getCatagory(file);
  const destDir =path.join(organizeFile,category);
  const destPath =path.join(destDir,file);

  fs.copyFileSync(soursePath,destPath);

  stat.total++;

  stat.byCategory[category]=(stat.byCategory[category] || 0)+1

  console.log(`${file}`)
  console.log(`${category}`)
  console.log(`${stat.size}`)
 });
}


function showHelp(){
  console.log(`
    file oranizer -usage:

    commends:
    init - create file
    oranize -organize files into catagoeies

    example:
    node file-organizer init
    node file-organizer organize
    `)
}

const command =process.argv[2]
switch(command){
  case "init":
    initailizeDirectories();
    break
    case "oraganize":
      organizeFile();
      break;
      default:
      showHelp();
      break
}