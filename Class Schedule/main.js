var sunday = {
    totalSubjects: 1,
    subjects: ['None'],
    times: ['None'],
    teachers: ['None'],
    rooms: ['None']
}

var monday = {
    totalSubjects: 2,
    subjects: [
        'SOCS2a',
        'CSPC60'
    ],
    times: [
        '7:30 - 10:30',
        '10:30 - 2:00'
    ],
    startTimeHour: [
        7,
        10
    ],
    startTimeMin: [
        30,
        30
    ],
    teachers: [
        '?',
        'J. Perea'
    ],
    rooms: [
        'Room 326',
        'Room 224'
    ]
}

var tuesday = {
    totalSubjects: 2,
    subjects: [
        'NSTP2',
        'CSPC15'
    ],
    times: [
        '7:30 - 10:30',
        '12:00 - 3:00'
    ],
    teachers: [
        '?',
        'G. G. Galos'
    ],
    rooms: [
        '?',
        'Room 319'
    ]
}

var wednesday = {
    totalSubjects: 1,
    subjects: ['None'],
    times: ['None'],
    teachers: ['None'],
    rooms: ['None']
}

var thursday = {
    totalSubjects: 3,
    subjects: [
        'CSPC57',
        'SOCS8',
        'CSPC57'
    ],
    times: [
        '7:30 - 10:30',
        '10:30 - 2:00',
        '2:00 - 4:00'
    ],
    teachers: [
        'G. T. Dimaranan',
        'J. Pereyra',
        'G. T. Dimaranan'
    ],
    rooms: [
        'Computer Laboratory 3',
        'Room 220',
        'Room 407'
    ]
}

var friday = {
    totalSubjects: 3,
    subjects: [
        'PHED2',
        'PROG3',
        'PROG3'
    ],
    times: [
        '8:00 - 10:00',
        '10:00 - 1:00',
        '2:00 - 4:00'
    ],
    teachers: [
        'J. Romera',
        'A. M. Reyes',
        'A. M. Reyes'
    ],
    rooms: [
        'Gym',
        'Computer Laboratory2',
        'Room 411'
    ]
}

var saturday = {
    totalSubjects: 4,
    subjects: [
        'PROG2',
        'PROG2',
        'COSC21',
        'COSC21'
    ],
    times: [
        '7:00 - 10:00',
        '10:30 - 12:30',
        '1:00 - 4:00',
        '4:00 - 6:00'
    ],
    teachers: [
        'R. I. Maranan',
        'R. I. Maranan',
        'S. D. Samson',
        'S. D. Samson'
    ],
    rooms: [
        'Computer Laboratory 5',
        'Room 411',
        'Computer Laboratory 3',
        'Room 400'
    ]
}

var schedules = [
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
];

var schedules = [
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
];

var divIdList = [
    'subCont0',
    'subCont1',
    'subCont2',
    'subCont3'
];

var subList = [
    'subText0',
    'subText1',
    'subText2',
    'subText3'
];

var timeList = [
    'timeText0',
    'timeText1',
    'timeText2',
    'timeText3'
];

var teacherList = [
    'teacherText0',
    'teacherText1',
    'teacherText2',
    'teacherText3'
]

var roomList = [
    'roomText0',
    'roomText1',
    'roomText2',
    'roomText3'
]

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var d = days[today.getDay()];

    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('dayText').innerHTML = d + " " + check12Hour(h) + ":" + m + ":" + s + ' ' + getMeridiem(h);
    t = setTimeout('startTime()',500);
    getSchedule();
}

function checkTime(i) {
    if (i<10)
    {
    i="0" + i;
    }
    return i;
}

function check12Hour(i) {
    if (i > 12) {
        return i - 12;
    }
    else {
        return i
    }
}

function getMeridiem(i) {
    if (i >= 12) {
        return 'PM';
    }
    else {
        return 'AM';
    }
}

function getSchedule() {
    const dateObject = new Date();
    var currentDay = schedules[dateObject.getDay()];
    var subjectCount = currentDay['totalSubjects'];
    var subjectIndex = 0;

    for (let i = 0; i < subjectCount; i ++) {
        document.getElementById(divIdList[i]).style.display = 'grid';
        
        //sets the subject
        var currentSub = currentDay['subjects'][subjectIndex];
        var targetPTag = subList[subjectIndex];
        document.getElementById(targetPTag).innerHTML = currentSub;

        //sets the subject time
        var currentTime = currentDay['times'][subjectIndex];
        var targetPTag2 = timeList[subjectIndex];
        document.getElementById(targetPTag2).innerHTML = currentTime;

        //sets the teacher assigned
        var currentTeacher = currentDay['teachers'][subjectIndex];
        var targetPTag3 = teacherList[subjectIndex];
        document.getElementById(targetPTag3).innerHTML = currentTeacher;

        //sets the location
        var currentRoom = currentDay['rooms'][subjectIndex];
        var targetPTag4 = roomList[subjectIndex];
        document.getElementById(targetPTag4).innerHTML = currentRoom;
        
        if (subjectIndex < currentDay['subjects'].length) {
            subjectIndex ++;
        }
    }
}