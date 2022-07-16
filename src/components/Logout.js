import React from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
function tConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(''); // return adjusted time or original string
}
export default function logout() {
    localStorage.setItem("flag", true);
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    time = tConvert(time);
    var username = localStorage.getItem('username');
    let date = new Date().toJSON().slice(0, 10);
    var bodyFormData = new FormData()
    bodyFormData.append('username', username)
    bodyFormData.append('logouttime', time)
    bodyFormData.append('date', date)
    axios({
      method: 'post',
      url: 'http://localhost/ADMINPANEL_LOGINAPI/logouttime_api.php',
      data: bodyFormData,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).then(function (response) {
      if (response && response.data.success === true) {
      }
    })
      .catch(function (response) {
        console.log(response)
      })
      localStorage.clear();
    return (
        <div>
            
            return <Redirect exact to='/login' />
        </div>
    )
}
