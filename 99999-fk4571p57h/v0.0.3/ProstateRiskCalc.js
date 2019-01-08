function ProstateRiskCalc(info)
{

    var gender = info['gender'];
    var op = {'success':'','errorMessage':'','result':''};


    if(gender == 'M' || gender == 'm')
    {

        var patientVarList = [Math.log(parseFloat(info['PSA']))*Math.LOG2E, info['DRE'], info['PriorBiop'], info['FamHist'], info['AA'], info['Age']];

        s1Constant = -3.00215469;
        s2Constant = -7.05304534;

        s1CoeffList = [0.25613390, -0.03864628, -0.45533257, 0.27197219, .12172599, 0.01643637];
        s2CoeffList = [0.70489441, 0.40068434, -0.21409933, 0.22467348, 1.04174529, 0.04753804];

        var s1 = 0
        var s2 = 0

        patientVarList.forEach(function(e, index){
          var prod1 = e * s1CoeffList[index]
          var prod2 = e * s2CoeffList[index]
          s1 = s1 + prod1
          s2 = s2 + prod2
        })
        s1 = s1 + s1Constant
        s2 = s2 + s2Constant

    	   var risk = {noRisk:100,lowRisk:0,highRisk:0}
         risk.noRisk = 1*100 / (1 + Math.exp(s1) + Math.exp(s2)),
         risk.lowRisk = Math.exp(s1)*100 / (1 + Math.exp(s1) + Math.exp(s2))
         risk.highRisk = Math.exp(s2)*100 / (1 + Math.exp(s1) + Math.exp(s2))

         op['success'] = 1;
         op['errorMessage'] = '-';
         op['result'] = JSON.stringify(risk);
     }
    else
    {
         op['success'] = 0;
         op['errorMessage'] = 'Risk scores are applicable for males only';
    }
    return op;

}
