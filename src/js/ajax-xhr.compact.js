(function(){Jemplate.Ajax={get:function(A,C){var B=new XMLHttpRequest();B.open("GET",A,Boolean(C));return this.request(B,null,C)},processGet:function(A,B){this.get(A,function(C){process(Jemplate.JSON.parse(C))})},post:function(A,C,D){var B=new XMLHttpRequest();B.open("POST",A,Boolean(D));B.setRequestHeader("Content-Type","application/x-www-form-urlencoded");return this.request(B,C,D)},request:function(A,B,C){if(C){A.onreadystatechange=function(){if(A.readyState==4){if(A.status==200){C(A.responseText)}}}}A.send(B);if(!C){if(A.status!=200){throw ('Request for "'+url+'" failed with status: '+A.status)}return A.responseText}return null}}}())