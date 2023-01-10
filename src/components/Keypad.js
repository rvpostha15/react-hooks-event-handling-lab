// Code Keypad Component Here

function Keypad (){
    return (
        <div>Password: 
            <input
                type = "password"
                onChange={handleChange} 
            />
        </div>
    )
}

const handleChange = (e) => {
    e.preventDefault();
    console.log("Entering password...")
}

export default Keypad;