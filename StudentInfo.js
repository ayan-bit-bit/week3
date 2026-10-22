const dateofBirth= "23/11/2006"
const getStudentName = () =>
{ 

return "Aian Frig "
}
const getCampusName = () =>
{return ("UEL Campus ")
}

exports.getName=getStudentName
exports.Location=getCampusName
exports.dob=dateofBirth

exports.Studentgrade=(marks)=>
{
if (marks>50 && marks <70) return ("B grade")

else
return ("A grade)")
}