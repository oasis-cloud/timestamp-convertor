window.onload = function(){
		
	function TimeConvert() {
		this.$input = document.querySelector('#js-input')
		this.$output = document.querySelector('#js-output')
		this.init();
	}
	function handleTime(data) {
		var tempdata = Number(data),
			result;

		if(tempdata == tempdata) {
			result = covert2dateTime(tempdata)
		} else {
			result = covert2timeStamp(data)
		}
		return result;
	}
	function covert2dateTime(data) {
		var date;
		if(data < 1000000000 || data > 10000000000) return ''

		date = new Date(data * 1000)

		return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
	}
	function covert2timeStamp(data) {
		var date, mresult = data.toString().match(/^([0-9]{4})\-([0-9]{1,2})\-([0-9]{1,2})\s+([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})$/);
			
		if(
			!mresult
			|| mresult.length != 7 
			|| Number(mresult[1]) < 1000
			|| Number(mresult[2]) > 12
			|| Number(mresult[2]) <= 0
			|| Number(mresult[3]) > 31
			|| Number(mresult[3]) == 0
			|| Number(mresult[4]) > 24
			|| Number(mresult[5]) > 59
			|| Number(mresult[6]) > 59
		) return ''

		date = new Date(data);
		return date.getTime() / 1000;
	}

	TimeConvert.prototype = {
		init: function() {
			this.getCurrentTime()
			this.getCurrentTimeStamp()
			this.$input.placeholder = this.timeStamp
			this.$output.placeholder = this.dateTime
			this.bindEvent()
		},
		renderCurrentTimeStamp: function() {
			this.$input.value = this.timeStamp
		},
		renderCurrentDateTime: function() {
			this.$output.value = this.dateTime
		},
		getCurrentTimeStamp: function() {
			var timeStamp = Math.floor(new Date().getTime() / 1000);
			this.timeStamp = timeStamp;
		},
		getCurrentTime: function() {
			var date = new Date();
			this.dateTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		},
		bindEvent: function() {
			var that = this
			this.$input.addEventListener('blur', function(e){
				// console.log(this)
				var output;
				if(this.value) {
					output = handleTime(this.value)
					that.$output.value = output
				}
			}, false)
		}
	}
	new TimeConvert()
}
