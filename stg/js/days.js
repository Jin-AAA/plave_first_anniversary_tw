$(function(){
    

    // var calendarEl = document.getElementById('calendar');

    // var calendar = new FullCalendar.Calendar(calendarEl, {
    //     year: 2022,
    //     month: 7,
    //     height: 650,
    //     locale: 'zh-tw',
    //     timeZone: 'local',
    //     //initialView: 'dayGridMonth',
    //     events: 'https://fullcalendar.io/api/demo-feeds/events.json',
    //     editable: false,
    //     selectable: false
    // });

    // calendar.render();

    //$("a.fc-event").attr("target", "_blank");


    

})


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      height:700,
      locale: 'zh-tw',
      validRange: {
        start: '2022-07-01',
        end: '2024-03-31'
      },
      eventSources: [

        // your event source
        {
          events: [ // put the array in the `events` property
            {
              title  : '1st Anni',
              start  : '2024-03-12'
            },
            {
              title  : 'iDol Radio',
              start  : '2024-03-06',
              url: 'https://www.jk2u.com.tw/'
            }
          ],
          color: 'black',     // an option!
          textColor: 'yellow', // an option!
          
          eventClick: function(info) {
            info.jsEvent.preventDefault(); // don't let the browser navigate
        
            if (info.event.url) {
              window.open(info.event.url, "_blank");
            }
          }
          
        }
       ]
    });
    calendar.render();
  });