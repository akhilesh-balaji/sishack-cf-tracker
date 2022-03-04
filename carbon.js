
		const inputStr = `Hyundai i20	176
        Hyundai Santa Fe	220
        Volkswagen Tiguan	195
        Volkswagen Golf	158
        Honda Jazz	162
        Honda Civic	173
        BMW Series 1	186
        BMW 2 Series Coupe	179
        Mercedes Benz A Class	162
        Mercedes Benz B Class	161
        Audi A1	100
        Audi Q3	146
        Suzuki Swift	106
        Suzuki Baleno	98
        Mahindra Thar	237
        Honda City	99
        Honda Jazz	82`;
                const dataset = Object.fromEntries([['-', ''], ...inputStr.split('\n').map(line => line.split('\t').map(t => ~~t || t))]);
                dataset['None of these'] = '';
        
                function $ (id) {
                    return document.getElementById(id);
                }
                function formatNum (num) {
                    return Math.round(1000 * num) / 1000;
                }
                function reset () {
                    const hasCar = document.querySelector('input[name="use-car"]:checked').value;
                    if (!hasCar) {
                        $('second-div').style.visibility = 'hidden';
                        $('third-div').style.visibility = 'hidden';
                        $('col-4').innerHTML = '<div class="text-muted">Cyclists are <em>excellent</em> for the environment.</div>';
                    } else {
                        $('second-div').style.visibility = 'visible';
                        $('third-div').style.visibility = 'visible';
                        const model = $('models').selectedOptions?.[0]?.value;
                        const distance = ~~($('travelled').value.replace(/[^0-9\.]/g, ''));
                        if (model && dataset[model] && distance) {
                            const emissions = dataset[model] * distance / 1000;
                            $('col-4').innerHTML = `Your carbon emissions this week are <strong>${formatNum(emissions)}</strong> kg, and at this rate your yearly emissions would be <strong>${formatNum(emissions * 0.365)}</strong> metric tonnes per year.`
                        } else $('col-4').innerHTML = '<div class="text-muted">Please fill in all the available fields!</div>';
                    }
                }
                window.onload = () => {
                    // do stuff here
                    $('models').innerHTML = Object.keys(dataset).map(model => `<option value="${model}">${model}</option>`).join('');
                    reset();
                };
                document.addEventListener('click', reset);