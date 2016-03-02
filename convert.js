window.onload = function(){
		
		function timeConvert() {
			this.$inputtime = document.querySelector("#inputtime");
			this.$submit = document.querySelector("#submit");
			this.$outputtime = document.querySelector("#outputtime");
			this.init();
		}
		timeConvert.prototype.init = function() {
			// body...
			this.$inputtime.value = this.getCurrentTimeStamp();
			this.bindCovert();
		}
		timeConvert.prototype.bindCovert = function() {
			var _this = this;
			_this.$submit.addEventListener("click", function(evt){
				evt.stopPropagation();
				evt.preventDefault();
				if(_this.$inputtime.value.length != 10) {
					alert("你为什么不输入正确的时间戳呀！！！");
					return;
				}
				if(!_this.$inputtime.value) {
					alert("你到是输入时间戳呀！！！");
					return;
				}
				var date = new Date(Number(_this.$inputtime.value) * 1000)
				
				_this.$outputtime.value = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "/ " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

			}, false);
		}
		timeConvert.prototype.getCurrentTimeStamp = function() {
			var timeStamp = Math.floor(new Date().getTime() / 1000);
			return timeStamp;
		}
		new timeConvert();
	}
