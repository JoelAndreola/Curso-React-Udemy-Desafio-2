const Chalenge = () => {
    let a = 12
    let b = 19
    let soma = a + b

    return (
        <div>
            <div>Quanto é {a} + {b}?</div>
            <button onClick={() => console.log(soma)}>Somar</button>
        </div>
    )
}


export default Chalenge