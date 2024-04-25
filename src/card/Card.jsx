import { useWeatch } from "../context/WeatherContext"
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";


export const Card = () => {

    const weather = useWeatch()
    console.log(weather.data);
    return (
        <div className="container">

            <div className="row">

                <div className="wather-dis">
                    <h4>{weather?.data?.current?.temp_c} c</h4>
                    <p className="city_name">{weather?.data?.location?.name}</p>
                    <div className="cloud-det">
                        <div className="d-fex">
                            <p>humidity</p>
                            <p>{weather?.data?.current?.humidity} <WiHumidity /> </p>
                        </div>
                        <div className="d-fex">
                            <p>wind_kph</p>
                            <p>{weather?.data?.current?.wind_kph} kph <FaWind /> </p>
                        </div>
                        <div className="d-fex">
                            <p>wind_dir</p>
                            <p>{weather?.data?.current?.wind_dir} </p>
                        </div>
                    </div>

                </div>
                <div className="wather-image"style={{width: '200px'}}>
                    <img src={weather?.data?.current?.condition?.icon} alt="" />
                    <p className="city">{weather?.data?.location?.name}</p>
                </div>
            </div>

            {/* <div className="row">
                <div className="wather-image">
                    <img src={weather?.data?.current?.condition?.icon} alt="" />
                    <p>{weather?.data?.location?.name}</p>
                </div>
                <div className="wather-dis">
                    <h4>{weather?.data?.current?.temp_c} c</h4>
                    <div className="cloud-det" style={{ display: "flex" }}>
                        <div className="d-fex">
                            <p>humidity</p>
                            <p>{weather?.data?.current?.humidity} </p>
                        </div>
                        <div className="d-fex">
                            <p>wind_kph</p>
                            <p>{weather?.data?.current?.wind_kph} kph </p>
                        </div>
                        <div className="d-fex">
                            <p>wind_dir</p>
                            <p>{weather?.data?.current?.wind_dir} </p>
                        </div>
                    </div>

                </div>
            </div> */}
        </div>
    )
}