function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5XgN7OKEF7Z":
        Script1();
        break;
      case "6E5nqIHBne0":
        Script2();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbw2UAtBihKTmL2d8dNmm4XCBIVsZDaVA8DoQ4YDV2eCoSKqFgi2dA5zeKdZ1Fwi7z1O/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect"),q2attempts:player.GetVar("q2attempts"),q2answeredcorrect:player.GetVar("q2answeredcorrect")})
	}
	)
}

function Script2()
{
  const url="https://script.google.com/macros/s/AKfycbw2UAtBihKTmL2d8dNmm4XCBIVsZDaVA8DoQ4YDV2eCoSKqFgi2dA5zeKdZ1Fwi7z1O/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect"),q2attempts:player.GetVar("q2attempts"),q2answeredcorrect:player.GetVar("q2answeredcorrect")})
	}
	)
}

