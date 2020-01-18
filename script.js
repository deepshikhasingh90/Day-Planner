let m= moment();
console.log(m);
var currentDate=moment().format('dddd,MMM Do');
$("#currentDay").text(currentDate).css("color","#DB7093");

$( document ).ready(function() {
    for (var i = 9;i < 18;i++){
        //create main div section
        // index=9;
        var rowDiv = $('<div>').attr('data-time',i);
        rowDiv.addClass('row rowBlock');
        $(".container").append(rowDiv);

        // creating hour section
        var displayHour = 0;
        let merediem = "";
        if (i > 12) { 
            displayHour = i - 12;
            merediem = "PM";
        } else 
        {
            displayHour = i;
            merediem = "AM";
        }
        var hourSection = $('<div>');
        hourSection.addClass('col-md-2 hour');
        const timeSpanSection = $('<span>');
        timeSpanSection.text(displayHour + merediem );
        hourSection.append(timeSpanSection);
    
        // creating  the  form section
        var planDiv = $('<div id="textAreaDiv">');
        planDiv.addClass('col-md-9 col-sm-8');
        var planSection = $('<input>');
        planSection.attr('type','textarea');
        planSection.addClass("display-area")
        planSection.attr('id','displaySection');
        // planSection.attr('hour-index',index);
        planDiv.append(planSection);
        
        // submit Button
        var saveButton = $("<i class='far fa-save lg'></i>")
        var savePlan = $("<button>");
        savePlan.attr({'class':'col-md-1 saveBtn'});
        savePlan.append(saveButton);
        rowDiv.append(hourSection,planDiv,savePlan)
    }
    // code to chnage the color of the classes based on past/present/future
    $(".rowBlock").each(function() {
        var elementTime = $(this).attr("data-time")
        var currentTime = new Date().getHours();
        // console.log(currentTime +"you know"+ j);
        if (currentTime > elementTime)
        {
            $(this).addClass( "past");
            // console.log(this.innerHTML)
        }
        else if (currentTime < elementTime) 
        {
            $(this).addClass( "future");
        }
        else 
        {
            $(this).addClass( "present");
        }
            
    });
    // localStorage
    $(".saveBtn").on("click", function() {
        var elementTime =  $(this).parent().attr("data-time");
        console.log(elementTime);
        var Note = $(this).siblings("#textAreaDiv").children("#displaySection").val();
        console.log(Note);
        localStorage.setItem(elementTime, Note);
        // console.log(textarea.val());
    });

    let elem = 9;
    $(".rowBlock").children("#textAreaDiv").children("#displaySection").each(function () {
        $(this).val(localStorage.getItem(elem));
        elem++;
    });
});

