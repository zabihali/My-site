        let price = 26; // Initial price for 500g
        let weight = 500; // Initial weight (500g)

        document.getElementById('plus').addEventListener('click', () => {
            if (weight === 500) {
                // Allow increment only from 500g to 1000g
                price += 20; // Update price
                weight += 500; // Update weight

                // Update button texts
                document.getElementById('price').textContent = `Price: $${price}`;
                document.getElementById('weight').textContent = `Weight: ${weight}g`;
            }
        });

        document.getElementById('minus').addEventListener('click', () => {
            if (weight === 1000) {
                // Allow decrement only from 1000g to 500g
                price -= 20; // Update price
                weight -= 500; // Update weight

                // Update button texts
                document.getElementById('price').textContent = `Price: $${price}`;
                document.getElementById('weight').textContent = `Weight: ${weight}g`;
            }
        });