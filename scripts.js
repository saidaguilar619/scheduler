const timeArr = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm",  //setting array with time values
                 "1pm", "2pm", "3pm", "4pm", "5pm","6pm","7pm","8pm"];
let currentTime = moment().format("HH");

function setCalander(){
    let timeStart = 6; 
    $("#currentDay").text(moment()); //displays current time
    for (let i = 0; i < timeArr.length;i++ ){
        //declaring important variables
        let displayHour = timeArr[i];
        
        let blockTimeStart = timeStart;
        let eventBoxNum = "eventBox" + i;
        let eventBN = ".eventBox" + i;

        //creating new elements
        let newHourH1 = $("<h1>"); 
        newHourH1.text(displayHour);

        let saveButton = $("<img>").attr("src", "https://cdn3.iconfinder.com/data/icons/ui-essential-elements-buttons/110/Save-512.png");
        saveButton.attr("width", "50px");
        saveButton.attr("height", "50px");
        saveButton.css("margin-left", "11%");
        saveButton.css("margin-top", "3%");
        
        let newRowEl = $("<div>").addClass("row");
        $(".container").append(newRowEl);

        let newHourEl = $("<div>").addClass("hour col-2");

        let newEventBlock = $("<input>").addClass("eventBlock col-8");
        newEventBlock.val(localStorage.getItem(eventBN));
        newEventBlock.attr("id", i);
        newEventBlock.addClass(eventBoxNum);
        
        //check if time block is current future or past
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

        let newSaveBtn = $("<button>").addClass("saveButton col-2"); //creates save button
        newSaveBtn.attr("id", i);
        newSaveBtn.append(saveButton);

        newRowEl.append(newHourEl, newEventBlock, newSaveBtn);
        newHourEl.append(newHourH1);

        timeStart++;
    }
}
setCalander();  

//saves info in local storage when save button is clicked
$(".saveButton").on("click", function(event){
    let boxNum = ".eventBox" + this.id; 
    let discription = $(boxNum).val();
 
    localStorage.setItem(boxNum, discription);
})