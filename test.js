function markAttended(uid, ...date) {
	Date d = new Date();
	if (date[0] != null) {
		d = date[0];
	}
	d.setHours(0,0,0,0);
	if (!checkAttendance(uid,d)) {
		callApi.markAttended(uid,d);
	}
}

function removeAttended(uid, date) {
	//DELETE from MEMBER_TIMELOG where member = {uid} and date = {date}
}

function addUser(uid, uname) {
	callApi.addUser(uid, uname);
}

function checkAttendance(uid, date) {
	return true;
}

function listUsers() {

}

markAttended(uid,date) {
	var data = {
		member:uid,
		date:date
	};
}

//----- firebase DB

function getTimeLogData(date, activity, uid) {
	var ref = firebase.database().ref("member_timelog");
	ref.orderByChild("date").equalTo(date);
	ref.orderByChild("class").equalTo(activity);
	ref.orderByChild("member").equalTo(uid);
}

function writeTimeLogData(uid, date, activity = 'Boxing') {
  firebase.database().ref('member_timelog/' + date).set({
    activity: {
    	"uid" : uid 
    }
  }, function(error) {
    if (error) {
      // The write failed...
    } else {
      // Data saved successfully!
    }
  });
}

function deleteTimeLogData() {

}
