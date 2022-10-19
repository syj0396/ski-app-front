import axios from 'axios';
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

export function ResortModal(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [tempCelcius, setTempCelcius] = useState("");
    const [currentWeather, setCurrentWeather] = useState("");
    const city = props.engCity;
    const [icon, setIcon] = useState("");
    const API_KEY = '465b890d740de2877b1582f311306e35';
    
    useEffect(() => {
        let mounted = true;

        const getWeather = async (city) => {
            try{
                const resWeather = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                );

                if (mounted) {
                    let _main = resWeather.data.weather[0].main;
                    let _icon = resWeather.data.weather[0].icon;
                    let _temp = resWeather.data.main.temp;

                    let _test = "http://openweathermap.org/img/w/" + _icon + ".png";

                    setCurrentWeather(_main);
                    setIcon(_test);
                    setTempCelcius(_temp);
                    setIsLoading(false);
                } 
            } catch (error) {
                console.log("날씨 정보 get 실패");
                setIsLoading(false);
            }
        };

        getWeather(city);

        return () => {
            mounted = false;
        }
    }, []);

    const clickOutside = (e) => {
        if (e.target.className === "openModal skiModal") {
            props.close();
        }
    }
    return (
    <Wrapper>
        <div className={props.open ? "openModal skiModal" : "skiModal"} onClick={clickOutside}>
        {props.open ? (
            <Section>
                <Header>
                    <div></div>
                    {props.header}
                    <Button onClick={props.close}>&times;</Button>
                </Header>

                <TempWeather>
                    {currentWeather}
                    <br />
                    {tempCelcius}
                    <br />
                    <img src={icon} />
                </TempWeather>
            </Section>
        ): null}
        </div>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    .skiModal {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .openModal {
        display: flex;
        align-items: center;
        animation: modal-bg-shadow 0.3s;
    }
`

const Section = styled.div`
    width: 90%;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    //animation: modal-show 0.3s;
    overflow: hidden;
`

const Header = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Button = styled.button`
    outline: none;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    font-size: 30px;
`

const TempWeather = styled.div`

`

const ResortName = styled.div`

`

