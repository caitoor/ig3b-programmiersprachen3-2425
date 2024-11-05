$(document).ready(function () {
    $.each(data, function (index, animal) {
        let divBox = $(`<div class="card-wrapper">
            <div class="card-content">
                <div class="card-header">
                    <div class="card-number">F2</div>
                    <div class="card-title">${animal.name}</div>
                </div>
                <img src="images/f2.jpg" alt="Nilpferd" class="card-image" />

                <div class="card-trivia">Nilpferde können bis zu 8 Minuten unter Wasser bleiben.</div>
                <div class="card-statistics">
                    <div class="statistics-pair">
                        <div class="stat-name">
                            <img src="images/icons/weight.png" alt="weight">
                        </div>
                        <div class="stat-value">4500</div>
                    </div>
                    <div class="statistics-pair">
                        <div class="stat-name">
                            <img src="images/icons/length.png" alt="length">
                        </div>
                        <div class="stat-value">400</div>
                    </div>
                    <div class="statistics-pair">
                        <div class="stat-name">
                            <img src="images/icons/age.png" alt="maximum age">
                        </div>
                        <div class="stat-value">50</div>
                    </div>
                    <div class="statistics-pair">
                        <div class="stat-name">
                            <img src="images/icons/speed.png" alt="maximum speed">
                        </div>
                        <div class="stat-value">35</div>
                    </div>
                    <div class="statistics-pair">
                        <div class="stat-name">
                            <img src="images/icons/offspring.png" alt="offspring count per cycle">
                        </div>
                        <div class="stat-value">1</div>
                    </div>
                    <div class="statistics-pair">
                        <div class="stat-name">
                            <img src="images/icons/death.png" alt="caused human casualties per year">
                        </div>
                        <div class="stat-value">500</div>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
           
        $('#wrapper').append(divBox);
    });
});

/* let div = document.createElement('div');
div.className = 'card-wrapper';
div.innerText = animal.name;
document.getElementById("wrapper").appendChild(div); */