student_data=[];


function Submit()
{
var name1 = document.getElementById("student_1").value;
var name2 = document.getElementById("student_2").value;
var name3 = document.getElementById("student_3").value;
var name4 = document.getElementById("student_4").value;
student_data.push(name1);
student_data.push(name2);
student_data.push(name3);
student_data.push(name4);
console.log(student_data);
document.getElementById("result").innerHTML=student_data;
}

function Sort()
{
    student_data.sort();
    console.log(student_data);
    document.getElementById("result").innerHTML=student_data
}
