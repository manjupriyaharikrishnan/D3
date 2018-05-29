/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("data/buildings.json").then(function(data){
    data.forEach(function(d){
        d.height = +d.height;
        console.log(d);
    });

    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 500)
        .attr("height", 500);

    var rectangles = svg.selectAll("rect")
        .data(data);

    rectangles.enter()
        .append("rect")
            .attr("x", function(d, i){
                console.log(d);
                return (i * 75);
            })
            .attr("y", 0)
            .attr("width", 50)
            .attr("height", function(d){
                return d.height / 2;
            })
            .attr("fill", function(d){
                    return "grey";
            });
}).catch(function(error){
    console.log(error);
})
