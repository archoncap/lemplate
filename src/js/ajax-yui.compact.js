(function(){Jemplate.Ajax={get:function(A,B){if(typeof B=="function"){B={success:B}}YAHOO.connect.asyncRequest("GET",A,B)},processGet:function(A,B){this.get(A,function(C){process(YAHOO.lang.JSON.parse(C))})},post:function(A,B,C){if(typeof C=="function"){C={success:C}}YAHOO.connect.asyncRequest("POST",A,C,B)}}}())