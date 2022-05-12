<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["labels", "data"],
  watch: {
    $props: {
      handler() {
        const { chartData, chartOptions } = this.buildChart(
          this.$refs.canvas,
          this.labels.list,
          this.data.list
        );
        this.renderChart(chartData, chartOptions);
      },
      deep: true,
    },
  },
  methods: {
    buildChart: (canvas, labels, data) => {
      const gradient = canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);

    gradient.addColorStop(0, "rgba(121,32,196,0.6)");
    gradient.addColorStop(1, "rgba(236,104,143,0.7)");

      const chartData = {
        labels,
        datasets: [
          {
            fill: "origin",
            label: "$Sugar Price",
            data,
            backgroundColor: gradient,
            borderColor: "rgba(255, 255, 255, 0.4)",
            pointBackgroundColor: "rgba(255, 255, 255, 1)",
          },
        ],
      };
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                callback: function (value, index, values) {

                  return value.toFixed(10);
                },
              },
            },
          ],
        },
        title: {
          display: false,
          text: "Sugarland Chart",
        },
      };

      return {
        chartData,
        chartOptions,
      };
    },
  },
  mounted() {
    const { chartData, chartOptions } = this.buildChart(
      this.$refs.canvas,
      this.labels.list,
      this.data.list
    );
    this.renderChart(chartData, chartOptions);
  },
};
</script>
