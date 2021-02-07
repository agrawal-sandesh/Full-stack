 function find_average(markList) {
     total = 0;
     try {
         for (let i = 0; i < markList.length; i++) {
             if (!Number.isInteger(markList[i])) {
                 throw new Error("The array has a string character");
             } else {
                 total += markList[i];
             }
             marksAvg = total / markList.length;
         }
         return marksAvg;
     } catch (e) {
         console.log(e);
     } finally {
         let count = 0;
         for (let i = 0; i < markList.length; i++) {
             if (!Number.isInteger(markList[i])) {
                 continue
             } else {
                 count++;
                 total += markList[i];
             }
             marksAvg = total / count;
         }
         return marksAvg;
     }
 }
 mlist = ["A", 2, 3, 4]
 console.log("Average marks:", find_average(mlist))