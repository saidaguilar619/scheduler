const timeArr = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
let currentTime = moment().format("HH");
timeStart = 9;

let blockTimeStart;

function setCalander(){
    for (let i=0; i < timeArr.length;i++ ){
        let newHourH1 = $("<h1>");
        let displayHour = timeArr[i];
        let blockTimeStart = timeStart;

        let saveButton = $("<img>").attr("src", "https://cdn3.iconfinder.com/data/icons/ui-essential-elements-buttons/110/Save-512.png");
        saveButton.attr("width", "50px");
        saveButton.attr("height", "50px");
        saveButton.attr("value", i)
        saveButton.css("margin-left", "20%");
        saveButton.css("margin-top", "10%");

        let newRowEl = $("<div>").addClass("row");
        $(".container").append(newRowEl);

        let newHourEl = $("<div>").addClass("hour col-2");
        let newEventBlock = $("<input>").addClass("eventBlock col-8");

        console.log("current" + currentTime);
        console.log(blockTimeStart);
    
        
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

        let newSaveBtn = $("<button>").addClass("saveBtn col-2");
        newSaveBtn.append(saveButton);
        newRowEl.append(newHourEl, newEventBlock, newSaveBtn);
        newHourEl.append(newHourH1);
    
        newHourH1.text(displayHour);
        // whatState();
        timeStart++;
    }
}

setCalander();