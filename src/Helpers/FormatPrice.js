const FormatPrice = ({price}) => {          // we can write props here but we can directly destructure here instead of props
    return (
         Intl.NumberFormat("de-DE",{
         style: "currency",
         currency :"EUR",
         maximumFractionDigits:2,
         }).format(price /10000 )
    )
  }
  
  export default FormatPrice
  