# CS 424 - Assigment 4: Visualization & Visual Analytics

Link to our website: https://crashes-visualization.netlify.app/

## Dataset

Traffic Crashes - Crashes
URL: [https://data.cityofchicago.org/Transportation/Traffic-Crashes-Crashes/85ca-t3if]

## Dataset description

- The dataset "Traffic Crashes - Crashes" is hosted on the City of Chicago's data portal and provides comprehensive information about traffic accidents in the city.
- The dataset has a total of 49 columns and 770 thousand rows.
- It encompasses a substantial volume of data, consisting of thousands of records, each representing a reported traffic crash incident.
- The dataset includes attributes such as the date and time of the accident, location coordinates, type of crash (e.g., hit and run, rear-end collision), the number of people involved and injured, and the weather conditions at the time of the incident. It also contains details about the vehicles involved, including their make, model, and contributing factors to the crash. About half of all crash reports, mostly minor crashes, are self-reported at the police district by the driver(s) involved and the other half are recorded at the scene by the police officer responding to the crash.
- Potential users of this dataset include traffic safety researchers, city planners, law enforcement agencies, insurance companies, and transportation analysts. Use cases may involve identifying high-risk areas for accidents, assessing the impact of weather on traffic safety, and developing strategies to improve road safety and reduce accidents within the city of Chicago.

## Website interface

![image](https://github.com/uic-cs424/assignment-4-thevisual/assets/102627561/6bebaf39-6670-432f-8b42-c14d378670a2)

## Visualization

### Vis1

#### The trends of the number of accidents related to types of traffic ways and type of first crashes over years

The visualization incorporates a scatter plot and a line chart, each portraying distinct aspects of the dataset. The scatter plot represents 'FIRST CRASH TYPE' and 'TRAFFIC WAY TYPE' on the x and y axes, respectively. Each plotted point signifies a specific pairing of these categorical attributes, creating a grid-like arrangement. The line chart, on the other hand, illustrates the 'NUMBER OF ACCIDENTS' across 'TIME' (years), revealing trends and variations over time.

To enhance user interaction, the visualization incorporates a selection mechanism that synchronizes both the scatter plot and the line chart. Users can select specific elements within the scatter plot or line chart, activating a conditional color change to highlight the selected points or lines in 'lightgray.' This interactive selection mechanism allows users to analyze relationships between specific crash types, traffic way types, and accident count variations over the years, facilitating a more in-depth exploration of the dataset. The motivation behind this visualization was to see how road designs or infrastructures are related to different types of crashes and time patterns providing us more insights to see how the relationship has changed for years.
![](<img/vis1(v2_1).png>)

### Vis2

#### Relationship between posted speed limit, traffic way type, and lighting condition

The visualization explores the relationship between three key attributes: 'POSTED_SPEED_LIMIT', 'TRAFFICWAY_TYPE', and 'LIGHTING_CONDITION'. It aims to provide insights into how speed limit regulations relate to different traffic way types under distinct lighting conditions.
The visualization comprises two linked components presented side by side. The left side displays a scatter plot (points), representing 'POSTED_SPEED_LIMIT' on the y-axis and 'TRAFFICWAY_TYPE' on the x-axis. The points' color changes based on the selected lighting condition, allowing users to observe how different lighting scenarios affect the relationship between speed limits and traffic way types. Users can interact with this plot by selecting a specific region through a brush tool ('brush') that filters the data, altering the view of both components simultaneously.
The right side showcases a bar chart (bars) exhibiting the count of occurrences of various lighting conditions. This chart changes according to the selection made with the brush on the scatter plot. It offers insights into the distribution of accidents under different lighting conditions, supporting the examination of accident occurrences with respect to speed limit and traffic way type.
The visualization is supplemented with a large title at the end, aiding in providing an overarching context for the entire exploration. This descriptive text highlights the core relationship being examined within the dataset.
![](<img/vis2(v2_2).png>)

### Vis3

#### Crossfilter between Primary Contributory Causes, Traffic Way Type, and Traffic Control Device

The provided visualization showcases three distinct attributes, offering a comprehensive analysis of accidents. Each attribute is depicted as an individual bar chart, providing a clear and precise visualization of the frequency distribution associated with each category. The first bar chart represents the frequency distribution of various "Primary Contributory Causes" linked to reported accidents. The second chart illustrates the different "Trafficway Types" that were involved in reported incidents, displaying the distribution of these types in the data. Finally, the third bar chart visualizes the various "Traffic Control Devices" contributing to the reported accidents. Each chart segment presents a clear overview of the distribution for the respective attribute, supporting insights into their role in accidents.
The visualization's core interaction lies in the functionality of the interval selection mechanism. It empowers users to select specific intervals on the x-axis, prompting the corresponding data within that chosen interval to be highlighted across all three charts simultaneously. This interactive feature is designed to reveal patterns, correlations, or relationships among the different attributes. The highlighting functionality effectively showcases the interdependent trends when particular intervals are selected, providing an interactive exploration of relationships and connections between the contributing causes, trafficway types, and traffic control devices in accidents.
![](<img/vis3(v2_3).png>)

### Vis5

### Heatmap and Barchart of crashes in Chicago, based on postal codes and the corresponding number of crashes

The purpose of this visualization is to visualize crash hotspots. The heatmap can help identify geographical areas in Chicago where a high number of crashes occur. By visualizing these hotspots, it becomes easier to understand the concentration of accidents in specific neighborhoods or intersections. This information is valuable for city planners, traffic engineers, and law enforcement agencies to focus their resources and efforts on improving road safety in these areas.
This chart is interactive, which mouse hovering, when we move the mouse on either the bar chart, it will grey out the part on the map and vice versa.
![](<img/vis5(v3_1).png>)

### Vis6

#### TRAFFIC CRASHES BY WEATHER CONDITION

**Description:**
This interactive graph provides insights into the relationship between weather conditions and traffic crashes, utilizing a dataset of traffic crash records.
The dataset has been filtered to exclude instances of "CLEAR" weather conditions to focus on the impact of adverse weather.

**Chart 1: Number of Crashes by Weather Condition**
The bar chart on the left side of the visualization illustrates the number of traffic crashes for various weather conditions, excluding "CLEAR."
Each bar represents a specific weather condition, and the height of the bar corresponds to the number of crashes associated with that condition. Users can interact with the chart by selecting specific weather conditions of interest.

**Chart 2: Scatter Plot of Crashes Over Time**
On the right side of the visualization, a scatter plot displays individual traffic crash incidents over time.
The x-axis represents the years, while the y-axis shows different weather conditions.
Each data point on the scatter plot represents a single crash event, color-coded according to the corresponding weather condition.
Users can further explore the data by selecting specific weather conditions, which dynamically updates the scatter plot to show only crashes related to the selected weather conditions.

This graph allows users to explore and compare the impact of various adverse weather conditions on traffic crashes, providing a clearer understanding of how weather conditions may contribute to accidents on the road.
Please note that the "CLEAR" weather condition has been excluded from the analysis to focus on conditions with potentially more significant impacts on traffic safety.

The visualization provides a dual-axis view juxtaposing data on traffic crashes. The x-axis showcases various first crash types. The left y-axis, represented by bars, quantifies crash numbers, with bar height indicating frequency for each crash type. Simultaneously, the right y-axis, depicted by a line graph, demonstrates fatal injuries across crash types. Interactive tooltips appear when hovering over the line graph, revealing crash type specifics, crash numbers, and fatal injury counts. This dual-axis approach offers a streamlined comparative analysis, while color encoding differentiates between crash types and emphasizes fatal injuries, marked in red.
![image](https://github.com/uic-cs424/assignment-4-thevisual/assets/102627561/7c3d322b-c5d0-4a0d-9d78-9cb3863a78ff)

