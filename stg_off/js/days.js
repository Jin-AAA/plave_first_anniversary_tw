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
            {
                color: 'white',
                borderColor: '#4563d3',
                textColor: '#4563d3',
                events: [ // put the array in the `events` property
                    {title  : '💙第一首cover',start  : '2022-07-28',url: 'https://www.youtube.com/watch?v=zxAQ6YH3gAw'},
                    {title  : '💙第一次LIVE亮相',start  : '2022-09-15',url: 'https://www.youtube.com/watch?v=2l2nip8yy0g'},
                    {title  : '💜第一次LIVE亮相',start  : '2022-09-29',url: 'https://www.youtube.com/watch?v=EvtvvsIByvw'},
                    {title  : '💙💜首次合體直播',start  : '2022-10-13',url: 'https://www.youtube.com/watch?v=sdlggiYJHf8'},
                    {title  : '💗第一次LIVE亮相',start  : '2022-10-20',url: 'https://www.youtube.com/watch?v=71QMhhhEJdE'},
                    {title  : '❤️第一次LIVE亮相',start  : '2022-11-14',url: 'https://www.youtube.com/watch?v=2QLcpGxzqTY'},
                    {title  : '💗❤️首次合體直播',start  : '2022-12-28',url: 'https://www.youtube.com/watch?v=2EWaWUuuFJk'},
                    {title  : '💙第一次穿模',start  : '2022-12-29',url: 'https://youtu.be/JWtfwG-FmgU?t=5083'},
                    {title  : '예준 - 사랑은 늘 도망가',start  : '2023-01-03',url: 'https://youtu.be/KIagOh8APWg'},
                    {title  : '🖤第一次LIVE亮相',start  : '2023-01-16',url: 'https://www.youtube.com/watch?v=g3NjhLOP1Ao'},
                    {title  : '💙💗首次合體直播',start  : '2023-01-17',url: 'https://www.youtube.com/watch?v=77q4q-nFbtk'},
                    {title  : '💜❤️首次合體直播',start  : '2023-01-19',url: 'https://www.youtube.com/watch?v=UDIzY6Td6tE'},
                    {title  : '❤️第一次穿模',start  : '2023-01-19',url: 'https://youtu.be/UDIzY6Td6tE?t=3438'},
                    {title  : '💜🖤首次合體直播',start  : '2023-01-26',url: 'https://www.youtube.com/watch?v=tPxQxG_EwuY'},
                    {title  : '💙❤️首次合體直播',start  : '2023-01-27',url: 'https://www.youtube.com/watch?v=nVN7D592AHQ'},
                    {title  : '💗第一次穿模',start  : '2023-01-31',url: 'https://youtu.be/EJZVUSEdAEs?t=4581'},
                    {title  : '🖤第一次穿模',start  : '2023-02-02',url: 'https://youtu.be/kesVq5r04dI'},
                    {title  : '은호 - She‘s a Baby',start  : '2023-02-06',url: 'https://www.youtube.com/watch?v=MnAUvaxbNrk'},
                    {title  : '노아 - Wherever you are',start  : '2023-02-10',url: 'https://youtu.be/qchEkwlEZSI'},
                    {title  : '💙🖤首次合體直播',start  : '2023-02-14',url: 'https://www.youtube.com/watch?v=ZBpsSjRlhZA'},
                    {title  : '💜💗首次合體直播',start  : '2023-02-15',url: 'https://www.youtube.com/watch?v=xFBWRtre08c'},
                    {title  : '💗🖤首次合體直播',start  : '2023-02-21',url: 'https://www.youtube.com/watch?v=cUas9kEwdWE'},
                    {title  : '❤️🖤首次合體直播',start  : '2023-02-23',url: 'https://www.youtube.com/watch?v=UwAcgi9e0s4'},
                    {title  : '💜第一次穿模',start  : '2023-03-31',url: 'https://www.youtube.com/watch?v=PyySFakt-_I'},
                    {title  : '第一次五人直播',start  : '2023-04-24',url: 'https://www.youtube.com/watch?v=70A1q7oVD7M&t=315s'},
                    {title  : '出道100日+PLLI生日',start  : '2023-06-19',url: 'https://www.youtube.com/watch?v=3MOqTFKWQDA&t=724s'},
                    {title  : '舞蹈45位出爐',start  : '2023-06-26',url: 'https://www.youtube.com/watch?v=al0Af_vgWLg）'},
                    {title  : '🖤贏了威廉得到PS',start  : '2023-07-21',url: 'https://www.youtube.com/watch?v=D7xKXrcpPOc&t=5256s）'},
                    {title  : '一起過中秋節',start  : '2023-09-25',url: 'https://www.youtube.com/watch?v=P1Jm7QauVO0'},
                    {title  : '斑LINE成立',start  : '2023-10-13',url: 'https://www.youtube.com/watch?v=JFjl62lfMWA'},
                    {title  : '河玟加入斑LINE一週',start  : '2023-10-19',url: 'https://www.youtube.com/watch?v=EuTL6rbchTs'},
                    {title  : '💗得到大西瓜',start  : '2023-11-20',url: 'https://www.youtube.com/watch?v=bUfy-WQCMZ0&t=7444s）'},
                    {title  : '一起跨年',start  : '2023-12-31',url: 'https://www.youtube.com/watch?v=oGDeUi8cdUI&t=10s'},
                    {title  : '❤️ - Loving You Girl',start  : '2023-03-30',url: 'https://www.youtube.com/watch?v=6t76i9ksZJE'},
                    {title  : '💙 - 벚꽃 엔딩 ',start  : '2023-04-01',url: 'https://www.youtube.com/watch?v=I-RG_sVNPAA'},
                    {title  : '💙 - 난춘 (亂春)',start  : '2023-04-16',url: 'https://www.youtube.com/watch?v=kAAcl3nIe24'},
                    {title  : '💜 & 🖤 - Love me or Leave me',start  : '2023-06-04',url: 'https://www.youtube.com/watch?v=u1Wp2coFDB4'},
                    {title  : '💙 - 취기를 빌려',start  : '2023-05-04',url: 'https://www.youtube.com/watch?v=xMM-rpJ_5vM'},
                    {title  : '❤️ - 이 밤을 빌려 말해요',start  : '2023-05-07',url: 'https://www.youtube.com/watch?v=1vcSpgCuQXU'},
                    {title  : '🖤 - 오르막길',start  : '2023-05-10',url: 'https://www.youtube.com/watch?v=4bkEAGNFrf4'},
                    {title  : '💜 - 나의 마음에',start  : '2023-05-15',url: 'https://www.youtube.com/watch?v=Hqvz_3-iP2Q'},
                    {title  : '💗 - 사건의 지평선',start  : '2023-05-21',url: 'https://www.youtube.com/watch?v=HQwhA_apoUY'},
                    {title  : '💙 - Sunday Morning ',start  : '2023-05-21',url: 'https://cafe.daum.net/plave/ab6O/178'},
                    {title  : '❤️ - UNDERSTAND',start  : '2023-05-22',url: 'https://www.youtube.com/watch?v=UFGpKtMx98U'},
                    {title  : '❤️- 아니야 걘 ',start  : '2023-06-04',url: 'https://cafe.daum.net/plave/ab6O/207'},
                    {title  : '❤️ - 책을 넘기는 듯한 마음으로',start  : '2023-06-12',url: 'https://www.youtube.com/watch?v=1Q2lMLA4lhw'},
                    {title  : '💙 - 우리가 맞다는 대답을 할 거예요',start  : '2023-04-29',url: 'https://www.youtube.com/watch?v=FgzN6v5ZbXA'},
                    {title  : '💙 - 가끔 연락하던 애',start  : '2023-07-01',url: 'https://www.youtube.com/watch?v=Mya0LYrRgX4'},
                    {title  : '💙 - yours',start  : '2023-07-01',url: 'https://www.youtube.com/watch?v=iv9rmTEaECw'},
                    {title  : '❤️ - Love Again',start  : '2023-07-02',url: 'https://www.youtube.com/watch?v=Utn0XMzxhlw'},
                    {title  : '❤️ - 아직도 좋아해',start  : '2023-07-02',url: 'https://www.youtube.com/watch?v=NsAadNTR5EU'},
                    {title  : '💙 & ❤️ - Your Dog Loves You',start  : '2023-07-02',url: 'https://cafe.daum.net/plave/ab6O/246'},
                    {title  : '❤️-킬링 썸머',start  : '2023-07-05',url: 'https://cafe.daum.net/plave/ab6O/247'},
                    {title  : '💜 - 걘 아니야',start  : '2023-07-05',url: 'https://cafe.daum.net/plave/ab6O/251'},
                    {title  : '❤️ & 🖤-RINDAMAN',start  : '2023-07-16',url: 'https://cafe.daum.net/plave/ab6O/255'},
                    {title  : '노아 - ベテルギウス',start  : '2023-07-17',url: 'https://youtu.be/jDQ4-C4AHmA?si=eDHXu7FOBl27i2XX'},
                    {title  : '❤️ -좋을텐데',start  : '2023-07-29',url: 'https://cafe.daum.net/plave/ab6O/262'},
                    {title  : '💜 - 붕붕',start  : '2023-08-06',url: 'https://cafe.daum.net/plave/ab6O/270'},
                    {title  : '💗 - Versace On The Floor ',start  : '2023-08-08',url: 'https://cafe.daum.net/plave/ab6O/271'},
                    {title  : '💙 - summer ',start  : '2023-08-09',url: 'https://cafe.daum.net/plave/ab6O/273'},
                    {title  : '❤️ - 중독된 사랑',start  : '2023-08-21 ',url: 'https://cafe.daum.net/plave/ab6O/275'},
                    {title  : '❤️ - 물론',start  : '2023-09-13',url: 'https://cafe.daum.net/plave/ab6O/294'},
                    {title  : '💗 - Square',start  : '2023-09-16',url: 'https://cafe.daum.net/plave/ab6O/296'},
                    {title  : '💙 - Love Lee',start  : '2023-09-22',url: 'https://cafe.daum.net/plave/ab6O/299'},
                    {title  : '❤️ - Violet ',start  : '2023-10-08',url: 'https://cafe.daum.net/plave/ab6O/306'},
                    {title  : '🖤 - 플리를 만난 Me After You',start  : '2023-11-01',url: 'https://cafe.daum.net/plave/ab6O/319'},
                    {title  : '❤️ -그대만 있다면 ',start  : '2023-11-04',url: 'https://cafe.daum.net/plave/ab6O/322'},
                    {title  : '❤️ -Snooze',start  : '2023-11-19',url: 'https://cafe.daum.net/plave/ab6O/326'},
                    {title  : '💜 - 왜요',start  : '2023-11-21',url: 'https://cafe.daum.net/plave/ab6O/327'},
                    {title  : '예준 & 하민 - 너의 바다',start  : '2023-11-23',url: 'https://www.youtube.com/watch?v=rxkFg3Rgxqw'},
                    {title  : '💗 - LOVE',start  : '2023-11-24',url: 'https://cafe.daum.net/plave/ab6O/328'},
                    {title  : '💙 - Do It',start  : '2023-11-26',url: 'https://cafe.daum.net/plave/ab6O/329'},
                    {title  : '❤️ -Angels Speak',start  : '2023-11-27',url: 'https://cafe.daum.net/plave/ab6O/330'},
                    {title  : '❤️ -내게 오는 길',start  : '2023-12-09',url: 'https://cafe.daum.net/plave/ab6O/331'},
                    {title  : '💗 - 12월의 기적',start  : '2023-12-30',url: 'https://weverse.io/plave/artist/0-132187217'},
                    {title  : '💙 - 위로',start  : '2024-01-04',url: 'https://weverse.io/plave/artist/3-145658555'},
                    {title  : '💜 - Hype boy',start  : '2024-01-19',url: 'https://weverse.io/plave/artist/4-147930876'},
                    {title  : '💜 & 💗 - Dangerously',start  : '2024-02-10',url: 'https://weverse.io/plave/artist/3-150921021'},
                ],
            },
            {//plave
                color: '#4563d3',
                borderColor: '#4563d3',
                textColor: 'white',
                events: [
                    {title  : 'PLAVE出道',start  : '2023-03-12'},
                    {title  : '《ASTERUM》發行',start  : '2023-03-12',url: 'https://www.youtube.com/watch?v=cFm8fTRW_so'},
                    {title  : 'PLAVE出道舞台',start  : '2023-03-18',url: 'https://www.youtube.com/watch?v=T_gJpnjJsnk'},
                    {title  : '《왜요왜요왜?》發行',start  : '2023-05-25',url: 'https://www.youtube.com/watch?v=Q_TzqcWKz00'},
                    {title  : '《왜요왜요왜?》舞台',start  : '2023-06-03',url: 'https://www.youtube.com/watch?v=7H7daeeZ_bo'},
                    {title  : '《ASTERUM : The Shape of Things to Come》發行',start  : '2023-08-24',url: 'https://www.youtube.com/watch?v=c_yCRwh97M8'},
                    {title  : '《六夏》舞台',start  : '2023-08-26',url: 'https://www.youtube.com/watch?v=dE_ddOigeZA'},
                    {title  : '플레이브 - 예뻤어',start  : '2023-11-03',url: 'https://www.youtube.com/watch?v=8DrQDURiYeQ'},
                    {title  : '《Merry PLLIstmas》發行',start  : '2023-12-12',url: 'https://www.youtube.com/watch?v=KCT3ZagR9-M'},
                    {title  : '《ASTERUM : 134-1》發行',start  : '2024-02-26',url: 'https://www.youtube.com/watch?v=P0_Hn0DSTKY'},
                    {title  : '《Show Champion》首次一位',start  : '2024-03-06',url: 'https://twitter.com/showchampion1/status/1765317215849464070'},
                    {title  : '🎉出道一週年🎉',start  : '2024-03-12'},
                ]
            },
            {//諾亞
                color: '#c046d6',
                borderColor: '#c046d6',
                textColor: 'white',
                events: [
                    {title  : 'Noah🎂',start  : '2023-02-10',url: 'https://www.youtube.com/watch?v=Djuo-6HEeLI'},
                    {title  : 'Noah🎂',start  : '2024-02-10',url: 'https://www.youtube.com/watch?v=38aLufC1Esw'},
                ]
            },
            {//藝俊
                color: '#438aff',
                borderColor: '#438aff',
                textColor: 'white',
                events: [
                    {title  : 'Yejun🎂',start  : '2023-09-12',url: 'https://www.youtube.com/watch?v=U007Uc9N9sU'},
                ]
            },
            {//斑比
                color: '#ff70b7',
                borderColor: '#ff70b7',
                textColor: 'white',
                events: [
                    {title  : 'Bamby🎂',start  : '2023-07-15',url: 'https://www.youtube.com/watch?v=RMU-s7c-qrY'},
                ]
            },
            {//銀虎
                color: '#df4255',
                borderColor: '#df4255',
                textColor: 'white',
                events: [
                    {title  : 'Eunho🎂',start  : '2023-05-24',url: 'https://www.youtube.com/watch?v=Hwi0lWMIqXg'},
                ]
            },
            {//哈民
                color: '#3b3a3a',
                borderColor: '#3b3a3a',
                textColor: 'white',
                events: [
                    {title  : 'Hamin🎂',start  : '2023-11-01',url: 'https://www.youtube.com/watch?v=XGPFGClyQQk'},
                ]
            }
        ],
    });
    calendar.render();
});