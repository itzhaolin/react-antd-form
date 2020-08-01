## 该项目使用 Create React App 搭建

> 使用的UI组件库是 antd-form(v4+).

### `yarn`
* 安装

### `yarn start`
* 启动

### `yarn build`
* 构建

### `yarn eject`
* 暴露webpack配置

## antd-form版本对比 - [官网描述](https://ant.design/docs/react/migration-v4-cn)
|       | 创建方法 |   区别   |
| :---- | :---- | :---- |
| antd-v3    |  Form.create()(ClassForm) | 包裹当前组件, 通过this.props.form获取对应方法 |
| antd-v4    |  const [form] = Form.useForm() | 通过form={form}创建form实例, 直接调用form.xxx方法 |


```javascript
// v3
class ClassForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
}

export default Form.create()(ClassForm)

```

```javascript
// v4 弃用 Form.create方法

// class语法 通过createRef获取form方法
class ClassForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.formRef = createRef()
    }

    render() {
        return(
            <div>
                <Form ref={this.formRef}>
                </Form>
            </div>
        )
    }
}

export default ClassForm

// hook语法 通过Form.useForm()
function HookForm(props) {
    const [form] = Form.useForm()
    return(
        <Form form={form}></Form>
    )
}
export default HookForm
```
<!-- https://github.com/你的用户名/你的repository仓库名/raw/分支名master/刚你新建的图片文件夹名称/***.png -->
![Home](/assets/1.png)

![ClassForm](/assets/2.png)

![HookForm](/assets/3.png)

![EditForm](/assets/4.png)




```javascript

            /**
             * 
             * var echartData= [
                { name: "电解锌", data: [36] },
                { name: "硅锰合金", data: [19] },
                { name: "磷酸氢钙", data: [11] },
                { name: "硫酸", data: [9] },
            ];


        var option = {
            backgroundColor: '#fff',
            grid: {
                containLabel: true,
                left: 20,
                right: -20,
                top: 0,
                bottom: 40,
                },
                tooltip: {
                show: false,
                },
                legend: {
                show: false,
                },
                xAxis: {
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                },
                yAxis: {
                data: ["sss"],
                axisLabel: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
                },
                color: [
                "#5292FD",
                "#3DBB33 ",
                "#FCAD2C",
                "#EF6B6E",
                "#7F6AAD",
                "#585247",
                ],
                series: [],
        }
        
        echartData.forEach((item, index) => {
                option.series.push({
                type: "bar",
                name: item.name,
                stack: "1",
                label: {
                    normal: {
                    show: true,
                    position: [5, 5],
                    formatter: `{value|${item.data}}\n\n{name|${item.name}}`,
                    align: "left",
                    textStyle: {
                        color: "#fff",
                        rich: {
                        name: {
                            fontSize: "12",
                            fontWeight: 500,
                            color: "gray",
                        },
                        value: {
                            fontSize: "18",
                            fontWeight: 500,
                            color: "#fff",
                        },
                        },
                    },
                    },
                },
                barWidth: 30,
                data: item.data,
                itemStyle: {
                    normal: {
                    barBorderRadius: [0],
                    },
                },
                });
                if (index === 0) {
                option.series[index].itemStyle.normal.barBorderRadius = [
                    5,
                    0,
                    0,
                    5,
                ];
                } else if (index === echartData.length - 1) {
                option.series[index].itemStyle.normal.barBorderRadius = [
                    0,
                    5,
                    5,
                    0,
                ];
                } else {
                return;
                }
            });
             * /
```