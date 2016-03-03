window.onload = function(){
		
		function timeConvert() {
			this.$inputtime = document.querySelector("#inputtime");
			this.$submit = document.querySelector("#submit");
			this.$outputtime = document.querySelector("#outputtime");
			this.$err = document.querySelector(".err");

			this.$inputtime1 = document.querySelector("#inputtime1");
			this.$submit1 = document.querySelector("#submit1");
			this.$outputtime1 = document.querySelector("#outputtime1");
			this.$err1 = document.querySelector("#err1");
			this.init();
		}
		timeConvert.prototype.init = function() {
			// body...
			this.getCurrentTimeStamp();
			this.getCurrentTime();
			this.bindCovert();
		}
		timeConvert.prototype.bindCovert = function() {
			var _this = this;
			this.$submit.addEventListener("click", function(evt){
				evt.stopPropagation();
				evt.preventDefault();
				_this.renderDate();
			}, false);

			this.$submit1.addEventListener("click", function(evt){
				evt.stopPropagation();
				evt.preventDefault();
				_this.renderTimeStamp();
			}, false);

		}
		timeConvert.prototype.renderDate = function() {
			var date;
			
			if( !/^([0-9]+)$/.test(this.$inputtime.value) || (this.$inputtime.value.length != 10 && this.$inputtime.value.length != 13) ) {
				this.$err.style.display = "inline-block";
				this.$outputtime.value = '';
				this.$inputtime.focus();
				return;
			}

			if(this.$err.style.display == "inline-block") {
				this.$err.style.display = "none";	
			}
			
			if(this.$inputtime.value.length == 10) {
				date = new Date(Number(this.$inputtime.value) * 1000)
			} else if(this.$inputtime.value.length == 13) {
				date = new Date(Number(this.$inputtime.value))
			}
			
			this.$outputtime.value = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		}
		timeConvert.prototype.renderTimeStamp = function() {
			var date, matchRes = this.$inputtime1.value.match(/^([0-9]{4})\/([0-9]{1,2})\/([0-9]{1,2})\s+([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})$/);
			
			if(!matchRes || matchRes.length != 7 || Number(matchRes[1]) < 1000 || Number(matchRes[2]) > 12 || Number(matchRes[2]) <= 0 || Number(matchRes[3]) > 31 || Number(matchRes[3]) == 0 || Number(matchRes[4]) > 24 || Number(matchRes[5]) > 59 || Number(matchRes[6]) > 59) {
				this.$err1.style.display = "inline-block";
				this.$outputtime1.value = '';
				this.$inputtime1.focus();
				return;
			}
			if(this.$err1.style.display == "inline-block") {
				this.$err1.style.display = "none";	
			}
			date = new Date(this.$inputtime1.value);
			this.$outputtime1.value = date.getTime() / 1000;
		}
		timeConvert.prototype.getCurrentTime = function() {
			var date = new Date();
			this.$inputtime1.value = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		}
		timeConvert.prototype.getCurrentTimeStamp = function() {
			var timeStamp = Math.floor(new Date().getTime() / 1000);
			this.$inputtime.value = timeStamp;
		}
		new timeConvert();
}
