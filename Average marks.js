var students = [['kishore',80],['rani',90],['gs',85],['keerthana',82],['aakash',84]]
var averagemarks = 0
for(var i = 0;i < students.length;i++)
{
    averagemarks += students[i][1]
    var Avermarks = averagemarks/students.length
}
if(Avermarks < 60)
{
    console.log("Grade F")
}
else if(Avermarks < 70 && Avermarks > 60)
{
    console.log("Grade D")
}
else if(Avermarks < 80 && Avermarks > 70)
{
    console.log("Grade C")
}
else if(Avermarks < 90 && Avermarks > 80)
{
    console.log("Grade B")
}
else if(Avermarks < 100 && Avermarks > 90)
{
    console.log("Grade A")
}
else
{
    console.log("Invalid marks")
}