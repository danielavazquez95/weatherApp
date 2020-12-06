
export const getMinTemp = (data) => {
   let tempMin = data[0].main.temp_min;
   data.forEach(instance => {
      if(instance.main.temp_min < tempMin){
         tempMin = instance.main.temp_min
      }
   })
   return tempMin;
};

export const getMaxTemp = (data) => {
   let tempMax = data[0].main.temp_min;
   data.forEach(instance => {
      if(instance.main.temp_max > tempMax){
         tempMax = instance.main.temp_max
      }
   })
   return tempMax;
};