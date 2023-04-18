import React from "react";
import { BarChart } from "../components/BarChart.js";
import { LineChart } from "../components/LineChart.js";
import { PieChart } from "../components/PieChart.js";
import { UserData } from '../DataReading.js';
import { useState } from 'react';
import { Chart, Colors } from 'chart.js/auto';

Chart.register(Colors);
function Analytics_Reading() {
    const [wordsData, setWordsData] = useState({
        labels: UserData.map((data) => data.session),
        datasets: [
            {
                label: "Correct Words",
                data: UserData.map((data) => data.correctWords),
                backgroundColor: "#9bd0c3",
                borderColor: "black",
                borderWidth: 2,
            },
            {
                label: "Wrong Words",
                data: UserData.map((data) => data.wrongWords),
                backgroundColor: "#f6bbaa",
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
                text: "Correct and Wrong Words Per Session",
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

    const sessionData = UserData.find(data => data.id === "If You Give a Mouse a Cookie");

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
            {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "black", height: 75, borderRadius: 25, border: "2px solid #bebebe", marginTop: 20, marginBottom: 20, width: "50%", margin: "auto", backgroundColor: "#aecfcf" }}>
                <span style={{ fontSize: 40, fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", fontWeight: "bold", color: "white" }}> Welcome Danny! </span>
            </div>
            <div style={{ flex: 1, padding: 10, display: "flex", justifyContent: "space-between", marginTop: 20, marginBottom: 20, marginLeft: 10, marginRight: 10 }}>
                <div style={{ width: "30%", display: "flex", justifyContent: "center", alignItems: "center", color: "black", height: 100, borderRadius: 25, border: "2px solid #bebebe", backgroundColor: "#f6bbaa" }}>
                    <span style={{ fontSize: 30, fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", fontWeight: "bold", color: "#EA2300" }}>Streak: 6 days! 🔥</span>
                </div>
                <div style={{ width: "30%", display: "flex", justifyContent: "center", alignItems: "center", color: "black", height: 100, borderRadius: 25, border: "2px solid #bebebe", backgroundColor: "#9bd0c3" }}>
                    <span style={{ fontSize: 30, fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", fontWeight: "bold", color: "#00008B" }}>Books Read: 17! 📖</span>
                </div>
                <div style={{ width: "30%", display: "flex", justifyContent: "center", alignItems: "center", color: "black", height: 100, borderRadius: 25, border: "2px solid #bebebe", backgroundColor: "#fae0a7" }}>
                    <span style={{ fontSize: 30, fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", fontWeight: "bold", color: "#A17F1A" }}>Points Till Next Level: 7! 📈</span>
                </div>
            </div> */}
            <div style={{ display: "flex", padding: 10, weight: "bold" }}>
                <div style={{ flex: "1", paddingLeft: "10px", width: "45%", paddingRight: "10px", backgroundColor: 'white', borderRadius: 25, border: '2px solid #bebebe' }}>
                    <BarChart chartData={wordsData} options={optionsWords}></BarChart>
                </div>
                <div style={{ flex: "1", marginLeft: "10px", width: "45%", paddingRight: "10px", backgroundColor: 'white', borderRadius: 25, border: '2px solid #bebebe' }}>
                    <LineChart chartData={correctWordsPerMinuteData} options={optionsCorrectWordsPerMinute}></LineChart>
                </div>
            </div>
            <div style={{ display: "flex", padding: 10 }}>
                <div style={{ flex: "2", paddingLeft: "10px", width: "45%", paddingRight: "10px", backgroundColor: 'white', borderRadius: 25, border: '2px solid #bebebe' }}>
                    <PieChart chartData={wordPercentagesData} options={optionsWordPercentages}></PieChart>
                </div>
                <div style={{ flex: "2", marginLeft: "10px", width: "45%", paddingRight: "10px", backgroundColor: 'white', borderRadius: 25, border: '2px solid #bebebe' }}>
                    <BarChart chartData={wrongWordsData} options={optionsWrongWords}></BarChart>
                </div>
            </div>
        </div>


    );
}

export default Analytics_Reading;