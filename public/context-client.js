function Context(options,callback){
    var interval = options.interval||1;
    //this.maxDuration = options.maxDuration || null;
    var useMicrophone = options.microphone || false;
    var data ={};
	this.contexts=[];
	this.onContextChangeCallback = callback;
	//console.log(options);
    if(navigator.geolocation){
        var timer = setInterval(function(){
        
            navigator.geolocation.getCurrentPosition(function(position){
                data.location = position.coords.latitude +","+ position.coords.longitude;
                //alert(data.location);
				getContext(data);
                
            });
        },interval*1000);   
    
        
    }
    
    var that = this;
    
	if(this.maxDuration !=null || this.maxDuration != undefined){
	    setTimeout(function(){
	        that.destroy();
	    },maxDuration*1000)
	}
	
	var getContext=function(data){

		$.ajax({
			type:"post",
			url:"/collect",
			data:"location="+data.location,
			success:function(data)
			{
				console.log(data);
				that.contexts.push(data);
				that.onContextChangeCallback(data);
			}
			
		});
	};
    //this.context1=context1;
    this.timer = timer;
	
    
    return this;
}

Context.prototype.destroy = function(){
  clearInterval(this.timer);  
};

//usage
//var ct = new Context({interval:"20"});