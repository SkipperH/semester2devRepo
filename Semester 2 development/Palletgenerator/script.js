let paletnames = ["Viper", "Nomad", "Axel", "Creed", "Blazed", "Sky", "Demo", "Salt", "Space", "Sweet", "Coral", "Hawk", "Volt", "Calix", "Blade", "Dagger", "Berlin", "Cinco", "Ghost", "Goose", "Phantom", "Phoenix", "Salsa", "Bouncer", "Apex", "Apollo", "Cypher"];
let bgcolors = ["#FC766AFF", "#42EADDFF", "#343148FF", "#ADEFD1FF", "#D6ED17FF", "#89ABE3FF", "#2BAE66FF", "#E94B3CFF", "#F2EDD7FF", "#F95700FF", "#000000", "#E69A8DFF"];
let titlecolors = ["#FAD0C9FF", "#343148FF", "#FFFFFFFF", "#755139FF", "#FCF6F5FF", "#FAD0C9FF", "#2BAE66FF", "#195190FF", "#606060FF", "#D6ED17FF", "#00203FFF", "#292a29"];
let background = document.getElementById("basecolor");
let title = document.getElementById("palettitle");
let button = document.getElementById("paletbutton");
let backGroundInfo = document.getElementById("background-code");
let pTitleInfo = document.getElementById("title-code");
let paletobjects = [
    {
        "bgcolor": "#000000",
        "title": "Darkmode",
        "titlecolor": "#ffffff",
        "id": 1
      },
      {
        "bgcolor": "#00203FFF",
        "title": "Sailor Blue",
        "titlecolor": "#ADEFD1FF",
        "id": 2
      },
      {
        "bgcolor": "#D6ED17FF",
        "title": "Lime Punch",
        "titlecolor": "#000000",
        "id": 3
      },
      {
        "bgcolor": "#2C5F2D",
        "title": "Forest Green",
        "titlecolor": "#97BC62FF",
        "id": 4
      },
      {
        "bgcolor": "#FEE715FF",
        "title": "Blazing Yellow",
        "titlecolor": "#000000",
        "id": 5
      },
      {
        "bgcolor": "#89ABE3FF",
        "title": "Sky",
        "titlecolor": "#FCF6F5FF",
        "id": 6
      },
      {
        "bgcolor": "#ff5f15",
        "title": "Safety Orange",
        "titlecolor": "#101820FF",
        "id": 7
      },
      {
        "bgcolor": "#FAD0C9FF",
        "title": "Pink Salt",
        "titlecolor": "#FCF6F5FF",
        "id": 8
      },
      {
        "bgcolor": "#990011FF",
        "title": "Space Cherry",
        "titlecolor": "#FCF6F5FF",
        "id": 9
      },
      {
        "bgcolor": "#F2EDD7FF",
        "title": "Sweet Corn",
        "titlecolor": "#755139FF",
        "id": 10
      },
      {
        "bgcolor": "#FC766AFF",
        "title": "Living Coral",
        "titlecolor": "#5B84B1FF",
        "id": 11
      },
      {
        "bgcolor": "#F95700FF",
        "title": "Orange Juice",
        "titlecolor": "#FFFFFFFF",
        "id": 12
      },
      {
        "bgcolor": "#ffffff",
        "title": "Lightmode",
        "titlecolor": "#000000",
        "id": 13
      },

]



function RandomInt(max) {
    return Math.floor(Math.random() * max);
  }

background.addEventListener("click", function(){
    
    let randomgetal = RandomInt(12);

    // Versie 1 -- WERKT!
    // title.innerHTML = paletnames[RandomInt(24)];
    // title.style.color = titlecolors[RandomInt(12)];
    // background.style.backgroundColor = bgcolors[RandomInt(12)];

    // Versie 2 -- Dont work

    // const randomly = () => Math.random() * max;
    // const palet = paletobjects;
    // const dynamicColors = [].palet(bgcolors).sort(randomly);

    //     paletobjects.forEach(x => {
    //         title.innerHTML = x.dynamicColors.title;
    //         title.style.color = x.titlecolor;
    //         background.style.backgroundColor = x.bgcolor; 
    //         console.log(`Dear ${x.title} thank you for purchase of a ${x.bgcolor} for the price of ${x.titlecolor}`)
    //     })
      
    // Versie 3 -- WERKT!

        // let palet = paletobjects.find(palet => palet.id === RandomInt(12));
        // title.innerHTML = palet.title;
        // title.style.color = palet.titlecolor;
        // background.style.backgroundColor = palet.bgcolor;
        // console.log(palet);


    // Versie 4

    title.innerHTML = (paletobjects[randomgetal].title);
    title.style.color = (paletobjects[randomgetal].titlecolor);
    background.style.backgroundColor = (paletobjects[randomgetal].bgcolor);

    backGroundInfo.innerHTML = (paletobjects[randomgetal].bgcolor);
    pTitleInfo.innerHTML = (paletobjects[randomgetal].titlecolor);

    // if (background.style.backgroundColor = "#ffffff"){
    //   backGroundInfo.style.color = "#000000";
    //   pTitleInfo.style.color = "#000000";
    // }

    // else{
    //   backGroundInfo.style.color = "#000000";
    //   pTitleInfo.style.color = "#000000";
    // }
});



