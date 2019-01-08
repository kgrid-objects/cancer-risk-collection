function getSixyearprobability(info)
{


    var currentage = parseInt(info['age']);
    var education = info['edLevel'];
    var bmi = parseFloat(info['bmi']);
    var copd = parseInt(info['hxNonLungCancerDz']);
    var personalhistory = parseInt(info['hxLungCancer']);
    var familyhistory = parseInt(info['hxLungCancerFam']);
    var race = parseInt(info['ethnicity']);

    var   op = {'success':'','errorMessage':'','result':''};

    if (info['yrsQuit'] > 0)
    {
       var currentsmokingstatus = 0;
    }
    else
    {
       var currentsmokingstatus = 1;
    }

    var averageCPD = parseInt(info['cigsPerDay']);
    var currentsmokingduration = parseInt(info['yrsSmoker']);
    var currentyearsquit = parseInt(info['yrsQuit']);


    Coeffs=[-1, 0.0778868,-0.0812744,-0.0274194,0.3553063,0.4589971,0.587185,0.2597431,-1.822606,0.0317321,-0.0308572];
    Racecoeffs=[-1, 0,0.3944778,-0.7434744,-0.466585,0,1.027152];



    agecentervalue = 62.0;
    educationcentervalue = 4.0;
    bmicentervalue = 27.0;
    CPDcentervalue =0.4021541613;
    Smokingdurationcentervalue = 27.0;
    Smokingcessationcentervalue = 10.0;



    Modelconstant=-4.532506;

    Agecontribution = (currentage-agecentervalue)*Coeffs[1];


    Educationcontribution = (education-educationcentervalue)*Coeffs[2];


    Bmicontribution = (bmi-bmicentervalue)*Coeffs[3];


    Copdcontribution = copd*Coeffs[4];


    Personalhistorycontribution = personalhistory*Coeffs[5];


    Familyhistorycontribution= familyhistory*Coeffs[6];


    Smokingstatuscontribution= currentsmokingstatus*Coeffs[7];


    if (averageCPD >= 0)
    {
        CPDcontribution = ( Math.pow((averageCPD / 10.0), -1 )-CPDcentervalue)*Coeffs[8];
    }
    else
    {
        CPDcontribution = (0-CPDcentervalue)*Coeffs[8];
    }


    Smokingdurationcontribution = (currentsmokingduration-Smokingdurationcentervalue )*Coeffs[9];


    Smokingcessationcontribution = (currentyearsquit-Smokingcessationcentervalue)*Coeffs[10];


    Racecontribution = Racecoeffs[race];



    Sumvalues = Modelconstant+Agecontribution+Educationcontribution+Bmicontribution+Copdcontribution+Personalhistorycontribution+Familyhistorycontribution+Smokingstatuscontribution+CPDcontribution+Smokingdurationcontribution+Smokingcessationcontribution+Racecontribution;


    Sixyearprobabilitypercentage = 100 * Math.exp(Sumvalues)/(1+Math.exp(Sumvalues));

    op['result'] =  parseFloat(Sixyearprobabilitypercentage);
    op['success'] = 1;
    op['errorMessage'] = '-';

    return op;

    }
