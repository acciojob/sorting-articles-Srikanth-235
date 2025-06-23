//your JS code here. If required.
 const bands = [
            'The Plot in You',
            'The Devil Wears Prada',
            'Pierce the Veil',
            'Norma Jean',
            'The Bled',
            'Say Anything',
            'The Midway State',
            'We Came as Romans',
            'Counterparts',
            'Oh, Sleeper',
            'A Skylit Drive',
            'Anywhere But Here',
            'An Old Dog'
        ];
function strip1(s){
	return s.replace(/^(a|the|an)/i, '').trim();
}
 const sortedlist=  bands.sort((a,b) => strip1(a).localeCompare(strip1(b)));
  const ulelement=document.getElementById('band');
   sortedlist.forEach(sri => {
	   const li = document.createElement('li');
	   li.textContent=sri;
	   li.type="square";
	   ulelement.append(li);
   });