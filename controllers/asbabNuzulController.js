var v=0.01, fetchSura, format, findTopicsForSura, findTopicsForRef, findSurasForTopic, topicsAyahsMap, getSynonym, suraNames, synonyms, synonymdetails, SYNONYMS_INDEX, pageOffsets, whatsNew, letterStatus, getNextID, initTopicsAyahsMap, MaarifulQuraan, AsbabAlNuzul, MoharAliWordByWordQuraan;


//var myApp = angular.module('myApp', ["pageslide-directive"] );
//myApp.controller('asbabNuzulController', function asbabNuzulController( $scope, $route, $routeParams, $location, $http, $rootScope ){

var asbabNuzulController = function($scope, $route, $routeParams, $location, $http, $rootScope){
	//console.log('ayahsController ' + JSON.stringify($routeParams));

	$rootScope.asbabNuzulRefsData = ' 1:1-7 2:1-2 2:6 2:14 2:21 2:26 2:44 2:45 2:62 2:75 2:79 2:80 2:89 2:97 2:98 2:99 2:102 2:104 2:105 2:106 2:108 2:109 2:113 2:114 2:115 2:116 2:119 2:120 2:121 2:133 2:135 2:138 2:142 2:143 2:144 2:146 2:154 2:158 2:159 2:164 2:168 2:174 2:177 2:178 2:187 2:188 2:189 2:190 2:194 2:195 2:196 2:197 2:198 2:199 2:200 2:204 2:207 2:208 2:214 2:215 2:217 2:219 2:220 2:221 2:222 2:223 2:224 2:226 2:229 2:232 2:234 2:256 2:260 2:262 2:267 2:271 2:272 2:274 2:278 2:280 2:285 3:12 3:18 3:23 3:26 3:28 3:31 3:59 3:61 3:68 3:69 3:72 3:77 3:79 3:83 3:86 3:90 3:93 3:96 3:100 3:101 3:110 3:111 3:113 3:118 3:121 3:128 3:135 3:139 3:140 3:144 3:151 3:152 3:161 3:165 3:169 3:172 3:173 3:179 3:180 3:181 3:183 3:186 3:188 3:190 3:195 3:196 3:199 3:200 4:2 4:3 4:6 4:7 4:10 4:11 4:19 4:22 4:24 4:32 4:33 4:34 4:37 4:43 4:49 4:51 4:52 4:58 4:59 4:60 4:65 4:69 4:77 4:78 4:88 4:92 4:93 4:94 4:95 4:97 4:100 4:102 4:116 4:123 4:125 4:127 4:128 4:135 4:136 4:148 4:153 4:166 4:171 4:172 4:176 5:2 5:3 5:4 5:11 5:33 5:38 5:41-47 5:49 5:51 5:55 5:57 5:58 5:59 5:67 5:82-86 5:87 5:90 5:93 5:100 5:101 5:105 5:106 6:7 6:13 6:19 6:25 6:26 6:33 6:52 6:54 6:57 6:91 6:93 6:100 6:108 6:109-111 6:121 6:122 7:31 7:175 7:187 7:188 7:189-191 7:204 8:1 8:17 8:19 8:27 8:32-33 8:35 8:36 8:64 8:67-69 8:70 9:12 9:17 9:19 9:23-24 9:34 9:38 9:41 9:42-47 9:49 9:58 9:61-62 9:64 9:65 9:74 9:75 9:79 9:84 9:92 9:97 9:101 9:102-103 9:106 9:107-108 9:111 9:113-114 9:122 10:2 10:15 11:5 11:114 12:3 13:13 13:30 13:31 13:38 15:24 15:47 15:49 15:87 16:1 16:4 16:38 16:41 16:43 16:75-76 16:90 16:101-102 16:103 16:106 16:110 16:125-127 17:29 17:53 17:59 17:60 17:73 17:76 17:80 17:85 17:90 17:110 18:28 18:83 18:90 18:109 18:110 19:64 19:66 19:77 20:1-2 20:131 21:101 22:11 22:19 22:39 22:52 23:1 23:2 23:14 23:76 24:3 24:6 24:11 24:16 24:27-29 24:33 24:48 24:55 24:58 24:61 25:10 25:27 25:68-70 28:56 28:57 28:61 28:68 29:1-2 29:8 29:10 29:60 30:1-3 31:6 31:15 31:27 31:34 32:16 32:18 33:1 33:4 33:23 33:33 33:35 33:43 33:51 33:53 33:56 33:58 36:12 36:78 38:5-11 39:9 39:17 39:22 39:23 39:53 39:67 41:22 41:30 42:23 42:27 42:51 43:57 44:49 45:14 46:9 46:15 48:1 48:5 48:24 49:1 49:2 49:3 49:4 49:6-8 49:9 49:11 49:13 49:14 50:38 53:32 53:33-34 53:43 54:1 54:47-49 56:13-14 56:28 56:39-40 56:82 57:10 57:16 58:1 58:2 58:8 58:11 58:12-13 58:14-18 58:22 58:22 59:1-6 59:9 60:1 60:6-8 60:10 60:13 61:1-4 62:11 63:7 64:14 65:1 65:3 65:4 66:1 66:4 67:13 68:4 68:51 69:12 70:1 70:38-39 74:1-4 74:11-24 75:3 76:8 80:1-2 80:37 81:29 83:1 86:1-3 92:5-6 93:1-3 93:4-5 93:6 96:17-19 97:1-3 99:7-8 100:1-11 102:1-2 105:1-5 106:1-4 107:1-2 108:1-3 109:1-6 110:1-3 111:1-5 112:1-4 113:1-5 114:1-6 ';
	$rootScope.findAsbabForSura = findAsbabForSura;
	$scope.qurandata = "dsffsdfs";
	$scope.ayahhtml = "ayah htmmmmmmmmmmmml";
	
	$rootScope.topicsAyahsMap = topicsAyahsMap;
	$rootScope.synonyms_index = SYNONYMS_INDEX;
	$rootScope.suraNames = suraNames;
	$rootScope.pageOffsets = pageOffsets;
	$rootScope.whatsNew = whatsNew; $rootScope.letterStatus = letterStatus;
	
	$rootScope.findTopicsForSura = findTopicsForSura;
	$rootScope.findTopicsForRef = findTopicsForRef;
	$rootScope.findSurasForTopic = findSurasForTopic;
	$rootScope.findApproxPageNo = findApproxPageNo;	
	$rootScope.getNextID = getNextID;
	$rootScope._ = _; $rootScope.parseInt = parseInt; $rootScope.indexOf = "".indexOf;
	
	$rootScope.suwar = [];
	_.each( _.range(1, 115), function(i, surano){
		$rootScope.suwar.push( { id: ++surano, group: parseInt( 1 + surano/10 ), label: surano + (suraNames ? ': '+ suraNames[surano] : '') });
	});
	
	$rootScope.fetchSura = function(ref){
		var data, o, dataUrl = "//api.globalquran.com/page/$REF/quran-simple|en.sahih";
		var _url = dataUrl.replace(/\$REF/g, ref ) + "?jsoncallback=?"; //http://api.globalquran.com/all/page/604/quran-simple?jsoncallback=?
		$http.defaults.headers.common = {}; //get[	"Access-Control-Request-Headers"] = "accept, origin";
		$http.get(_url).success(function(data) { 
			$rootScope.qurandata = data.quran["quran-simple"];
			$rootScope.qurantrans = data.quran["en.sahih"];
			
			var keys = _.keys(data.quran['quran-simple']),
			first = keys[0],
			last  = keys[keys.length - 1],
			first = data.quran['quran-simple'][ first ],
			last =  data.quran['quran-simple'][ last ],
			firstSurah = first.surah,
			lastSurah = last.surah,
			firstAyah = first.ayah,
			lastAyah = last.ayah;
			if(firstSurah != lastSurah){ debugger; } //special case
			var asbabs = $rootScope.findAsbabForSura( lastSurah ); //$rootScope.qurandata);
			
			//checkForAsbabNuzul(verse.surah, verse.ayah)
			_.each( $rootScope.qurandata, function(o){
				var ref = (' ' + o.surah+':'+ o.ayah +' ');
				if( (asbabs.join('') + ' ').indexOf( ref ) != -1 ){
					o.hasAsbabs = asbabs.join('') + ' ';
				}
			});

			
			///setTimeout('scrollToAyah("' + ref + '")', 2000); //now scroll to that ayah
		});
	}
	$rootScope.fetchTopicsAyahsMap = function(){
		var _url = "data/topicsAyahsMap.json?" + v;
		$http.get(_url).success(function(data){
			$rootScope.topicsAyahsMap = topicsAyahsMap = initTopicsAyahsMap(data);
		});
	}
	$rootScope.fetchSynonyms = function(){
		var _url = "data/synonyms.json?" + v;
		$http.get(_url).success(function(data){
			$rootScope.synonyms = eval( data );
		});
	}

	$rootScope.fetchSynonymsDetails = function(){
		var _url = "data/synonymsdetails.json?" + v;
		$http.get(_url).success(function(data){
			$rootScope.synonymdetails = synonymdetails = eval( data );
		});
	}
		
	$rootScope.getSynonym = function(id){
		var ret, s = $rootScope.synonyms;
		if(!s){ return id; }
		ret = _.filter(s, function(o){ return o.id == id; });
		if(ret && ret.length >= 1){ return ret[0].topic; }
		else return id;
	}

	$rootScope.getQuranData = function(){
		var result = [];
		angular.forEach($rootScope.qurandata, function(data, id) {
		  result.push(data);
		});
		return result;
	}
	$rootScope.getQuranTrans = function(){
		var result = [];
		angular.forEach($rootScope.qurantrans, function(data, id) {
		  result.push(data);
		});
		return result;		
	}
	$rootScope.getTopics = function(){
		return $rootScope.topics = findTopicsForSura($rootScope.sura, $rootScope.synonyms);
	}
	$rootScope.getRefTopics = function(ref){
		return $rootScope.refTopics = findTopicsForRef(ref);
	}
	
	$rootScope.setSura = function(sura){
		$rootScope.setRef(sura + ":1");
	}
	$rootScope.getSura = function(){
		return $rootScope.sura = $rootScope.sura || 1;
	}
	$rootScope.setRef = function(ref, ayahNo){ var suraNo;
		if( ayahNo && (ayahNo = parseInt(ayahNo)) && (suraNo = parseInt(ref)) ){
			ref = suraNo +':'+ ++ayahNo; //TODO: ensure ayahNo is < maxAyahs in sura
		}
		$rootScope.fetchSura(ref);
		$rootScope.sura = parseInt( ref ); $rootScope.ref = ref;
		if(ref != '1:1'){ 
			$('.carousel').carousel('pause'); 
			if( $('.carousel  .item.active').html().indexOf( 'Quran' ) == -1){ //only if no Quran in view, change to it.
				$('.carousel').carousel(1); //move to Quran view - when sura dropdown or ref clicked
			}else{ //reset those views.
				if($rootScope.book1) $rootScope.getBookUrl('MaarifulQuraan', '#book1');
				if($rootScope.book2) $rootScope.getBookUrl('AsbabAlNuzul', '#book2');
				if($rootScope.book3) $rootScope.getBookUrl('MoharAliWordByWordQuraan', '#book3');
			}
		}else{
			setTimeout( "$('.carousel').carousel( 1 );", 5000);
		}
	}
	$rootScope.setID = function(id){
		$rootScope.id = id; $rootScope.ltr = _.indexOf($rootScope.letters, id.match(/[^\d]+/)[0] );
		if( $('#IDContentOuter').length > 0){//scroll topic into view
			$('#IDContentOuter')[0].scrollIntoView();
		}
	}
	$rootScope.getID = function(){
		return $rootScope.id = $rootScope.id || "A1";
	}
	$rootScope.getIDUrl = function(){var _url;
		var id = $rootScope.id || "A1";
		var number, path, arr = id.match(/\d+$/), arr2 = id.match(/[^\d]+/);
		if(arr && arr[0]){	number = arr[0]; }
		if(arr2 && arr2[0]){ path = arr2[0]; }
		if(number){
			_url = $rootScope.IDUrl = 'content/' + path + '/'+ id + '.html';
		}
		if(_url != _url_previous){_url_previous = _url; //make sure no dupe ajax calls.
		  $http.get(_url)
		  .success(function(data){
			$('#IDContent, #IDContentModal').html( data ); console.log('got IDContent '+_url);
			$('#NOTRANSLATION').hide();
		  })
		  .error(function(data){
			$('#IDContent, #IDContentModal').html( "- not yet translated - <BR><BR>To see the original Book pages (in Urdu), scroll to book view." );
			$('#NOTRANSLATION').show();
		  });
		}
		return _url;
	}
	var _url_previous;
	$rootScope.getUrduBookUrl = function(fullScreen){
		var url, _url = "//archive.org/stream/Mutaradifaat-ul-Quran_314/Mutaradifaat-ul-Quran?ui=embed#mode/1up/page/n", pg = $rootScope.page, id = $rootScope.id; 
		var o = findApproxPageNo( id );
		if(o && o.pg){
			pg = o.pg; $rootScope.page = pg; url = _url + (17 + pg); console.log('getUrduBookUrl: '+ url);
			if(fullScreen){ url = url.replace(/\?ui\=embed/g, '').replace(/1up/g, '2up') }
			return url;
		}
	}
	$rootScope.getBookUrl = function(bookID, id, fullScreen){
		var _url, o = eval(bookID);
		if(o){
			_url = o.lookupSura( parseInt($rootScope.sura) ); console.log(  'getBookUrl: ' + bookID +' '+ _url );
			if(id && _url){ 
				$(id).html( "<IFRAME SRC='" + _url + "' STYLE='height:680px;width:95%;'></IFRAME>");
			}
			if(fullScreen){ _url = _url.replace(/\?ui\=embed/g, '').replace(/1up/g, '2up') }
			return _url;
		}
	}
	$rootScope.id = "A1"; $rootScope.sura = $rootScope.suwar[0].value; $rootScope.ref = "1:1"; $rootScope.setRef( $rootScope.ref ); 
	$rootScope.fetchTopicsAyahsMap();
	$rootScope.fetchSynonyms();
	$rootScope.fetchSynonymsDetails();
	
	$rootScope.letters = _.map(SYNONYMS_INDEX, function(o){ return o.l; });
	$rootScope.lettersLong = _.map(SYNONYMS_INDEX, function(o){ return o.ll; });
	$rootScope.lettersCount = _.map(SYNONYMS_INDEX, function(o){ return o.n; });
	$rootScope.lettersDD = [];
	_.each( $rootScope.lettersLong, function(letter, i){
		$rootScope.lettersDD.push( { id: i, group: 1, label: letter.toUpperCase() });
	});$rootScope.ltr = 0;
	
	$rootScope.getRange = function(data){
		var ret = {}, regexp = /(\d+)\-(\d+)/, regexp2 = /\d+/, start, end, matches;
		matches = data.match( regexp );
		if(matches && (start=parseInt(matches[1])) && (end=parseInt(matches[2])) ){
			ret.data = _.range(start, end+1);
		}
		else if( regexp2.test(data) ){ret.data = regexp2.exec(data);}
		ret.isDone = (data.indexOf('(') == -1);
		if(data.indexOf('[') != -1) ret.isDone = "partial";
		return ret;
	}

	$rootScope.getClass = function(key){ return $rootScope.letterStatus[key].indexOf('(') != -1 ? 'incomplete' : 'complete'; }
	$rootScope.isShowall = function(){ return $rootScope.showall; }
	$rootScope.setShowall = function(showall){ return $rootScope.showall = showall; }
	
	$rootScope.MaarifulQuraan = MaarifulQuraan; $rootScope.AsbabAlNuzul = AsbabAlNuzul; $rootScope.MoharAliWordByWordQuraan = MoharAliWordByWordQuraan; $rootScope.book1 = $rootScope.book2 = $rootScope.book3 = true;
	$(function() {
		$('.carousel').each(function(){
			if( $(this).carousel ) ///this next line was throwing exception
            $(this).carousel({
                interval: false
            });
        });
    });
}


var scrollToAyah = function(ref){ if(ref == '1:1') return;
	var target = $( '#' + ref.replace(/\:/, '_') );
	if( target && target.length > 0 )
		target[0].scrollIntoView();
}

//get JSON data for passed in sura
fetchSura = function(sura, ayah, $rootScope){
	var data, o, dataUrl = "//api.globalquran.com/page/$REF/quran-wordbyword", ref;
	ref = (sura || 1) + ":" + (ayah || 1);
	o = $.getJSON( dataUrl.replace(/\$REF/g, ref) );
	o.then( function(){//console.log( arguments ); 
		data = arguments[0]; 
		var html = ''; html = format(data);
		$rootScope.ayahhtml = html;
		
	});
}
format = function(data){ var html = '';
	$.each( data.quran['quran-wordbyword'], function(key,val){
		$.each(val.verse.split('$'), function(index, word){
			$.each(word.split('|'), function(i, token){
				if(i<2){ html += token +'    ';}
			});
			html += '         ';
		});
		html += '<BR/>'; 
	});
	return html;
}

//find all asbab for this surah
findAsbabForSura = function(surah){
	var regexp, ret, refsData;
	regexp = new RegExp(" " + surah + "\:[0-9]*-?[0-9]*[^ ]", 'g');
	refsData = this.asbabNuzulRefsData ? this.asbabNuzulRefsData : this.$parent.asbabNuzulRefsData;
	ret = refsData.match( regexp );
	return ret;	
}

//Find all topics in current sura:
findTopicsForSura = function(sura){
	var regexp, ret;
	regexp = new RegExp(" " + sura + "\\:");
	ret = 
	_.chain(topicsAyahsMap)
	 .filter( function(val, key){
	   return val.r && regexp.test( val.r ); 
	  })
	 .map(function(o){
		 return o.t;
	  })
	 .value(); 
	return ret;
}

initTopicsAyahsMap = function(data){
	topicsAyahsMap = _.union( topicsAyahsMap, data ); 
	topicsAyahsMap = _.chain( topicsAyahsMap )
	 .map( function(o){
		if(o.r != '-') o.r = " " + o.r + " ";
		return o;
	  })
	 .value()
	return topicsAyahsMap;
}

findTopicsForRef = function(ref){
	var regexp, ret;
	regexp = new RegExp(" " + ref + " "); //BUG. disregards ayahs at beginning.
	ret = 
	_.chain(topicsAyahsMap)
	 .filter( function(val, key){
	   return val.r && regexp.test( val.r ); 
	  })
	 .map(function(o){
		 return o.t;
	  })
	 .value(); 
	return ret;
}

findSurasForTopic = function(id){
	var ret = {}; 
	ret.refs = 	_.chain(topicsAyahsMap)
	 .where({t: id})
	 .value(); if(ret.refs && ret.refs.length >= 1) ret.refs = ret.refs[0].r.split(" "); else return ret;
    ret.refs = _.chain( ret.refs ).without( "").without( "-").value();
	ret.suras = _.chain( ret.refs )
	 .map( function(i){ 
		 return i.split(':')[0]; 
	  })
	 .compact()
	 .uniq()
	 .map(function(o){ return parseInt(o); })
	 .sortBy(function(a){return a; })
     .compact()
	 .value(); 
	if( synonymdetails && synonymdetails.length>0) ret.words = _.chain( synonymdetails )
     .where({id: id})
     .value();
	return ret;
 }

topicsAyahsMap = [
{"t":"A1","r":"2:35 14:37 12:56 3:121 28:45 2:25 2:196 12:100 4:19 7:92"},{"t":"A2","r":"14:37 10:93 9:18 30:9 18:10 11:43 8:72"},{"t":"A3","r":"2:4 16:30 40:52 14:28 14:29 7:54 30:56"},{"t":"A4","r":"28:29 51:56 19:26 2:21 2:60 25:49 74:29 23:47 17:94 17:95"},{"t":"A5","r":"28:72 9:103 78:9 18:31"},{"t":"A6","r":"15:3 2:111 2:78 53:24 15:2 19:96"},{"t":"A7","r":"55:19 55:20 25:22 89:5 6:138 27:61 69:47 4:14"},{"t":"A8","r":"2:178 24:33 4:25 4:24 75:36"},{"t":"A9","r":"4:92 2:229 16:6 2:229 33:28"},{"t":"A10","r":"60:10 7:168 2:155 76:2 2:124 51:13 8:73 8:28 2:102"},{"t":"A11","r":"4:30 25:63 46:20 19:20 19:21"},{"t":"A12","r":"2:22 37:6 65:12 7:176 21:33"},{"t":"A13","r":"2:275 11:54"},{"t":"A14","r":"70:15 70:16"},{"t":"A15","r":"72:8 28:29"},{"t":"A16","r":"100:2 56:71 56:72 28:38 5:64 2:17 20:10 57:13 81:12 52:6 40:72 92:14"},{"t":"A17","r":"74:29 23:104 18:29 22:19 22:20 4:56 21:68 2:266"},{"t":"A18","r":"36:29 17:97 9:32"},{"t":"A19","r":"2:12 24:31 5:107 2:102 59:18"},{"t":"A20","r":"18:19 72:26 49:16 101:10 101:11 2:76 12:58 47:6 3:179 49:6 20:40 61:10"},{"t":"A21","r":"6:111 57:13 17:92 2:66 13:11"},{"t":"A22","r":"11:98 10:49 59:10 12:25 68:30 46:24"},{"t":"A23","r":"2:95 50:28 4:23 10:30 69:24"},{"t":"A24","r":"4:102 47:4 4:102 8:7"},{"t":"A25","r":"12:16 16:1 12:23 33:18 3:64"},{"t":"A26","r":"5:45 37:48 55:72 56:22 56:23 21:97 50:22 2:7"},{"t":"A27","r":"5:26 26:224 26:225"},{"t":"A28","r":"49:2 43:57 35:37 20:108 21:102 8:35 100:1 7:148 11:106 7:176 19:98 15:73 15:74 80:33 25:12 19:90 44:45 44:46 15:26 101:1 101:2"},{"t":"A29","r":"86:17 38:36 77:1 51:3 7:182 7:22"},
	
{"t":"AA1","r":"44:45 44:46 55:66 11:40"},{"t":"AA2","r":"78:31 78:32 78:33 21:96 20:107 90:10 90:11 79:27 79:28"},{"t":"AA3","r":"12:85 8:65 7:54 107:1 107:2 107:3 19:83 5:8"},{"t":"AA4","r":"57:4 26:193 97:4 26:221 26:222 11:39 11:48 2:74 2:36 97:1 25:1 25:32 35:34 35:35 14:28 94:2 94:3 24:58 20:12"},{"t":"AA5","r":"10:58 28:76 28:58 17:37 31:18 54:26 75:31 75:32 75:33 7:13 26:149"},{"t":"AA6","r":"51:10 51:11 51:12 38:7 19:27 17:73 58:8 69:44 69:45 69:46"},{"t":"AA7","r":"7:189 20:111 2:286 28:76 6:31 30:48 7:57 22:7 18:19 81:10 80:21 80:22 2:259 12:10 15:22"},{"t":"AA8","r":"91:11 91:12 25:3 25:47 58:11 3:191 74:1 74:2 2:20"},{"t":"AA9","r":"9:44 24:27 9:43"},{"t":"AA10","r":"44:47 68:13 3:159 9:97"},{"t":"AA11","r":"7:107 7:95 6:31"},{"t":"AA12","r":"16:30 100:8 3:114 38:47 16:30 55:70 4:69 20:104 20:63 16:6 12:18 33:28"},{"t":"AA13","r":"11:70 11:73 4:36 4:43"},{"t":"AA14","r":"2:237 2:253 3:164 33:37 12:100"},{"t":"AA15","r":"33:36 20:87 4:33 18:44 8:71"},{"t":"AA16","r":"9:23 72:14"},{"t":"AA17","r":"2:282 2:280 57:11"},{"t":"AA18","r":"36:82 9:13 3:159 43:79 5:2 5:6 2:267 72:14"},{"t":"AA19","r":"56:46 9:101 23:75"},{"t":"AA20","r":"18:45 20:105 6:38"},{"t":"AA21","r":"19:29 3:41 83:30 2:235"},{"t":"AA22","r":"2:38 20:78 6:90 43:23 33:21 41:11 8:24 2:131 33:31 24:49"},{"t":"AA23","r":"31:19 16:9 2:143 95:4"},{"t":"AA24","r":"36:19 17:13 17:13 38:16 81:10"},{"t":"AA25","r":"36:52 77:15 5:31 78:40 12:84 57:23"},{"t":"AA26","r":"22:41 24:55"},{"t":"AA27","r":"3:81 67:11 6:130"},{"t":"AA28","r":"3:173 104:2 20:60 17:88 79:23 79:24 20:125 18:47 3:49 67:8 84:17 84:18 77:25 77:26 89:19 100:10 2:125"},{"t":"AA29","r":"14:26 54:20"},{"t":"AA30","r":"69:47 112:1 74:11 21:89 6:94"},{"t":"AA31","r":"5:118 17:23 19:26 9:42 4:78 34:31"},{"t":"AA32","r":"4:88 53:53 7:78 27:90 26:94 33:66 9:48 21:65 36:68"},{"t":"AA33","r":"2:50 26:63 5:25 6:159 21:30 33:51 14:35 3:179 10:28"},{"t":"AA34","r":"3:103 44:21 2:222 87:10 87:11 36:59 2:14 12:80 2:249 19:16 48:25 32:16"},{"t":"AA35","r":"18:46 4:119 9:106 4:104"},{"t":"AA36","r":"6:146 47:15"},{"t":"AA37","r":"2:280 11:121 11:122 11:93 9:52"},{"t":"AA38","r":"53:41 53:42 42:53 40:5 7:128 3:137"},{"t":"AA39","r":"6:148 54:49 10:5"},{"t":"AA40","r":"9:47 57:13 55:54 33:4"},{"t":"AA41","r":"13:16 27:81 5:110 2:15"},{"t":"AA42","r":"55:9 72:15 49:9 82:7 5:95 2:48 5:8 6:1"},{"t":"AA43","r":"2:34 12:58 21:50 27:14 57:20 18:37 14:7"},{"t":"AA44","r":"2:19 75:4 3:119"},{"t":"AA45","r":"11:5 71:7 74:1 74:2 73:1 73:2"},{"t":"AA46","r":"4:11 2:140 2:266 2:124 43:28 21:96 32:7 32:8 16:72"},{"t":"AA47","r":"16:80 70:8 70:9"},{"t":"AA48","r":"88:17 12:72 77:32 77:33 56:54 56:55 59:6 22:27 22:36 11:64 81:4 5:103"},{"t":"AA49","r":"8:11 2:255"},{"t":"AA50","r":"111:4 67:17 21:98 2:24"},{"t":"AA51","r":"2:40 3:37 55:31 39:64 12:70 33:50 2:21 5:90 89:27"},

{"t":"b1","r":"31:33 31:14 18:80 23:24 22:78 7:27 12:100"},{"t":"b2","r":"21:50 25:1 40:64 23:14 25:61 67:1 28:30 7:58 13:29"},{"t":"b3","r":"18:19 58:8 19:34 65:1 39:23 23:44 23:100 18:109 39:19"},{"t":"b4","r":"3:77 18:37 11:37 25:63"},{"t":"b5","r":"69:28 69:29 3:26 2:102 36:83"},{"t":"b6","r":"35:9 2:57 46:24 78:14 56:69 2:19"},{"t":"b7","r":"9:126 17:6 67:4 20:55"},{"t":"b8","r":"26:173 2:22 2:265 24:43 57:20 11:52 72:16 2:19 2:264"},{"t":"b9","r":"9:12 98:1"},{"t":"b10","r":"28:32 18:51 18:18 69:32"},{"t":"b11","r":"2:265 27:60 30:15"},{"t":"b12","r":"53:50 53:51 13:39 18:49"},{"t":"b13","r":"16:80"},{"t":"b14","r":"91:14 19:5 51:41 42:50"},{"t":"b15","r":"28:10 47:4 5:64"},{"t":"b16","r":"14:35 5:3 22:30 4:51"},{"t":"b17","r":"2:20 13:13 13:13"},{"t":"b18","r":"66:6 59:2 69:47 66:12 14:35 5:67 11:43"},{"t":"b19","r":"2:63 24:33 22:30 12:32 64:14 2:273"},{"t":"b20","r":"53:32 26:18 31:33 2:233 76:19 24:59 19:12 52:24"},{"t":"b21","r":"91:5 91:6 79:30 88:20 2:22 74:14 74:15 51:48"},{"t":"b22","r":"78:6 55:54 32:16"},{"t":"b23","r":"4:37 17:100 70:17 70:18 69:12 53:33 53:34 25:67 81:24 59:9 33:19 5:64"},{"t":"b24","r":"23:106 41:16 36:18 36:19 90:17 90:18 90:19 69:6 69:7"},{"t":"b25","r":"5:78 11:95 67:11 3:61"},{"t":"b26","r":"36:67 23:104 28:42"},{"t":"b27","r":"17:32 24:33 19:28 4:25 4:19 4:15"},{"t":"b28","r":"35:43 13:11 4:119 5:13 8:16 27:41 3:140"},{"t":"b29","r":"18:50 25:70 5:45 2:48 12:57 28:27 37:39 2:125 3:148 83:36 2:196 5:95 59:15 2:194 2:85 4:92"},{"t":"b30","r":"17:15 39:3 1:4 56:86 56:87"},{"t":"b31","r":"16:126 85:8 32:22 42:39 54:10"},{"t":"b32","r":"56:19 37:47 4:43"},{"t":"b33","r":"2:206 2:216 38:62 6:31 67:27 17:7 40:58 28:42"},{"t":"b34","r":"17:18 41:24 5:54 6:108 12:92"},{"t":"b35","r":"54:6 85:8"},{"t":"b36","r":"5:95 2:6 13:16 82:7"},{"t":"b37","r":"32:10 7:37 93:7"},{"t":"b38","r":"37:101 2:177 12:84 68:48 3:134"},{"t":"b39","r":"12:80 21:58 2:219 2:7 56:96 55:78 85:14"},{"t":"b40","r":"2:266 40:56 55:78 72:3"},{"t":"b41","r":"2:247 13:8 2:109 4:7 7:86 89:12 2:261 7:95 2:219 2:184 17:79 2:276"},{"t":"b42","r":"12:82 12:100 9:98"},{"t":"b43","r":"8:41 21:78 6:143"},{"t":"b44","r":"56:5 62:10 62:11 82:2 76:7"},{"t":"b45","r":"2:127 49:2 13:12"},{"t":"b46","r":"19:50 28:4 50:10 77:27"},{"t":"b47","r":"2:22 51:47 11:27 20:41 12:21"},{"t":"b48","r":"12:23 90:20 55:72 9:67"},{"t":"b49","r":"51:7 56:15"},{"t":"b50","r":"9:41 16:7 73:5 7:189 12:72 17:57 17:57 17:57 51:1 6:31 2:286 7:157 16:76 101:6"},{"t":"b51","r":"9:54 2:255 6:35 2:45"},{"t":"b52","r":"40:67 73:17 3:46 11:72 35:11 2:68"},{"t":"b53","r":"20:120 69:16 51:42 17:49 79:10"},{"t":"b54","r":"50:18 53:3 27:16 45:29 28:34 12:2 41:44 78:38 47:30"},{"t":"b55","r":"34:12 7:50 56:30 2:84 4:24 17:90 13:17 5:83 88:12"},{"t":"b56","r":"6:23 9:91 7:164"},{"t":"b57","r":"24:16 46:22 24:12 6:93 19:27"},{"t":"b58","r":"18:104 105:2 2:282 10:32 91:7 20:121 2:256 53:2 5:26 25:17 28:63"},{"t":"b59","r":"33:16 51:50 37:139 17:81 72:12 74:50 8:57"},{"t":"b60","r":"4:11 59:10 49:10"},{"t":"b61","r":"3:91 50:30 78:24 37:140"},{"t":"b62","r":"86:4 90:14 5:3 59:9"},{"t":"b63","r":"36:78 12:42 51:11 2:282 22:2"},{"t":"b64","r":"18:29 11:69"},{"t":"b65","r":"7:111 5:31 62:2"},{"t":"b66","r":"12:18 18:64 12:3 28:25 2:26 99:4 2:256 6:65 17:12 25:33"},{"t":"b67","r":"26:18 31:33"},{"t":"b68","r":"58:11 6:68 9:90 55:54 9:5 24:60 45:28"},{"t":"b69","r":"2:10 9:91 12:85"},{"t":"b70","r":"2:35 58:1 4:23 66:10 33:32 81:34"},{"t":"b71","r":"31:13 4:148 24:50 4:3"},{"t":"b72","r":"2:130 3:39 12:20"},{"t":"b73","r":"3:49 9:1 2:166 93:3 4:22"},{"t":"b74","r":"2:20 2:259 2:68 63:1 11:22 16:23 16:109 11:22 40:43 58:1"},{"t":"b75","r":"28:10 14:21 27:89 21:76 70:19 2:173 17:64"},{"t":"b76","r":"94:7 81:4"},{"t":"b77","r":"70:24 19:4"},{"t":"b78","r":"2:273 112:1"},{"t":"b79","r":"19:62 88:11 86:13 37:46"},{"t":"b80","r":"7:143 50:19 16:67 6:93 23:63 69:7 33:19"}
];

suraNames = ["","Al-Faatiha","Al-Baqara","Aal-i-Imraan","An-Nisaa","Al-Maaida","Al-An'aam","Al-A'raaf","Al-Anfaal","At-Tawba","Yunus","Hud","Yusuf","Ar-Ra'd","Ibrahim","Al-Hijr","An-Nahl","Al-Israa","Al-Kahf","Maryam","Taa-Haa","Al-Anbiyaa","Al-Hajj","Al-Muminoon","An-Noor","Al-Furqaan","Ash-Shu'araa","An-Naml","Al-Qasas","Al-Ankaboot","Ar-Room","Luqman","As-Sajda","Al-Ahzaab","Saba","Faatir","Yaseen","As-Saaffaat","Saad","Az-Zumar","Al-Ghaafir","Fussilat","Ash-Shura","Az-Zukhruf","Ad-Dukhaan","Al-Jaathiya","Al-Ahqaf","Muhammad","Al-Fath","Al-Hujuraat","Qaaf","Adh-Dhaariyat","At-Tur","An-Najm","Al-Qamar","Ar-Rahmaan","Al-Waaqia","Al-Hadid","Al-Mujaadila","Al-Hashr","Al-Mumtahana","As-Saff","Al-Jumu'a","Al-Munaafiqoon","At-Taghaabun","At-Talaaq","At-Tahrim","Al-Mulk","Al-Qalam","Al-Haaqqa","Al-Ma'aarij","Nooh","Al-Jinn","Al-Muzzammil","Al-Muddaththir","Al-Qiyaama","Al-Insaan","Al-Mursalaat","An-Naba","An-Naazi'aat","Abasa","At-Takwir","Al-Infitaar","Al-Mutaffifin","Al-Inshiqaaq","Al-Burooj","At-Taariq","Al-A'laa","Al-Ghaashiya","Al-Fajr","Al-Balad","Ash-Shams","Al-Lail","Ad-Dhuhaa","Ash-Sharh","At-Tin","Al-Alaq","Al-Qadr","Al-Bayyina","Az-Zalzala","Al-Aadiyaat","Al-Qaari'a","At-Takaathur","Al-Asr","Al-Humaza","Al-Fil","Quraish","Al-Maa'un","Al-Kawthar","Al-Kaafiroon","An-Nasr","Al-Masad","Al-Ikhlaas","Al-Falaq","An-Naas"]


SYNONYMS_INDEX = [{"l":"A","ll":"Alif mamdooah","pg":"67","n":"29","d":"29"},{"l":"AA","ll":"Alif maqsoora","pg":"106","n":"51","d":"51"},{"l":"b","ll":"beh","pg":"167","n":"80","d":"72"},{"l":"p","ll":"(peh)","pg":"260","n":"59","d":"28"},{"l":"t","ll":"teh","pg":"336","n":"34","d":"20"},{"l":"tt","ll":"(tteh)","pg":"367","n":"8","d":"2"},{"l":"th","ll":"theh","pg":"377","n":"2","d":"0"},{"l":"j","ll":"jim","pg":"379","n":"28","d":"2"},{"l":"ch","ll":"(cheem)","pg":"408","n":"29","d":"13"},{"l":"HA","ll":"Ha","pg":"441","n":"15","d":"4"},{"l":"kh","ll":"kha","pg":"454","n":"21","d":"3"},{"l":"d","ll":"dal","pg":"473","n":"36","d":"13"},{"l":"dd","ll":"(ddal)","pg":"516","n":"9","d":"7"},{"l":"dh","ll":"dhal","pg":"527","n":"6","d":"6"},{"l":"r","ll":"ra","pg":"533","n":"21","d":"14"},{"l":"z","ll":"zin","pg":"556","n":"10","d":"5"},{"l":"s","ll":"sin","pg":"570","n":"30","d":"25"},{"l":"sh","ll":"shin","pg":"604","n":"15","d":"0"},{"l":"SA","ll":"Sad","pg":"617","n":"5","d":"0"},{"l":"DA","ll":"Dad","pg":"621","n":"1","d":"0"},{"l":"TA","ll":"Ta","pg":"622","n":"7","d":"0"},{"l":"ZA","ll":"Dha","pg":"631","n":"2","d":"2"},{"l":"E","ll":"ain","pg":"634","n":"13","d":"7"},{"l":"gh","ll":"gain","pg":"648","n":"9","d":"0"},{"l":"f","ll":"feh","pg":"658","n":"14","d":"13"},{"l":"q","ll":"qaf","pg":"671","n":"18","d":"18"},{"l":"k","ll":"kaf","pg":"689","n":"45","d":"28"},{"l":"gg","ll":"(gaaf)","pg":"726","n":"27","d":"27"},{"l":"l","ll":"lam","pg":"757","n":"17","d":"6"},{"l":"m","ll":"mim","pg":"775","n":"48","d":"3"},{"l":"n","ll":"nun","pg":"834","n":"33","d":"2"},{"l":"w","ll":"waav","pg":"871","n":"4","d":"2"},{"l":"h","ll":"heh","pg":"878","n":"17","d":"2"},{"l":"y","ll":"yeh","pg":"902","n":"4","d":"0"}];


pageOffsets = {
	'A': [,2,1,1,3,,2,2,1,1,2,1,1,1,,1,2,1,1,1,2,1,1,1,1,1,1,1,3,2],
	'AA': [,,2,1,3,2,1,3,1,1,1,,2,1,1,1,1,1,1,1,1,1,2,1,1,1,,1,2,,3,1,1,2,2,1,,2,1,,1,1,2,1,,1,3,,3,,1],
	'b': [,1,1,2,1, 1,1,1,2,1, ,1,1,,1, 1,1,1,1,1, 2,2,,3,2, 1,1,1,2,3, 1,1,1,1,2, ,1,2,1,1, 1,2,1,,2, ,1,1,1,, 3,1,1,1,2, 2,1,1,2,2, ,1,1,1,, 1,2,1,1,1, 1,2,1,1,1, 1,1,,1,1,1],
	'p': [,1,4,1,1, 2,2,1,1,, 1,1,1,3,, 2,2,1,1,2, 2,1,1,1,2, 1,1,,1,1, 3,1,2,2,2, 1,2,1,,1, 2,1,1,1,1, 1,,2,1,, 1,1,1,1,2, ,1,1,3,1],
	't': [,1,1,1,1, ,1,,2,, 1,,1,1,1, ,1,,2,1, 1,2,1,2,1, 1,1,1,1,1, 1,,1,,1],
	'tt': [,3,,1,1, 1,1,2,],
	'th': [,,1],
	'j': [,,1,1,1, 1,1,,1,1, 1,4,1,1,1, 2,1,,1,, 1,1,,3,, 2,1,1,],
	'ch': [,,1,1,, 2,1,,1,2, ,3,2,2,, 1,1,1,1,1, 2,1,,2,2, 1,2,1,,1],
	'HA': [,1,,1,1, 2,,1,2,1, ,1,1,,1, ],
	'kh': [,1,,1,1, 1,2,,1,1, 1,1,,1,1, 1,1,2,1,, 1,],
	'd': [,1,1,1,, 1,1,1,,1, 1,1,1,2,3, 2,1,1,1,1, 2,1,1,,3, ,1,1,1,1, 2,1,1,2,2, 1,1],
	'dd': [,1,1,2,2, ,1,1,2,],
	'dh': [,1,,1,2, 1,],
	'r': [,,1,3,1, 1,1,,2,, 2,,1,1,, 3,,3,1,1, 1,],
	'z': [,1,1,1,1, 4,1,1,,1, 2],
	's': [,,1,2,3, 1,1,1,1,1, 2,1,,2,1, 1,,1,1,1, 1,1,1,1,1, 2,1,2,,1, 1],
	'sh': [,1,1,,1, 1,1,,1,1, 2,1,,1,1,],
	'SA': [,1,,1, 1],
	'DA': [,,],
	'TA': [,1,1,3,1, ,1,1],
	'ZA': [,2,,],
	'E': [,,2,,1, 2,,2,1,1, 1,1,2],
	'gh': [,1,1,1,1, 1,1,1,,2],
	'f': [,1,1,1,1, 1,,2,1,, 1,1,1,,1],
	'q': [,1,1,1,, 2,1,,1,1, 2,1,1,1,1, ,2,1,],
	'k': [,2,,1,, 1,2,1,1,, 2,,1,,1, ,1,1,1,2, 1,,2,3,, 1,,1,,1, 1,,1,,1, ,1,1,,1, 1,1,1,,1,],
	'gg': [,1,1,1,, 2,,5,1,1, 2,,1,1,3, 1,1,1,,1, 1,,2,1,, 1,1,1],
	'l': [,,1,2,1, 1,,2,,1, ,1,2,3,1, 1,1,],
	'm': [,1,3,2,1, 1,1,1,2,1, 1,,1,1,2, 1,1,2,2,2, 1,1,1,1,1, 1,,2,,1, 2,1,3,2,1, 1,1,,2,3, 1,1,,2,, 1,1,,1],
	'n': [,1,1,1,1, 1,,1,,2, ,1,1,1,2, 3,,2,1,1, 1,1,2,,1, 1,2,,2,1, 1,1,2,1],
	'w': [,2,1,1,2],
	'h': [,2,1,,2, 1,1,3,1,1, 2,,1,1,2, 1,3,1],
	'y': [,,1,1,],
	'appendix1': [905,9,1,1,1, 1,3,4,3,1, 2,4,2,1,1],
	'appendix2': [940,3,3,9,7, 1,1,1],
	'appendix3': [966,6,6,4],
	'appendix4': [983,7],
	'appendix5': [991,3,2,1,2, 2,3,3,1,]
}

whatsNew = {
		'Feb 18, 2013': {'d': "9 1-15 19 33-36", 's':"27", 'sh':"14"},
		'Feb 12, 2013': {'TA': "1-7", 'dd': "1-3", 't': "16-17 28-34", 'd': "4-8"},
		'Feb 10, 2013': {'t': "9-14"},
		'Feb 9, 2013': {'z': "6-10", 'r': "7-13", 'p': "3 21 30 33-36", 'n': "14 15", 'd': "25-29", 'SA': "2-5"},
		'Feb 2, 2013': {'l': "5-12", 'sh': "1-15", 'p': "20 21 30 33-35", 'SA': "1", 'E': "10-13", 'h': "3 5", 'n': "27", 'tt': "1", 's': "1 2 28-30"},
		'Jan 27, 2013': {'kh': "1-18", 'DA': "1", 'gh': "1-2", 'y': "1-4"},
		'Jan 22, 2013': {'n': "29-33", 'w': "3 4", 'h': "1 2 6-16", 'b': "38-45", 'p': "4 5"},
		'Jan 14, 2013': {'HA': "5-15"},
		'Jan 12, 2013': {'l': "13-17", 'm': "1-48", 'n': "1-26", 'ch': "18-20"},
		'Jan 11, 2013': {'j': "5-26", 'p': "30-32", 'ch': "1-8"},
		'Jan 9, 2013':  {'p': "26-30"}
	};
	
letterStatus = {
		'A': "1-29",
		'AA': "1-51",
		'b': "1-26 [37] 38-45 [46-48] 49-60 [61] 62-70 [71] 72-80",
		'p': "1-2 [3] 4 [5] 6-8 [9] 10-25 [26-28] 29-32 [33-35] 36-46 [47] 48-59",
		't': "1-5 [6] 7-17 [18] 19-24 [25] 26 [27] 28-34",
		'tt': "1-8",
		'th': "1-2",
		'j': "1-4 [5] 6-28",
		'ch': "1-22 [23-29]",
		'HA': "[1-4] 5-15",
		'kh': "1-21",
		'd': "1-15 [16] 17-36",
		'dd': "1-9",
		'dh': "1-6",
		'r': "1-5 [6] 7-14 [15] 16-21",
		'z': "1-4 [5] 6-10",
		's': "1-30",
		'sh': "1-15",
		'SA': "1-5",
		'DA': "1",
		'TA': "1-7",
		'ZA': "1-2",
		'E': "1-11 [12-13]",
		'gh': "1-9",
		'f': "1-14",
		'q': "1-18",
		'k': "1-18 19-38 39-45",
		'gg': "1-27",
		'l': "1-17",
		'm': "1-48",
		'n': "1-33",
		'w': "1-4",
		'h': "1-17",
		'y': "1-4" /*,
		'appendix1': [905,9,1,1,1, 1,3,4,3,1, 2,4,2,1,1],
		'appendix2': [940,3,3,9,7, 1,1,1],
		'appendix3': [966,6,6,4],
		'appendix4': [983,7],
		'appendix5': [991,3,2,1,2, 2,3,3,1,]*/
	}

	var findApproxPageNo = function(id, offset){
		var pageno, _html='', page_offset=0; if(!offset) offset = 0;
		var sectionAlphabet = id && id.match( /[^\d]*/ ), sectionNumber = id && id.match( /\d+/g );
		var sectionAlphabetObj = sectionAlphabet && _.find( SYNONYMS_INDEX, function(o){ return o.l == sectionAlphabet; }); 
		if(sectionAlphabetObj && parseInt(sectionAlphabetObj.pg)){ 
			pageno = parseInt(sectionAlphabetObj.pg); 
			_html = '<div class="alert alert-error"><B>Showing first page of section for this topic. Use page navigation buttons below to find topic.</B></div>' 
		}
		else{ _html = '<div class="alert alert-error"><B>Page number not yet available. Showing default page.</B></div>'; }
		try{
			if(pageOffsets[sectionAlphabet] && pageOffsets[sectionAlphabet].length >= sectionNumber ){ 
				page_offset = _.reduce(pageOffsets[sectionAlphabet].slice(0, sectionNumber), function(memo, num){ return memo + num; }, 0); //parseInt( pageOffsets[sectionAlphabet][sectionNumber-1] );
				_html = '';
			}
		}catch(e){debugger;}
		return {pg: pageno + offset + page_offset, html: _html};
	}

var l = _.pluck(SYNONYMS_INDEX, 'l'), n = _.pluck(SYNONYMS_INDEX, 'n'); var id = 'A0'; 

getNextID = function(id, prev){
  var r = /([^\d]+)(\d+)/, a=[], ltr, num, max, offset;
  offset = (!prev || prev != -1) ? 1 : -1;
  if( r.test( id ) ){
    a = r.exec( id ); ltr = a[1]; num = parseInt(a[2]); 
    /*fix letter*/ if(-1 == _.indexOf(l, ltr)){ ltr=_.first(l); num = 1; } max = n[_.indexOf(l, ltr)]; 
    /*fix number*/ if(num > max) num = max; else if(num < 1) num = 1;
    if(num == max && offset == 1){ //this ltr exhausted. go next.
      ltr = (ltr == _.last(l)) ? (_.first(l)) : (l[offset + _.indexOf(l, ltr)]); num = 1;
    }
    else if(num == 1 && offset == -1){
      ltr = (ltr == _.first(l)) ? (_.last(l)) : (l[offset + _.indexOf(l, ltr)]); num = n[_.indexOf(l, ltr)];
    }
    else num += offset;
    return ltr + num;
  }
}

var x=-1,
AsbabAlNuzul = {
   _MAP: //surahPageNoMap
[-1, 1,1,30,48,65, 74,79,81,85,95, 95,97,97,x,99, 100,104,108,110,111, 111,112,113,114,121, x,x,123,124,125, 125,127,127,x,x, 132,x,133,133,x, 135,135,136,136,136, 137,x,137,138,143, x,x,143,144,x, 145,146,147,150,152, 154,154,155,157,157, 158,159,159,160,160, x,x,x,160,161, 161,x,x,x,161, 162,x,162,x,x, 162,x,x,x,x, x,163,163,x,x, 164,164,x,165,x, x,165,x,x,165, 166,166,166,166,167, 167,168,168,169],

   _URLold: "//archive.org/stream/Al-wahidisAsbabAl-nuzultheGreatCommentariesOfTheHolyQuranVol.3/Al-wahidisAsbabAl-nuzultheGreatCommentariesOfTheHolyQuranVol.3ImamAl-wahidi?ui=embed#page/n$PAGE/mode/1up",
   _URL: "//archive.org/stream/merged_document_2_201501/merged_document_2?ui=embed#page/n$PAGE/mode/1up",
   _PG_OFFSET: 16,
   lookupSura: function(suraNo){ if(!suraNo || suraNo <1 || suraNo > 114) return;
     var url, pageNo, pageLookup;
     pageLookup = AsbabAlNuzul._MAP[ suraNo ];
	 var ii = 1;
	 while(pageLookup < 0){ pageLookup = AsbabAlNuzul._MAP[ suraNo + ii++ ];}
     if(pageLookup && pageLookup > 0){
       pageNo = AsbabAlNuzul._PG_OFFSET + pageLookup;
       url = AsbabAlNuzul._URL.replace(/\$PAGE/g, pageNo); 
     }
     return url;
   }
}


MaarifulQuraan = {
   _MAP: { //surahPageNoMap
	2:   [1,  53,95], //vol #1. key is last sura in vol. vol# is object index. first sura is 1st array value.
	4:   [3,  23,291], //v 2
	7:   [5,  19,297,537], //v 3
	11:  [8,  145,299,509,593], //v 4
	18:  [12,  23,181,235,295,331,  453,569], //v 5
	30:  [19,  29,75,175,241,297,  343,471,523,567,627,  681,717], //v 6
	46:  [31,  25,65,85,259,321,  363,419,497,543,585,  627,669,709,743,767,  785], //v 7
	114: [47,  30,63,113,149,171,  189,199,237,252,277,  304,344,366,410,435,  445,461,477,488,517,  529,544,564,574,585,  594,611,634,649,661,  672,680,692,703,713,  721,725,738,750,756,  761,772,778,792,799,  804,811,818,824,830,  843,849,855,858,863,  865,869,874,877,885,  889,892,898,904,906,  914,918,926] //from surah 47. v 8
   },
   _PG_OFFSET: [-1, 19,16,  -4,-6,  -5,-8,-10,  10,8,6,4,  -4,-7,-9,-12,-14,-16,-19,  -5,-7,-9,-12,-14,-17,-19,-21,-23,-26,-29,-31,  
				-4,-6,-9,-11,-13, -16,-19,-22,-24,-27,  -30,-32,-34,-36,-39,  -42, //v7
				//-1,-1, for all of v8
				],

   _URL: "//archive.org/stream/English-MaarifulQuran/English-MaarifulQuran-MuftiShafiUsmaniRA-Vol-$VOL?ui=embed#page/n$PAGE/mode/1up",
   _URL2: "//islamicstudies.info/maarif/surah$SURA.htm",
   _VOL: 1, _PAGE: 17, _MODE: 1, 
   
   lookupSura: function(suraNo){ if(!suraNo || suraNo <1 || suraNo > 114) return;
     var url, pageNo, volNo=0, map, pageNo;
	 map = _.find(MaarifulQuraan._MAP, function(value, key){ ++volNo; return key >= suraNo; })
	 if( map ){
		pageNo = map[ suraNo - map[0] + 1];
		offset = suraNo >=47 ? -1 : MaarifulQuraan._PG_OFFSET[ suraNo ]; pageNo += offset;
		url = MaarifulQuraan._URL.replace(/\$VOL/, volNo).replace(/\$PAGE/, pageNo);
	 }
	 return url;
   }
}

MoharAliWordByWordQuraan = {
   _MAP: { //vol #1. key is last sura in vol. vol# is object index. first sura is 1st array value.
	11:   [1,  1,4,154,236,325,  391,465,546,576,635,  677], 
	35:   [12,  722,763,782,806,827,  872,910,950,976,1012,  1044,1075,1105,1137,1162,  1202,1231,1265,1290,1311,  1324,1334,1367,1389],//v 2
	114:   [36,  1409,1430,1459,1480,1509,  1540,1560,1582,1606,1618,  1631,1647,1661,1676,1685,  1696,1707,1717,1729,1741,  1753,1767,1782,1794,1806,  1814,1820,1825,1830,1837,  1844,1850,1859,1868,1877,  1884,1890,1898,1904,1913,  1919,1926,1933,1940,1947,  1953,1957,1960,1966,1970,  1974,1977,1980,1984,1989,  1992,1995,1998,2000,2002,  2004,2007,2008,2011,2013,  2015,2017,2019,2020,2022,  2023,2024,2025,2026,2027, 2028,2029,2030,2031,2032], //v 3
   },
   _VOLS: [-1, 'AWordForWordMeaningOfTheQuran/AWordForWordMeaningOtTheQuran-1', 'AWordForWordMeaningOtTheQuran--2/AWordForWordMeaningOtTheQuran--2', 'AWordForWordMeaningOtTheQuran-3/AWordForWordMeaningOtTheQuran-3'],
   _PG_OFFSET: [-1, 14,14,14,14,14, 14,14,17,17,17, 17,
					14,14,16,14,14, 14,14,14,14,14, 14,14,14,14,14, 15,15,16,16,16, 17,16,16,16,
					13,13,13,13,13, 13,13,13,13,13, 13,13,13,13,13, 14,14,14,14,13, 13,13,13,13,13, 13,13,13,13,13, 13,13,13,13,13, 13,13,13,13,13, 13,13,13,13,13, 13,13,13,13,13, 13,13,13,13,13, 13,13,13,13,13, 13,13,13,13,13, 13,13,13,13,13, 13,13,13,13,13, 13,13,13,13,13
				],
   _URL: "//archive.org/stream/$VOL?ui=embed#page/n$PAGE/mode/1up",   
   lookupSura: function(suraNo){ if(!suraNo || suraNo <1 || suraNo > 114) return;
     var url, pageNo, volNo=0, map, pageNo;
	 map = _.find(MoharAliWordByWordQuraan._MAP, function(value, key){ ++volNo; return key >= suraNo; })
	 if( map ){
		pageNo = map[ suraNo - map[0] + 1];
		pageNo -= map[ 1 ] - 1; //this book has increasing pg numbers vol to vol.
		offset = MoharAliWordByWordQuraan._PG_OFFSET[ suraNo ]; pageNo += offset;
		url = MoharAliWordByWordQuraan._URL.replace(/\$VOL/, MoharAliWordByWordQuraan._VOLS[volNo]).replace(/\$PAGE/, pageNo);
	 }
	 return url;
   }
}



