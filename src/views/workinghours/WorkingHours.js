import React from 'react'
import axios from 'axios'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
const localizer = momentLocalizer(moment);
// var i;
// var data = new Array();
// const resarr = [];
// const dates = () => {
//     var bodyFormData = new FormData()
//     bodyFormData.append('username', localStorage.getItem("username"))
//     axios({
//         method: 'post',
//         url: 'http://localhost/ADMINPANEL_LOGINAPI/calendar_api.php',
//         data: bodyFormData,
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     }).then(function (response) {
//         if (response && response.data.success === true) {
//             i = response.data.index;
//             data = response.data.arr;
//             for (var k = 0; k < i; k++) {
//                 resarr[k] = {};
//                 resarr[k]['title'] = "Login Time : " + data[k]['logintime'] + "Logout Time : " + data[k]['logouttime'];
//                 resarr[k]['start'] = data[k]['date'];
//                 resarr[k]['end'] = data[k]['date'];
//             }
//             console.log("1");
//         }
//         else {
//             console.log("fail");
//         }
//     }).catch(function (response) {
//         console.log("error")
//     })
// }
// if (localStorage.getItem("logouttime") === "00:00:00") {
//     var res = "";
// }
// else {
//     res = localStorage.getItem("logouttime");
// }
// const myEventList = ()=>{
// for(var k = 0; k < i; k++) {
//     myEventsList[0]['title'] =  "Login Time : " + data[k]['logintime'] + "\n" + "Logout Time : " + data[k]['logouttime']
//     myEventsList[0]['start'] = data[k]['date']
//     myEventsList[0]['end'] = data[k]['date']
// }
// }
// const myEventsList = [
//     {
//         title: "Login Time : " + localStorage.getItem("logintime"),
//         start: new Date(),
//         end: new Date()
//     },
//     {
//         title: "Logout Time : " + res,
//         start: new Date(),
//         end: new Date()
//     }
// ];


export default function WorkingHours() {
    
    var i;
    var data = new Array();
    const resarr = [];
    const dates = () => {
        var bodyFormData = new FormData()
        bodyFormData.append('username', localStorage.getItem("username"))
        axios({
            method: 'post',
            url: 'http://localhost/ADMINPANEL_LOGINAPI/calendar_api.php',
            data: bodyFormData,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then(function (response) {
            if (response && response.data.success === true) {
                i = response.data.index;
                data = response.data.arr;
                for (var k = 0; k < i; k++) {
                    resarr[k] = {};
                    resarr[k]['title'] = "Login Time : " + data[k]['logintime'] + " Logout Time : " + data[k]['logouttime'];
                    resarr[k]['start'] = data[k]['date'];
                    resarr[k]['end'] = data[k]['date'];
                }
                console.log("1");
            }
            else {
                console.log("fail");
            }
        }).catch(function (response) {
            console.log("error")
        })
    }
    return (
        <center><div className='my-5' onLoad={dates()}>
            <Calendar
                localizer={localizer}
                events={resarr}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 650 }}
            />
        </div></center>
    )
}
