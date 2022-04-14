function dateFormatterOnKyPress(element,format){
    var tempId = $(element).attr('id');
    var tempValue =  $(element).val();
    var positionMap = getIndexOfSeparator(format);
    /*var firstPosition =  ((positionMap.get('0'))+'').toString().split(',');
    console.log(firstPosition);*/
       if (tempValue.length == ((positionMap.get('0')).split(','))[0]){
                
            $('#'+tempId).val(tempValue+((positionMap.get('0')).split(','))[1]);
            
       }
       if (tempValue.length == ((positionMap.get('1')).split(','))[0]){
        
            $('#'+tempId).val(tempValue+((positionMap.get('0')).split(','))[1]);
       }               
}

function dateFormatOnInput(element,format){
    var tempValue = $(element).val();

       if (tempValue.length > 5 && (/^[0-9]*$/.test(tempValue))){
            var positionMap = getIndexOfSeparator(format);        
            appendValue = "";
            for(var i=0; (i <= tempValue.length && appendValue.length <10); i++){
                appendValue = appendValue+tempValue.substring(i,i+1);   
                
                if(appendValue.length == ((positionMap.get('0')).split(','))[0] ){
                    appendValue += ((positionMap.get('0')).split(','))[1];

                }
                
                if (appendValue.length == ((positionMap.get('1')).split(','))[0] ){
                    appendValue += ((positionMap.get('0')).split(','))[1];
                }
            }
            
            $(element).val(appendValue);
       }
}

function getIndexOfSeparator(format){
        
        var tempFormat = "";
        var symbolCounter = 0;
        var symbolCounterMap = new Map();
        for(var i=0;i < format.length;i++){
            tempFormat = format.substring(i,i+1);
            if(tempFormat == "/" || tempFormat == "-"){
                symbolCounterMap.set(''+symbolCounter+'',i+','+(tempFormat == "-" ? "-" : "/"));
                symbolCounter++;
            }
        }
        
    return symbolCounterMap;
}