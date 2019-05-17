// var lineChartDate={
//     //x坐标数据
//     labels:["周一","周二","周三","周四","周五","周六","周天"]
//     datasets:[
//         {
//             // 统计表的背景颜色
//             fillColor:"rgba(255,255,255,0)",
//             strokeColor:"rgba(0,0,0,1)",
//             pointColor:"rgba(155,39,39,1)",
//             pointStrokeColor:"#fff",
//             pointHighlightFill:'#fff',
//             pointHighlightStroke:"rgba(220,220,220,1)",
//             data:[1,3,5,5,6,8,9]
//         };
//         {
//             webkitTextFillColorfillColor:"rgba(255,255,255,0)",
//             webkitTextstrokeColor:"rgba(92,184,92,1)",
//             pointColor:"rgba(23,126,23,1)",
//             pointStrokColor:"#fff",
//             pointHightFill:'#fff',
//             pointHighStroke:"rgba(151,187,205,1)",
//             data:[2,2,1,4,2,5,7,8,8,4,3]
//         }
//     ]
// }
// window.onload=function () {
//     var ctx=document.getElementById("canvas").getContext("2d");
//     window.myLine=new Chart(ctx).Line(lineChartDate,{
//         responsive:true
//     })
// }

$(function () {
    var data={
        //折线图需要为每个数据点设置一标签。这是显示在X轴上。
        labels: ["第一项","第二项","第三项","第四项","第五项"],
        //数据集（y轴数据范围随数据集合中的data中的最大或最小数据而动态改变的）
        datasets: [{
            label: '折线名',
            backgroundColor: "#fff", //背景填充色
            borderColor: "#36A2EB", //路径颜色
            pointBackgroundColor: "#36A2EB", //数据点颜色
            pointBorderColor: "#fff", //数据点边框颜色
            data: [81,79.2,83,93,84] //对应的值
        }]
    };
    var ctx = document.getElementById("myChart").getContext('2d');
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            title: {
                display: true,
                text: '老罗791' //标题
            }
        }
    });

});
