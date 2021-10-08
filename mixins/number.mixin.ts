export const numberMixin = {
  filters: {
    readableNumber: (value: number) => {
      if (!value || Number.isNaN(+value) || !isFinite(+value))
        return Number(0).toFixed(2)

      return new Intl.NumberFormat('en', {
        minimumFractionDigits: 2,
      }).format(+value)
    },
    shortNumber: (value: number) => {
      if (!value || Number.isNaN(+value)) return Number(0).toFixed(2)

      if (value < 1000) {
        return Number(value).toFixed(2)
      } else if (value >= 1000 && value < 1000000) {
        return (value / 1000).toFixed(1) + 'K'
      } else if (value >= 1000000 && value < 1000000000) {
        return (value / 1000000).toFixed(1) + 'M'
      } else if (value >= 1000000000) {
        return (value / 1000000000).toFixed(1) + 'B'
      }

      return value
    },
  },
}
