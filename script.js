const ctx = document.getElementById('barChart');

new Chart(
    ctx, {
        type: 'bar',
        data: {
            labels: ["Red","Blue","Yellow"],
            Datasets: [
                {
                    Label: "Votes",
                    data: [12,19,3,5],
                    borderwidth: 2,
                    backgroundColor: [
                        'rgba(191, 50, 130, 0.8)',
                        'rgba(50, 67, 191, 0.8)',
                        'rgba(185, 191, 50, 0.8)',
                        'rgba(3, 0, 0, 0.2)'],
                        bordercolor: [
                        'rgba(191, 50, 130, 0.8)',
                        'rgba(50, 67, 191, 0.8)',
                        'rgba(185, 191, 50, 0.8)',
                        'rgba(3, 0, 0, 0.2)'],
                }
            ]
        } 
    }

)