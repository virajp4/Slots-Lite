const slotList = ["🍑", "🍌", "🍒"]
const randNo = () => Math.floor(Math.random() * 3)

export default function Slots() {
    let val1 = slotList[randNo()]
    let val2 = slotList[randNo()]
    let val3 = slotList[randNo()]

    const isAllEqual = val1 === val2 && val2 === val3;

    const textStyle = {
        color: isAllEqual ? 'green' : 'red',
    };

    return (
        <div>
            <h1>{val1} {val2} {val3}</h1>
            <h1 style={textStyle}>{isAllEqual ? "You win!": "You lose!"}</h1>
        </div>
    )
}
