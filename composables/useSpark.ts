export const useSpark = () => {
    const spark = ref(false)
    const spark2 = ref(false)
    setInterval(() => {
      spark.value = !spark.value
    },200)
    
    
    setInterval(() => {
      spark2.value = !spark2.value
    },100)
    
    return {spark, spark2}
}