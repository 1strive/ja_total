/*
 * @Author: JA
 * @Date: 2022-09-14 02:57:03
 * @LastEditTime: 2022-09-14 23:43:53
 * @LastEditors: JA
 */
var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

const colors = ['#5470C6', '#91CC75', '#EE6666'];
option = {
    color: colors,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    legend: {
        data: ['孔隙率', '阻力系数']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            // prettier-ignore
            data: ['10', '20', '30', '35', '50']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '孔隙率',
            position: 'right',
            alignTicks: true,
            min: 0.8,
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '阻力系数',
            position: 'left',
            alignTicks: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name: '孔隙率',
            type: 'bar',
            barWidth:'30%',
            data: [
                0.9824, 0.9673, 0.9521, 0.9445, 0.9219
            ]
        },
        // {
        //     name: 'Precipitation',
        //     type: 'bar',
        //     yAxisIndex: 1,
        //     data: [
        //         // 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
        //     ]
        // },
        {
            name: '阻力系数',
            type: 'line',
            yAxisIndex: 1,
            data: [40.605, 50.580, 53.884, 53.445, 51.505]
        }
    ]
};
if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);