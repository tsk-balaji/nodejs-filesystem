const fs = require("fs");
const fsAsync = require("node:fs/promises");

// Get the current date and time
const currentDate = new Date().toISOString().slice(0, 10);
const currentTime = new Date().toISOString().slice(11, 19);
const content = currentDate + " " + currentTime.replace(/[:.]/g, "-"); //Unable to create file with this format (2024-07-22 12:51:40) *Colon not allowed*
// Define the file name and content
const fileName = `${content}.txt`;
const fileContent = currentDate + " " + currentTime;

// Write the file
function createFile() {
  fs.appendFile(fileName, fileContent, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("File created successfully:", fileName);
    }
  });
}

// Read All Files from Directory using readdir
function readAllFilesFromDir() {
  fs.readdir("./", (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
    } else {
      console.log(
        "Files in the directory:",
        files.filter((file) => file.endsWith(".txt")) //filter to extract only text file so other git comp are excluded for easy view.
      );
    }
  });
}

readAllFilesFromDir();
createFile();
