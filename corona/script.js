            // CORONA TRACKER USING API 
            // URL = https://api.covid19api.com/summary

            // ============================LET'S START=========================

fetch('https://api.covid19api.com/summary').then((ApiData) => {
            console.log(ApiData);
            return ApiData.json();
  }).then((ActualData) => {

      console.log(ActualData.Countries[77])
    const Corona = ActualData.Countries[77];

    document.getElementById('ShowResult').innerHTML = 
    // THIS THE FINAL API RESULT WHICH WILL BE VISIBLE TO THE VISITORS
    `Date = ${Corona.Date} <br>
     New Confirmed Cases = ${Corona.NewConfirmed} <br>
     New Deaths = ${Corona.NewDeaths} <br>
     New Recovered = ${Corona.NewRecovered}`;

    //  ANOTHER DATA (TOTAL R,D,C.C)
    document.getElementById('ShowResult2').innerHTML =
    `Total Recovered  = ${Corona.TotalRecovered} <br>
     Total Deaths = ${Corona.TotalDeaths} <br>
     Total Confirmed Cases = ${Corona.TotalConfirmed}`
  }).catch((error) => {
      console.log(error);
  })