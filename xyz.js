function refsToRoots( refs ){ //refs = '1:7 89:15 6:94 11:116 53:48',
	var url = 'http://api.globalquran.com/ayah/$REF/quran-corpus-qd%7Cen.sahih?beta&Xformat=jsonp&callback=quran987712',
		refs = _.without(refs.split(' '), ''),
        refs = _.uniq( refs ),
        refsSorted = _.sortBy( refs, function(r){ return parseInt(r)*1000 + parseInt(r.split(':')[1] ); });
        results = [];
        console.log( refsSorted.join(' ') );
	_.each( refsSorted, function(ref){
      if( ref );
	  $.get( url.replace(/\$REF/g, ref) )
	   .then(function( grammar ){   
		var o = grammar,
		  v = _.values( o.quran['quran-corpus-qd'] )[0].verse,
		  rootRegex = /ROOT:([^\|]*)/,
		  rootRegex = /(?:ROOT:)([^\|]*)/g,
		  words = v.split('★'),
		  roots = [];
		  _.each(words, function(word){
			roots.push( rootRegex.test( word ) ? word.match(rootRegex) : '-' );
		  });
		  results.push( {r: ref, pos: _.indexOf(refs, ref), roots: roots.join(' ').replace(/ROOT:/g, '' )} );

          results = _.sortBy(results, function(o){ return _.indexOf(refsSorted, o.r); });
		  if(results.length == refs.length){ console.table( results ); var t = '[';
             _.each( results, function(result){ t += '\n' + JSON.stringify(result) +','; });
             console.log( t + '\n]' );
          }
	  });
	});
}

function xyz(topic, ref){
  $.get('data/synonymsdetails.json', function(data){
    var raw = _.pluck( _.where(data, {id: topic}), 'word' ),
        rawArr = raw.join(' '),
        bare2 = BuckToBare( ArToEn( rawArr ) );
  
    $.get('data/synonymsrefs.json', function(topicsAyahsMap){
      var rawRefs = _.pluck( _.where(topicsAyahsMap, {t: topic}), 'r' );
      var refs = rawRefs[0];
	  console.log( [topic, ref, rawArr, bare2, refs ]);
      refsToRoots( refs );
    });
  });
}
xyz('p36', '18:56');