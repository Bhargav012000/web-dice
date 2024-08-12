function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceReslut");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(math.random() * 6) + 1;
        values.push(value);
        images.push(`<image src="dice_images/${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${vluews.join(', ')}`;
    diceImages.innerHTML = images.join('');
}