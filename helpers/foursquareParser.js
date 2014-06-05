var FSHelper = {};
FSHelper.parse = function(data){
    if(data.response){
        var response = data.response;
        var venues = response.venues ;
        if(venues){
            var categories = venues.map(function(venue){
                var cats = venue.categories;
                if(cats){
                    var categoryNames =cats.map(function(category){
                        return category.name;
                    });
                    return categoryNames.join(',');
                }
            });
            
            /* code block to sort the array based on number of occurences
            /* highest number of occurences comes first
            */
            var s = categories.reduce(function(m,v){
              m[v] = (m[v]||0)+1; return m;
            }, {}); // builds {2: 4, 4: 2, 6: 3} 
            var a = [];
            for (k in s) a.push({k:k,n:s[k]});
            // now we have [{"k":"2","n":4},{"k":"4","n":2},{"k":"6","n":3}] 
            a.sort(function(a,b){ return b.n-a.n });
            a = a.map(function(a) { return a.k });
            var sortedCategories = a;
            
            return sortedCategories;
            
            //return categories;
        }
    }
    
}

module.exports = FSHelper;