import { React, useState, useEffect } from "react";
import { BarChart } from "../components/BarChart.js";
import { LineChart } from "../components/LineChart.js";
import { PieChart } from "../components/PieChart.js";
import { UserData } from '../DataReading.js';
import { Chart, Colors } from 'chart.js/auto';
import AnalyticsWelcome from '../components/AnalyticsWelcome';

Chart.register(Colors);
function Analytics_Reading({ DBAccuracy, DBWords, mostMissed}) {
    useEffect(() => {
        if ((DBAccuracy != 0) || (DBWords != 0) || (Object.keys(mostMissed).length != 0)) {
                setAccuracy(prevState => {
                    {
                        const updatedDatasets = prevState.datasets.map(dataset => {
                            if (dataset.label === "Accuracy") {
                                return {
                                    ...dataset,
                                    data: [...dataset.data, DBAccuracy]
                                };
                            }
                            return dataset;
                        });
                        return {
                            ...prevState,
                            datasets: updatedDatasets,
                            labels: [...prevState.labels, prevState.datasets[0].data.length + 1]
                        };
                    }
                })
    
                setcorrectWordsPerMinuteData(prevState => {
                    {
                        const updatedDatasets = prevState.datasets.map(dataset => {
                            if (dataset.label === "Correct Words Per Minute") {
                                return {
                                    ...dataset,
                                    data: [...dataset.data, DBWords]
                                };
                            }
                            return dataset;
                        });
                        return {
                            ...prevState,
                            datasets: updatedDatasets,
                            labels: [...prevState.labels, prevState.datasets[0].data.length + 1]
                        };
                    }
                })
        }

    }, [DBAccuracy, DBWords]);
    

    const [accuracy, setAccuracy] = useState({
        labels: UserData.map((data) => data.session),
        datasets: [
            {
                label: "Accuracy",
                data: UserData.map((data) => data.accuracy),
                backgroundColor: "#9bd0c3",
                borderColor: "black",
                borderWidth: 2,
            }
        ]
    });

    const optionsWords = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Sessions",
                    font: {
                        size: 16,
                    },
                    color: "grey",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Accuracy %",
                    font: {
                        size: 16,
                    },
                    color: "grey",
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: "bottom"
            },
            title: {
                display: true,
                text: "Accuracy",
                font: {
                    size: 20,
                    weight: "bold",
                },
                color: "black",
            }
        },
    };

    const [correctWordsPerMinuteData, setcorrectWordsPerMinuteData] = useState({
        labels: UserData.map((data) => data.session),
        datasets: [{
            label: "Correct Words Per Minute",
            data: UserData.map((data) => data.cwpm),
            pointRadius: 5,
            backgroundColor: "#9bd0c3",
            borderColor: "black",
            borderWidth: 2,
        }]
    });

    const optionsCorrectWordsPerMinute = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Sessions",
                    font: {
                        size: 16,
                    },
                    color: "grey",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Correct Words Per Minute",
                    font: {
                        size: 16,
                    },
                    color: "grey",
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: "bottom"
            },
            title: {
                display: true,
                text: "Correct Words Per Minute",
                font: {
                    size: 20,
                    weight: "bold",
                },
                color: "black",
            }
        },
    };

    const sessionData = UserData.find(data => data.session === 3);

    addingToMap();

    const wordPercentagesData = {
        labels: ['Correct Words', 'Incorrect Words', 'Partial Words'],
        datasets: [{
            data: [
                sessionData.correctWordsPercentage,
                sessionData.incorrectWordsPercentage,
                sessionData.partialWordsPercentage,
            ],
            backgroundColor: ['#9bd0c3', '#f6bbaa', '#fae0a7'],
            borderColor: 'black',
            borderWidth: 2,
        }]
    }

    const optionsWordPercentages = {
        maintainAspectRatio: false,
        height: 200,
        plugins: {
            legend: {
                display: true,
                position: "right"
            },
            title: {
                display: true,
                text: "Word Percentages",
                font: {
                    size: 20,
                    weight: "bold",
                },
                color: "black",
            }
        },
    };

    function addingToMap() {
        Object.keys(mostMissed).map((word) => {
            let frequency = mostMissed[word];

            if (sessionData.wrongWordsMap.has(word)) {
                sessionData.wrongWordsMap.set(word, sessionData.wrongWordsMap.get(word) + frequency);
            } else {
                sessionData.wrongWordsMap.set(word, frequency);
            }
        })
    }

    const [wrongWordsData, setWrongWordsData] = useState({
        labels: Array.from(sessionData.wrongWordsMap.keys()),
        datasets: [
            {
                label: "Most Wrong Words",
                data: Array.from(sessionData.wrongWordsMap.values()),
                backgroundColor: "#f6bbaa",
                borderColor: "black",
                borderWidth: 2,
            },
        ]
    });

    const optionsWrongWords = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Wrong Words",
                    font: {
                        size: 16,
                    },
                    color: "grey",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Frequency",
                    font: {
                        size: 16,
                    },
                    color: "grey",
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: "bottom"
            },
            title: {
                display: true,
                text: "Most Wrong Words",
                font: {
                    size: 20,
                    weight: "bold",
                },
                color: "black",
            }
        },
    };


    return (
        <div>
            <AnalyticsWelcome streak="5" num="3" content="BOOKS" verb="READ" points="8"/>
            <div style={{ display: "flex", padding: 10 }}>
                <div style={{ flex: "1", marginLeft: "3%", paddingLeft: "3%", paddingRight: "3%", paddingTop: "3%", height: "400px", backgroundColor: 'white', borderRadius: 25, border: '2px solid #bebebe' }}>
                <LineChart chartData={accuracy} options={optionsWords}></LineChart>
                </div>
                <div style={{ flex: "1", marginLeft: "3%", marginRight: "3%", paddingLeft: "3%", paddingRight: "3%", paddingTop: "3%", height: "400px", backgroundColor: 'white', borderRadius: 25, border: '2px solid #bebebe' }}>
                <LineChart chartData={correctWordsPerMinuteData} options={optionsCorrectWordsPerMinute}></LineChart>
                </div>
            </div>
            <div style={{ display: "flex", padding: 10 }}>
                <div style={{ flex: "1", marginLeft: "3%", marginTop: "2%", marginBottom: "2%", paddingLeft: "3%", paddingRight: "3%", paddingTop: "3%", paddingBottom: "3%", width: "30%", height: "400px", backgroundColor: 'white', borderRadius: 25, border: '2px solid #bebebe' }}>
                <PieChart chartData={wordPercentagesData} options={optionsWordPercentages}></PieChart>
                </div>
                <div style={{ flex: "1", marginLeft: "3%", marginRight: "3%", marginTop: "2%", paddingLeft: "3%", paddingRight: "3%", paddingTop: "3%", marginBottom: "2%", height: "400px", backgroundColor: 'white', borderRadius: 25, border: '2px solid #bebebe' }}>
                <BarChart chartData={wrongWordsData} options={optionsWrongWords}></BarChart>
                </div>
            </div>
        </div>

    );
}

export default Analytics_Reading;