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
        // cover
        {
          events: [ // put the array in the `events` property
            {
              title  : '💙第一首cover',
              start  : '2022-07-28',
              url: 'https://www.youtube.com/watch?v=zxAQ6YH3gAw'
            }
          ],
          color: 'white',     // an option!
          textColor: '#4563d3', // an option!
          eventClick: function(info) {
            info.jsEvent.preventDefault(); // don't let the browser navigate
            if (info.event.url) {
              window.open(info.event.url, "_blank");
            }
          }
        },
        // LIVE
        {
            events: [ // put the array in the `events` property
              {
                title  : '💙第一次LIVE亮相',
                start  : '2022-09-25',
                url: 'https://www.youtube.com/watch?v=2l2nip8yy0g'
              }
            ],
            color: '#4563d3',     // an option!
            textColor: 'white', // an option!
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