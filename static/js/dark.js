(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function(exports, echarts) {
    var log = function(msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    var axisCommon = function() {
        return {
            axisLine: {
                lineStyle: {
                    color: axisColor
                }
            },
            axisTick: {
                lineStyle: {
                    color: axisColor
                }
            },
            axisLabel: {
                textStyle: {
                    color: axisColor
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#DCDCDC'
                }
            },
            splitArea: {
                areaStyle: {
                    color: axisColor
                }
            }
        };
    };
    // 默认字体颜色
    var dftextColor = '#959595'
    // 工具提示-鼠标悬浮-轴线的颜色
    var contrastColor = '#eee'; 
    // 主题色板
    var colorPalette = ['#dd6b66', '#759aa0', '#e69d87', '#8dc1a9', '#ea7e53', '#eedd78', '#73a373', '#73b9bc', '#7289ab', '#91ca8c', '#f49f42'];
    // 坐标轴颜色
    var axisColor = '#959595';
    // 标题颜色
    var titleColor = '#878787';
    // 背景颜色
    var backgroundColor = '#efefef';
    // 图例颜色
    var legendColor = '#959595'

    var theme = {
        backgroundColor: backgroundColor,
        color: ['#1adab8','#0a95dc','#f99403','#49A7DA','#91c7ae','#749f83'],
        textStyle:{
          color: dftextColor
        },
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: contrastColor
                },
                crossStyle: {
                    color: contrastColor
                }
            }
        },
        legend: {
            textStyle: {
                color: legendColor || dftextColor
            }
        },
        title: {
            textStyle: {
                color: titleColor,
                fontSize:16,
                fontFamily:'Microsoft YaHei',
            },
            top: 5,
            left: 'center',
        },
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: contrastColor
                }
            }
        },
        dataZoom: {
            textStyle: {
                color: contrastColor
            }
        },
        grid: {
            containLabel: true,
            left: 5,
            right: 5,
            top: 10,
            bottom: 5,
        },
        timeline: {
            lineStyle: {
                color: contrastColor
            },
            itemStyle: {
                normal: {
                    color: colorPalette[1]
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: contrastColor
                    }
                }
            },
            controlStyle: {
                normal: {
                    color: contrastColor,
                    borderColor: contrastColor
                }
            }
        },
        timeAxis: axisCommon(),
        logAxis: axisCommon(),
        valueAxis: axisCommon(),
        categoryAxis: axisCommon(),
        line: {
            symbol: 'circle',
            symbolSize: 3,
            lineStyle: {
                normal: {
                    width: 1
                }
            }
        },
        bar: {
            barMaxWidth: 30
        },
        graph: {
            color: colorPalette
        },
        gauge: {
            title: {
                textStyle: {
                    color: contrastColor
                }
            },
            axisLine: {
                lineStyle:{
                    color:[[0.2, '#1adab8'], [0.8, '#097e97'], [1, '#f94303']]
                }
            },
            axisTick:{
                show:false
            },
            splitLine:{
                show:false
            }

        },
        candlestick: {
            itemStyle: {
                normal: {
                    color: '#FD1050',
                    color0: '#0CF49B',
                    borderColor: '#FD1050',
                    borderColor0: '#0CF49B'
                }
            }
        }
    };
    theme.categoryAxis.splitLine.show = false;
    echarts.registerTheme('dark', theme);
}));
