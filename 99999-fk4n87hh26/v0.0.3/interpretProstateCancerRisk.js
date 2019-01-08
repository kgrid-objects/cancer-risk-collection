function interpretProstateCancerRisk(info)
{

    noRisk = parseFloat(info['noRisk']);
    lowRisk = parseFloat(info['lowRisk']);
    highRisk = parseFloat(info['highRisk']);

    interpretation = "";

    if (isNaN(highRisk))
    {
      interpretation = 'Not a valid input.';
    }


    else if (highRisk > 3)

    {


        interpretation='<p style="font-weight: bold;"> RECOMMENDATION: Consider a prostate biopsy.</p> <p>A prostate biopsy is indicated because the chance of having high-grade prostate cancer is <b>greater than 3%</b>.</p>';

     }

    else
    {


        interpretation='<p style="font-weight: bold;"> RECOMMENDATION: A prostate biopsy is not indicated.</p> <p>Because the <b>risk of high-grade prostate cancer is low</b>, a prostate biopsy is not indicated. Watchful waiting and reassessment of risk after one year are advised.</p>';

}

    return '<div class="interpretation">'+interpretation+'</div>'

}
