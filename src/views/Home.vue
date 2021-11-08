<template>    
	<div class="p-grid p-mt-3">
		<div class="p-col-4">
			<Chart type="polarArea" :data="chartData" :options="chartOptions"/>
		</div>
        <div class="p-col-4">
			<Chart type="doughnut" :data="chartData" />
		</div>
        <div class="p-col-4">
			<Chart type="pie" :data="chartData"/>
		</div>
	</div>   
</template>
<script>
export default {
    data() {
        return {
            chartData: {
                datasets: [{
                    data: [11,16,7,3,14],
                    backgroundColor: ["#42A5F5","#66BB6A","#FFA726","#26C6DA","#7E57C2"],
                    label: 'My dataset'
                }],
                labels: ["Red","Green","Yellow","Grey","Blue"]
            },
            chartOptions: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: '#ebedef'
                        }
                    }
                }
            }
        }
    }
}
</script>
