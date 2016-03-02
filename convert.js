window.onload = function(){
		
		function timeConvert() {
			this.$inputtime = document.querySelector("#inputtime");
			this.$submit = document.querySelector("#submit");
			this.$outputtime = document.querySelector("#outputtime");
			this.$err = document.querySelector(".err");
			this.init();
		}
		timeConvert.prototype.init = function() {
			// body...
			this.$inputtime.value = this.getCurrentTimeStamp();
			this.bindCovert();
		}
		timeConvert.prototype.bindCovert = function() {
			var _this = this;
			this.$submit.addEventListener("click", function(evt){
				evt.stopPropagation();
				evt.preventDefault();
				_this.renderDate();
			}, false);
		}
		timeConvert.prototype.renderDate = function() {
			var date;
			
			if(this.$inputtime.value.length != 10 && this.$inputtime.value.length != 13) {
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
			
			this.$outputtime.value = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "/ " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		}
		timeConvert.prototype.getCurrentTimeStamp = function() {
			var timeStamp = Math.floor(new Date().getTime() / 1000);
			return timeStamp;
		}
		new timeConvert();
	}
