import { DateTime } from "https://cdn.skypack.dev/luxon@2.2.0";

const resources=[{name:"Resource 1",id:1,},];

const jobs=[{name:"Job 1",id:1,},];

const tasks=[{name:"Task 1",id:1,durationInMinutes:540,resourcesRequired:1,},{name:"Task 2",id:2,durationInMinutes:1080,resourcesRequired:1,},];

const jobTasks=[{id:1,jobId:1,taskId:1,},{id:2,jobId:1,taskId:2,},];

const resourceJobTasks=[{jobTaskId:1,resourceId:1,id:1,},];

const timeChunks=[{id:1,resourceJobTask:1,start:"2023-01-01T09:00:00.000Z",end:"2023-01-01T17:00:00.000Z",durationInMinutes:480,},{id:2,resourceJobTask:1,start:"2023-01-02T09:00:00.000Z",end:"2023-01-02T10:00:00.000Z",durationInMinutes:60,},];

type Subevent = {start: number; duration: number;}
function breakEventTimeChunks(startTime:DateTime,durationMinutes:number,timeZone:string):Subevent[]{const subevents:Subevent[]=[];const workingStartHour=9;const workingEndHour=17;const minutesInAWorkingDay=(workingEndHour-workingStartHour)*60;let remainingDuration=durationMinutes;let currentDateTime=startTime.setZone(timeZone);while(remainingDuration>0){if(currentDateTime.weekday>5||currentDateTime.hour>=workingEndHour){currentDateTime=currentDateTime.plus({days:1}).set({hour:workingStartHour,minute:0,second:0,millisecond:0});continue}const timeUntilEndOfWorkingDay=(workingEndHour*60)-(currentDateTime.hour*60+currentDateTime.minute);const subeventDuration=Math.min(remainingDuration,timeUntilEndOfWorkingDay);subevents.push({start:currentDateTime.toMillis()||"",duration:subeventDuration||0});remainingDuration-=subeventDuration;currentDateTime=currentDateTime.plus({minutes:subeventDuration})}return subevents}

const newResourceJobTask = {jobTaskId: 2, resourceId: 1, id: 2,};
const newResourceJobTaskStartTime = DateTime.fromISO("2023-01-01T09:00:00.000Z");
const newResourceJobTaskDurationInMinutes = 1080;
const newResourceJobTaskTimeZone = "America/Detroit";

const newResourceJobTaskTimeChunks = breakEventTimeChunks(newResourceJobTaskStartTime, newResourceJobTaskDurationInMinutes, newResourceJobTaskTimeZone);




