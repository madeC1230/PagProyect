// =========================
// FECHA Y HORA
// =========================

function actualizarHora() {

    let ahora = new Date();

    let fecha = ahora.toLocaleDateString("es-MX");

    let hora = ahora.toLocaleTimeString("es-MX");


    document.getElementById("fechaHora").textContent =
        fecha + " " + hora;


    document.getElementById("horaFooter").textContent =
        fecha + " " + hora;

}


actualizarHora();

setInterval(actualizarHora, 1000);



// =========================
// GRÁFICA DE CONSUMO
// =========================

const ctx = document.getElementById("graficaConsumo");


new Chart(ctx, {

    type: "line",

    data: {

        labels: [

            "18:00",

            "20:00",

            "22:00",

            "00:00",

            "02:00",

            "04:00",

            "06:00"

        ],


        datasets: [

            {

                label: "Consumo real",

                data: [

                    0.18,

                    0.25,

                    0.35,

                    0.30,

                    0.22,

                    0.15,

                    0.10

                ],

                borderWidth: 2,

                tension: 0.3

            },


            {

                label: "Consumo tradicional",

                data: [

                    0.45,

                    0.45,

                    0.45,

                    0.45,

                    0.45,

                    0.45,

                    0.45

                ],

                borderWidth: 2,

                tension: 0.3

            }

        ]

    },


    options: {

        responsive: true,

        scales: {

            y: {

                beginAtZero: true,

                title: {

                    display: true,

                    text: "kWh"

                }

            }

        }

    }

});