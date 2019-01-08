function interpretLiverCancerRisk(info)
{
    var risk = parseFloat(info['risk']);

    output = '';

    if (isNaN(risk))
    {
      output = 'Not a valid input.';
    }
    else if (risk < 0.2)
    {
        output ='<p style="font-weight: bold;">TREATMENT RECOMMENDATION: No antiviral treatment for Hepatitis B is indicated at this time.</p> <p>MONITORING RECOMMENDATION: Every 3 to 6 months, monitor and reassess liver function (ALT), Hepatitis B e Antigen status (HBeAG), and Hepatitis B DNA virus copy counts(HBV-DNA).</p></div>';
   }

    else if (risk >= 0.2 && risk < 1)
    {
        output ='<p style="font-weight: bold;">TREATMENT RECOMMENDATION: Consider a liver biopsy or a non-invasive liver fibrosis assessment and, if moderate or greater inflammation or fibrosis are detected,then treat Hepatitis B with one of two first-line oral antiviral medications,Entecavir (1 mg tablet by mouth on an empty stomach daily for adults) or Tenofovir (300mg tablet by mouth daily for adults)</p> <p>MONITORING RECOMMENDATION: Every 3 to 6 months, monitor and reassess liver function (ALT), Hepatitis B e Antigen status (HBeAG), and Hepatitis B DNA virus copy counts (HBV-DNA).</p>';

   }

    else if (risk >=1 && risk <= 30)

    {
        output ='<p style="font-weight: bold;">TREATMENT RECOMMENDATION: Antiviral treatment with Pegylated Interferon alpha-2a (PEG-INFa2a) is recommended. The normal adult dose is 180 micrograms by injection every week for 48 weeks. Common side effects include flu-like symptoms, headache, fatigue, muscle soreness, and hair loss.</p> <p>MONITORING RECOMMENDATION: Monitor the impact and effectiveness of antiviral treatment every month by reassessing liver function (ALT), Hepatitis B e Antigen status (HBeAG), and Hepatitis B DNA virus copy counts (HBV-DNA). If improvements are apparent,consider changing the monitoring frequency to every 3 months.</p>';

   }
    else
    {

        output ='<p style="font-weight: bold;"> ALERT: A 3 year risk of hepatocelluar cancer of more than 30% may indicate a problem with the risk scoring calculation itself. Check all patient data and reassess hepatocellular risk to confirm. Assuming that the risk is more than 30%, which is very high, then antiviral treatment is highly recommended.</p> <p style="font-weight: bold;"> TREATMENT RECOMMENDATION: Antiviral treatment is recommended.</p> <p>MONITORING RECOMMENDATION: Monitor the impact and effectiveness of antiviral treatment every month by reassessing liver function (ALT), Hepatitis B e Antigen status (HBeAG), and Hepatitis B DNA virus copy counts (HBV-DNA). If improvements are apparent, consider changing the monitoring frequency to every 3 months.</p>';
    }

    return '<div class="interpretation">'+output+'</div>';


}
