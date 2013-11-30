$(function(){
		//variables
		var 
		now = new Date(),
		qObj = getQueryObj(),
		txtDate = $("#date"),
		selCity = $("#city"),
		lnkSearch = $("#search"),
		first_tds = $(".report-item table tr td:first-child");

		//Initialize effect and keep status
		txtDate.val(dateFormat(now)).datepicker({ dateFormat: "yy-mm-dd", maxDate:0});
		qObj.date && txtDate.val(qObj.date);
		qObj.area && selCity.val(qObj.area);

		//Control the first column of table
		first_tds.each(function(){
			
			$(this).hover(function(ev){
				s_tip.addClass("doubt");
			},function(){
				s_tip.removeClass("doubt doubt-hover");
			});

			var s_tip = $(this).children("span");
			s_tip.hover(function(){
				$(this).addClass("doubt-hover");
			},function(){
				$(this).attr("title","").removeClass("doubt-hover");
			}).tooltip({
			    show: {
			    	effect: "slideDown",
			        delay: 250
			    }
			});
		});

		//Bind click event to search link
		lnkSearch.bind("click",function(ev){
			var 
			id = qObj && qObj.id,
			date = encodeURIComponent(txtDate.val()),
			city = encodeURIComponent(selCity.val()),
			url = "report_detail?id="+encodeURIComponent(id)+"&date="+date+"&area="+city+"";
			location.href = url;
			ev.preventDefault();
			//$.get(url,null,function(data){},json);
		});
		
		//Convert the query string to key/value pairs
		function getQueryObj() {
		    var 
		    args = {},
		    item = null, 
		    name = null, 
		    value = null,
		    queryString = (location.search.length) ? location.search.substring(1) : '',
		    items = queryString.split('&');
		    if (items) {
		        for (var i = 0, len = items.length; i < len; i++) {
		            item = items[i].split('=');
		            name = decodeURIComponent(item[0]);
		            value = decodeURIComponent(item[1]);
		            args[name] = value;
		        };
		    } else {}
		    return args;
		};

		//Get the special date format like "2013-11-21"
		function dateFormat(date){
			if(Object.prototype.toString.call(date)==="[object Date]"){
				return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
			}else{}
		};
	});