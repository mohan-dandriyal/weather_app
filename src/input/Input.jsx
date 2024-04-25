import { useWeatch } from "../context/WeatherContext"




export const Input = () => {

    const Weatch = useWeatch()

    return(
        <input type="text"
        placeholder="Seach City..."
        onInput={(e) => Weatch.setSearhcCity(e.target.value)}
        />
    )
}