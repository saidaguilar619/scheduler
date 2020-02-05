const timeArr = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", 
                 "1pm", "2pm", "3pm", "4pm", "5pm","6pm","7pm","8pm"];
let currentTime = moment().format("HH");
timeStart = 6;

let blockTimeStart;

function setCalander(){
    for (let i = 0; i < timeArr.length;i++ ){
        let newHourH1 = $("<h1>");
        let displayHour = timeArr[i];
        let blockTimeStart = timeStart;
        let eventBoxNum = "eventBox" + i;
        let eventBN = ".eventBox" + i;

        let saveButton = $("<img>").attr("src", "https://cdn3.iconfinder.com/data/icons/ui-essential-elements-buttons/110/Save-512.png");
        saveButton.attr("width", "50px");
        saveButton.attr("height", "50px");
        

        saveButton.css("margin-left", "11%");
        saveButton.css("margin-top", "3%");

        let newRowEl = $("<div>").addClass("row");
        $(".container").append(newRowEl);
        // let newP = $("<p>").addClass("eventInfo");
        // newP.val(localStorage.getItem(eventBN));

        let newHourEl = $("<div>").addClass("hour col-2");
        let newEventBlock = $("<input>").addClass("eventBlock col-8");
        newEventBlock.val(localStorage.getItem(eventBN));
        console.log(localStorage.eventBN);
        newEventBlock.attr("id", i);
        newEventBlock.addClass(eventBoxNum);
        
        if(currentTime == blockTimeStart )
        {
            newEventBlock.addClass("present");
        }
        else if(currentTime < blockTimeStart )
        {
            newEventBlock.addClass("future");
        }
        else if(currentTime > blockTimeStart  )
        {
            newEventBlock.addClass("past");
        }

        let newSaveBtn = $("<button>").addClass("saveButton col-2");
        newSaveBtn.attr("id", i);
        newSaveBtn.append(saveButton);

        newRowEl.append(newHourEl, newEventBlock, newSaveBtn);
        newHourEl.append(newHourH1);
        newHourH1.text(displayHour);
        timeStart++;
    }
}
setCalander();  

$(".saveButton").on("click", function(event){
    
    let ebox = this.id;
    let boxNum = ".eventBox" + ebox; 
    let discription = $(boxNum).val();
    
    console.log(discription);
    localStorage.setItem(boxNum, discription);
})