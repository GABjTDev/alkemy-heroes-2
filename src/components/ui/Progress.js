import ProgressBar from "./ProgressBar";


const Progress = ({powerstats, rol}) => {

    const {combat, power, speed, strength, durability, intelligence} = powerstats;

    return (
        <>
            <ProgressBar title='Combat' progress={combat} rol={rol} />
            <ProgressBar title='Durability' progress={durability} rol={rol} />
            <ProgressBar title='Intelligence' progress={intelligence} rol={rol} />
            <ProgressBar title='Power' progress={power} rol={rol} />
            <ProgressBar title='Speed' progress={speed} rol={rol} />
            <ProgressBar title='Strength' progress={strength} rol={rol} />
        </>
    )
}

export default Progress
