import { ResponsivePie } from '@nivo/pie'
import { linearGradientDef } from '@nivo/core'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
/*
 data={[
     {
         "id": "CATEGORY",
         "label": "CATEGORY",
         "value": PRICE,
     }
 ]}
*/
const CategoryPieChart = ({data}) => (

    <ResponsivePie
        data={data}
        sortByValue={true}
        startAngle={-360}
        endAngle={360}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        colors={{ scheme: 'brown_blueGreen' }}
        // colors={["BlanchedAlmond", "purple", "orange", "Indigo", "Teal"]}
        borderWidth={3}
        borderColor={{ from: 'color', modifiers: [ [ 'opacity', '0.3' ] ] }}
        // borderColor={{ from: 'color', modifiers: [ [ 'darker', '0.5' ] ] }}
        radialLabelsLinkColor="#fff"
        sliceLabelsTextColor="#fff"
        // sliceLabelsTextColor={{ theme: 'background' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 10,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            },
            linearGradientDef('gradientA', [
                { offset: 0, color: 'inherit' },
                { offset: 100, color: 'inherit', opacity: 0 },
            ]),
            linearGradientDef('gradientB', [
                { offset: 0, color: '#000' },
                { offset: 100, color: 'inherit' },
            ]),
            // using plain object
            {
                id: 'gradientC',
                type: 'linearGradient',
                colors: [
                    { offset: 0, color: 'inherit' },
                    { offset: 100,  color: 'inherit', opacity: 0.7},
                ],
            }
        ]}
        fill={[
            {
                match: {
                    id: 'PAYMENT'
                },
                id: 'dots'
            },{
                match: {
                    id: 'ONETIME_INCOME'
                },
                id: 'gradientC'
            },{
                match: {
                    id: 'CLOTHES'
                },
                id: 'gradientC'
            }, {
                match: {
                    id: 'ENTERTAINMENT'
                },
                id: 'gradientC'
            }, {
                match: {
                    id: 'FOOD'
                },
                id: 'dots'
            }, {
                match: {
                    id: 'HEALTHCARE'
                },
                id: 'gradientC'
            }, {
                match: {
                    id: 'HOUSEHOLD'
                },
                id: 'gradientC'
            }, {
                match: {
                    id: 'HOUSING'
                },
                id: 'gradientC'
            }, {
                match: {
                    id: 'MISCELLANEOUS'
                },
                id: 'gradientC'
            }, {
                match: {
                    id: 'PERSONAL'
                },
                id: 'gradientC'
            }, {
                match: {
                    id: 'PETS'
                },
                id: 'gradientC'
            }, {
                match: {
                    id: 'SAVING'
                },
                id: 'gradientC'
            }, {
                match: {
                    id: 'SERVICES'
                },
                id: 'gradientC'
            }, {
                match: {
                    id: 'TRANSPORTATION'
                },
                id: 'gradientC'
            }, {
                match: {
                    id: 'UNCATEGORIZED'
                },
                id: 'gradientC'
            }, {
                match: {
                    id: 'UTILITIES'
                },
                id: 'gradientC'
            }
        ]}
        legends={[
            {
                anchor: 'left',
                direction: 'column',
                justify: false,
                translateX: -20,
                translateY: 56,
                itemsSpacing: 10,
                itemWidth: 0,
                itemHeight: 10,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]} />
)
export default CategoryPieChart