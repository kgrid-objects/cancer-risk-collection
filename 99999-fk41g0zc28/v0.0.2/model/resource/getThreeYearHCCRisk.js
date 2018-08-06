function getThreeYearHCCRisk(info)

{

    var HepB = parseInt(info['HepB']);

    var gender = info['gender'];
    var currentage = parseInt(info['age']);
    var paramALT = parseInt(info['ALT']);
    var paramHBeAg = parseInt(info['HBeAg']);
    var paramHBVDNAlevel = parseFloat(info['HBVDNAlevel']);

    var   op = {'success':'','errorMessage':'','result':''};

    var inputvalidated = true

    if( HepB==0 ) {
      inputvalidated = false
      op['errorMessage'] = 'Not applicable for HepB -';
    }

    if( paramHBVDNAlevel < 300 ) {
      inputvalidated = false
      op['errorMessage'] = 'Parameter HBVDNAlevel should be of minimum value 300'
    }

    if(inputvalidated)
    {
      var  paramGender = 0;

        if (gender == 'M' || gender == 'm')
        {
            paramGender = 1;
        }

        var P0forThreeYearHCCRisk = 0.99853;

        var maleCoef = 0.78798;
        var ageCoef = 0.09859;
        var ALTCoef = 0;

        if (paramALT >= 15 && paramALT <= 44 )
        {
            ALTCoef = 0.38823;

        }

        else if  (paramALT >= 45 )
        {
            ALTCoef = 0.96311;
        }

        var HBeAgCoef = 0;

        if (paramHBeAg > 0 )
        {
            HBeAgCoef = 0.81308;

        }

        HBVDNAlevelCoef = 0;

        if (paramHBVDNAlevel >= 300 && paramHBVDNAlevel <= 9999)
        {
            HBVDNAlevelCoef = 0.11648;
        }
        else if (paramHBVDNAlevel >=10000 && paramHBVDNAlevel <= 99999)
        {
            HBVDNAlevelCoef = 1.31467;

        }
        else if  (paramHBVDNAlevel >= 100000 && paramHBVDNAlevel <= 999999)
        {
            HBVDNAlevelCoef = 2.27028;
        }
        else if (paramHBVDNAlevel >= 1000000)
        {

            HBVDNAlevelCoef = 2.09258;
        }
        finalExValue =  maleCoef * paramGender + currentage * ageCoef +  ALTCoef + paramHBeAg * HBeAgCoef +  HBVDNAlevelCoef - 6.12796;
        threeYearHCCRisk = 1 - Math.pow( P0forThreeYearHCCRisk, Math.exp(finalExValue) );

        op['result'] =  parseFloat(threeYearHCCRisk * 100 );
        op['success'] = 1;
        op['errorMessage'] = '-';
    }
       else
    {
        op['success'] = 0;
     }
    return op;


}
