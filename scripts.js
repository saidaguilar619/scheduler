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
        let currentBlock = "block" + i;

        let saveButton = $("<img>").attr("src", "https://cdn3.iconfinder.com/data/icons/ui-essential-elements-buttons/110/Save-512.png");
        saveButton.attr("width", "50px");
        saveButton.attr("height", "50px");
        $(".saveBtn").attr("value", i)
        console.log(i);

        saveButton.css("margin-left", "11%");
        saveButton.css("margin-top", "3%");

        let newRowEl = $("<div>").addClass("row");
        $(".container").append(newRowEl);
        let newP = $("<p>").addClass("eventInfo");
        newP.text(localStorage.currentBlock);

        let newHourEl = $("<div>").addClass("hour col-2");
        let newEventBlock = $("<input>").addClass("eventBlock col-8");
        
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
        timeStart++;
    }
}

// function savetoLocal(box, discription){
//     let boxNum = "box" + box;
//     localStorage.setItem(boxNum, discription);
// }

setCalander();
$(".saveBtn").on("click", function(){
    let boxNum = "box" + box;
    localStorage.setItem(boxNum, discription);
})