import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components'
import img from '../imgs/한반도.png'
import { ResortModal } from './ResortModal';

export function SkiButton(props) {
    const [resortOpen, setResortOpen] = useState(false);
    const [dayState, setDayState] = useState({
        date: "",
        day: "",
        currentWeather: "",
        tempCelcius: "",
        tempMax: "",
        tempMin: "",
        icon: "",
        week: []
    })
    const API_KEY = '465b890d740de2877b1582f311306e35';

    const openResort = () => {
        setResortOpen(true);
        getWeather(props.lat, props.lon);
    }

    const closeResort = () => {
        setResortOpen(false);
    }

    const getWeather = async (lat, lon) => {
        try{
            //현재 날씨 정보
            const resWeather = await axios.get(
                //`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
            );

            //if (mounted) {
                let _main = resWeather.data.weather[0].main;
                let _icon = resWeather.data.weather[0].icon;
                let _temp = resWeather.data.main.temp;

                let _test = "http://openweathermap.org/img/w/" + _icon + ".png";
                //setIsLoading(false);
            //} 

            // 5일 간 최저, 최고 기온
            let date_now = new Date();
            let m = date_now.getMonth() + 1;
            let d = date_now.getDate();
            let idx = date_now.getDay();
            let week = ['일', '월', '화', '수', '목', '금', '토', '일', '월', '화', '수', '목', '금', '토'];
            let weekSlice = week.slice(idx, idx+5);

            const resWeek = await axios.get(
                //`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
            );

            let min_arr = [];
            let max_arr = [];
            for (let i = 0; i < 40; i++) {
                min_arr.push(resWeek.data.list[i].main.temp_min);
                max_arr.push(resWeek.data.list[i].main.temp_max);
            }
            let minMax = [];
            for (let i = 0; i < 40; i += 8) {
                let i_min = Math.min.apply(null, min_arr.slice(i, i + 8));
                let i_max = Math.max.apply(null, max_arr.slice(i, i + 8));
                minMax.push({"day": weekSlice[i / 8], "min": Math.floor(i_min * 10) / 10, "max": Math.ceil(i_max * 10) / 10});
            }
            
            setDayState({
                ...dayState,
                date: m+'월 '+d+'일 ',
                day: week[idx],
                currentWeather: _main,
                tempCelcius: Math.round(_temp * 10) / 10,
                tempMax: minMax[0].max,
                tempMin: minMax[0].min,
                icon: _test,
                week: minMax
            })
        } catch (error) {
            console.log(error);
            console.log("날씨 정보 get 실패");
            //setError(true);
            //setIsLoading(false);
        }
    };

    return (
        <>
        <Button>
            <Region>{props.region}</Region>
            <ResortName onClick={openResort}>{props.name}</ResortName>
        </Button>
        <ResortModal open={resortOpen} close={closeResort} header={props.name} engCity="Seoul" dayState={dayState} />
        </>
    )
}

const Button = styled.div`
display: flex;
font-size: 14px;
margin: 20px;
`

const Region = styled.div`
    background-color: #C2CFD8;
    padding: 10px;
    border-radius: 10px 0 0 10px;
    //border: 1px solid #48494B;
    box-shadow: 4px 6px 6px -2px rgba(17, 20, 24, 0.15);
`

const ResortName = styled.div`
    background-color: #FAFAFA;
    border-radius: 0 10px 10px 0;
    padding: 10px;
    //border: 1px solid #48494B;
    box-shadow: 4px 6px 6px -2px rgba(17, 20, 24, 0.15);
`
