let x = "";
const myObj = {
    name: "krishna",
    role: 'developer',
    age: 23,
    Knowleges: [
        { softwareName: "github", knowAbout: ["git", "gitBase", "RemoteRepository"] },
        { softwareName: "Angular", knowAbout: ["Framework", "routing", "PWA"] },
        { softwareName: "mongoDB", knowAbout: ["DataBase", "noSQL"] }
    ]
}

for (let i in myObj.Knowleges) {
    x += "<h2>" + myObj.Knowleges[i].softwareName + "</h2>";
    for (let j in myObj.Knowleges[i].knowAbout) {
        x += myObj.Knowleges[i].knowAbout[j] + "<br>";
    }
}
console.log(x)
