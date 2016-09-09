import React, { Component } from 'react'
import { PageTransition } from '../util/transitions'
import $ from 'jquery'

class Countdown extends Component {

  handleWatchLive() {
    document.body.classList.toggle('watch-live-active')
  }

  render() {
		$(document).ready(function() {
		  var msDay   = 86400000,
		      msHour  = 3600000,
		      msMin   = 60000,
		      msSec   = 1000,
		      conDate = new Date(),
		      $days = $('.days'),
		      $hours = $('.hours'),
		      $mins = $('.mins'),
		      $sec = $('.sec');

		  conDate.setMonth(8);
		  conDate.setDate(13);
		  conDate.setYear(2016);
		  conDate.setHours(8, 0, 0);

		  function SplitDiff(time) {
		    var nums = '',
		        remainder = 0;

		    nums = Math.floor(time / msDay);
		    remainder = time % msDay;

		    nums += ':' + Math.floor(remainder / msHour);
		    remainder = remainder % msHour;

		    nums += ':' + Math.floor(remainder / msMin);
		    remainder = remainder % msMin;

		    nums += ':' + Math.floor(remainder / msSec);

		    return nums.split(':');
		  }

		  function DisplayTime(splitTime) {
		    $days.html(splitTime[0]);
		    $hours.html(splitTime[1]);
		    $mins.html(splitTime[2]);
		    $sec.html(splitTime[3]);
		  }

		  function loop() {
		    var splitTime;
		    splitTime = SplitDiff(conDate - Date.now());
		    DisplayTime(splitTime);

		    setTimeout(loop, 1000);
		  }

		  loop();
		});
    return (
    <PageTransition>
			<section className="countdown">
				<span className="days">29</span>
				<span className="separator">|</span>
				<span className="hours">08</span>
				<span className="separator">|</span>
				<span className="mins">23</span>
				<span className="separator">|</span>
				<span className="sec">45</span>
        {/* <div>
          <a href="#" onClick={this.handleWatchLive}>(watch live)</a>
        </div> */}
			</section>
		</PageTransition>
    )
  }
}

export default Countdown
