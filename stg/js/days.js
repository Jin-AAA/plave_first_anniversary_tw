document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        eventClick: function(info) {
            var eventObj = info.event;
            if (eventObj.url) {
              //alert(
              //  'Clicked ' + eventObj.title + '.\n' +
              //  'Will open ' + eventObj.url + ' in a new tab'
              //);
      
              window.open(eventObj.url);
      
              info.jsEvent.preventDefault(); // prevents browser from following link in current tab.
            } else {
              //alert('Clicked ' + eventObj.title);
            }
        },
        headerToolbar: {
            left: 'dayGridMonth,dayGridWeek,listMonth', // buttons for switching between views
            center: 'title'
        },
        //initialView: 'dayGridMonth',
        initialDate: '2022-07-01',
        height:'100%',
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
                    },
                    {
                        title  : '💙第一次LIVE亮相',
                        start  : '2022-09-25',
                        url: 'https://www.youtube.com/watch?v=2l2nip8yy0g'
                    }
                ],
                color: 'white',     // an option!
                borderColor: '#4563d3',
                textColor: '#4563d3', // an option!
                // eventClick: function(info) {
                //     info.jsEvent.preventDefault(); // don't let the browser navigate
                //     if (info.event.url) {
                //         window.open(info.event.url, '_blank');
                //     }
                // }
                
            },
        ]
    });
    calendar.render();
});